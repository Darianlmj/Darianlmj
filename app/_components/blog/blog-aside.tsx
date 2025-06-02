'use client'

import React, { useState } from 'react'

interface Heading {
  id: string
  text: string
  subHeadings: Omit<Heading, 'subHeadings'>[]
}

type BlogAsideProps = {
  headings: Heading[]
}

const BlogAside = ({ headings }: BlogAsideProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleClick = (id: string) => {
    setActiveId(id)
  }

  return (
    <aside className="hidden xl:block flex-1 max-w-[25rem] gap-4 p-8 min-h-screen w-full sticky top-10">
      <h4 className="scroll-m-20 text-2xl mb-4 font-semibold tracking-tight">
        On this page
      </h4>
      <div className="flex flex-col gap-2">
        {headings.map(({ id, text, subHeadings }) => (
          <div key={id} className="flex flex-col gap-2">
            <a
              href={`#${id}`}
              onClick={() => handleClick(id)}
              className={`text-md transition-colors ${
                activeId === id
                  ? 'text-blue-500 font-semibold'
                  : 'text-secondary-foreground'
              }`}
            >
              {text}
            </a>
            {subHeadings.length > 0 && (
              <div className="ml-4 flex flex-col gap-2 border-l-2 border-slate-300 pl-2">
                {subHeadings.map(({ id, text }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => handleClick(id)}
                    className={`text-md transition-colors ${
                      activeId === id
                        ? 'text-blue-500 font-semibold'
                        : 'text-secondary-foreground'
                    }`}
                  >
                    {text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default BlogAside
