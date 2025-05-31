import React from 'react'
import BlogPreviewList from '../_components/blog/blog-preview-list'
import { Breadcrumbs } from '../_components/breadcrumbs'

const Blog = () => {
  return (
    <div className="items-center min-h-screen p-8 sm:px-32 font-[family-name:var(--font-inter)]">
      <Breadcrumbs items={[{ slug: '/blog', name: 'Blog' }]} />
      <BlogPreviewList />
    </div>
  )
}

export default Blog
