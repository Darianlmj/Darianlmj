import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import BlogHeader from '@/app/_components/blog/blog-header'
import { Blog } from '@/app/_data/blogs'
import BlogBody from '@/app/_components/blog/blog-body'
import BlogAside from '@/app/_components/blog/blog-aside'

export default async function Post({ params }: Params) {
  const blog = getPostBySlug((await params).slug)

  if (!blog) {
    return notFound()
  }

  const { content, headings } = await markdownToHtml(blog.content || '')

  return (
    <main>
      <div className="flex items-start min-h-screen p-8 gap-8 sm:px-32 font-[family-name:var(--font-inter)]">
        <article className="flex-1 w-full mb-32">
          <BlogHeader
            title={blog.title}
            tags={blog.tags}
            publishDate={blog.publishDate}
            excerpt={blog.excerpt}
            slug={blog.slug}
            content={content}
          />

          <BlogBody content={content} />
        </article>
        <BlogAside headings={headings}/>
      </div>
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
