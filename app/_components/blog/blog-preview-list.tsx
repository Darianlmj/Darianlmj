import BlogCard from '@/app/_components/blog/blog-card'
import { getAllPosts } from '@/lib/api'

const BlogPreviewList = ({ limit }: { limit?: number }) => {
  const blogs = limit 
    ? getAllPosts().sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit) 
    : getAllPosts().sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return (
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
  )
}

export default BlogPreviewList
