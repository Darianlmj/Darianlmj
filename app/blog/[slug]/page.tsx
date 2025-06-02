import BlogAside from '@/app/_components/blog/blog-aside'
import BlogComments from '@/app/_components/blog/blog-comments'
import BlogHeader from '@/app/_components/blog/blog-header'
// import BlogPostTeasers from "@/app/_components/blog/blog-post-teasers";
import { Blog } from '@/app/_data/blogs'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Post({ params }: Params) {
  const slug = (await params).slug
  const blog = getPostBySlug(slug)

  if (!blog) {
    return notFound()
  }

  const { default: BlogBody } = await import(`@/app/_posts/${slug}.mdx`)

  const { content, headings } = await markdownToHtml(blog.content || '')

  return (
    <main>
      <div className="flex container mx-auto items-start min-h-screen p-8 gap-8 sm:px-32 font-[family-name:var(--font-inter)]">
        <article className="w-full min-w-0 max-w-6xl px-1 md:px-6">
          <BlogHeader
            title={blog.title}
            tags={blog.tags}
            publishDate={blog.publishDate}
            excerpt={blog.excerpt}
            slug={blog.slug}
            content={content}
          />

          <BlogBody />
        </article>
        <BlogAside headings={headings} />
      </div>
      <div className="flex container mx-auto px-8 sm:px-32 mb-32">
        <BlogComments />
      </div>
      {/* <div className="flex container mx-auto items-start p-8 gap-8 sm:px-32 mb-32">
        <BlogPostTeasers />
      </div> */}
    </main>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const blog = getPostBySlug((await params).slug)

  if (!blog) {
    return notFound()
  }

  const title = `${blog.title} | Darian Lee`

  return {
    title,
    openGraph: {
      title
    }
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((blog: Blog) => ({
    slug: blog.slug
  }))
}
