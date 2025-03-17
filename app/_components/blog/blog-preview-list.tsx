import { blogs } from '@/app/_data/blogs'
import BlogCard from '@/app/_components/blog/blog-card'

const BlogPreviewList = () => (
  <div className='flex flex-col gap-4 mt-4'>
    {blogs.map((blog) => (
      <BlogCard 
        key={blog.title} 
        title={blog.title}
        excerpt={blog.excerpt}
        publishDate={blog.publishDate}
        slug={blog.slug}
        tags={blog.tags}
        content=''
      />
    ))}
  </div>
)

export default BlogPreviewList