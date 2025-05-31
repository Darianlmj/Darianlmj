// @ts-nocheck
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

type Heading = {
  id: string;
  text: string;
  subHeadings: { id: string; text: string }[];
};

export default async function processMarkdown(markdown: string) {
  const headings: Heading[] = [];
  let currentH3: Heading | null = null;

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(() => (tree) => {
      visit(tree, 'element', (node) => {
        if (node.tagName === 'h3' || node.tagName === 'h4') {
          const text = node.children
            .filter((child) => child.type === 'text')
            .map((child) => child.value)
            .join('');

          const id = text.toLowerCase().replace(/\s+/g, '-'); // Convert to slug
          node.properties = { ...node.properties, id }; // Add id to heading

          if (node.tagName === 'h3') {
            currentH3 = { id, text, subHeadings: [] };
            headings.push(currentH3);
          } else if (node.tagName === 'h4' && currentH3) {
            currentH3.subHeadings.push({ id, text });
          }
        }
      });
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return { content: String(result), headings };
}
