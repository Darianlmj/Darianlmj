import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

export default async function processMarkdown(markdown: string) {
  const headings: { id: string; text: string }[] = [];

  const result = await unified()
    .use(remarkParse) // Parses markdown
    .use(remarkGfm) // Enables GitHub-flavored markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Converts to HTML-compatible format
    .use(rehypeStringify, { allowDangerousHtml: true }) // Converts AST to HTML string
    .use(rehypeRaw) // Converts AST to HTML string
    .use(() => (tree) => {
      visit(tree, 'element', (node: any) => {
        if (node.tagName === 'h3') {
          const text = node.children
            .filter((child: any) => child.type === 'text')
            .map((child: any) => child.value)
            .join('');

          const id = text.toLowerCase().replace(/\s+/g, '-'); // Convert to slug
          node.properties = { ...node.properties, id }; // Add id to heading
          headings.push({ id, text });
        }
      });
    })
    .process(markdown);

  return { content: String(result), headings };
}