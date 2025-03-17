import React from 'react'

type BlogAsideProps = {
  headings: { id: string; text: string }[]
}

const BlogAside = ({ headings }: BlogAsideProps) => {
  return (
    <aside className="hidden md:block flex-1 max-w-[25rem] gap-4 p-8 min-h-screen w-full sticky top-10">
      <h4 className="scroll-m-20 text-2xl mb-4 font-semibold tracking-tight">
        On this page
      </h4>
      <div className="flex flex-col gap-2">
        {headings.map(({ id, text }) => (
          <a href={`#${id}`} className="text-slate-500 text-md">
            {text}
          </a>
        ))}
      </div>
    </aside>
  )
}

export default BlogAside
