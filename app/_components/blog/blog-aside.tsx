'use client'

import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) {
              setActiveId(id)
            }
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px', // Trigger when heading is 30% from top
        threshold: 1.0,
      }
    )

    // Flatten all heading IDs into a single list
    const allIds = headings.flatMap((h) => [
      h.id,
      ...h.subHeadings.map((sh) => sh.id),
    ])

    allIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])

  return (
    <aside className="order-last hidden shrink-0 lg:block w-56 gap-4 px-8 min-h-screen sticky top-16">
      <h4 className="scroll-m-20 text-2xl mb-4 font-semibold tracking-tight">
        On this page
      </h4>
      <div className="flex flex-col gap-2">
        {headings.map(({ id, text, subHeadings }) => (
          <div key={id} className="flex flex-col gap-2">
            <a
              href={`#${id}`}
              className={`text-md transition-colors ${
                activeId === id
                  ? 'text-blue-500 font-semibold'
                  : 'text-muted-foreground'
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
                    className={`text-md transition-colors ${
                      activeId === id
                        ? 'text-blue-500 font-semibold'
                        : 'text-muted-foreground'
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
