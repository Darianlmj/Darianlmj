import { getAllPosts } from '@/lib/api'
import BlogCard from './blog-card'

const BlogPostTeasers = () => {
  const blogs = getAllPosts()
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, 3)

  return (
    <section>
      <header>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          You might also enjoy
        </h2>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            excerpt={blog.excerpt}
            publishDate={blog.publishDate}
            slug={blog.slug}
            tags={blog.tags}
            content={blog.content}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogPostTeasers
