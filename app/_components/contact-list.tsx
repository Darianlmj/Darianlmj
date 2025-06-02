'use client'

import { cn } from '@/lib/utils'
import { AnimatedList } from '@/components/ui/animated-list'
import {
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon
} from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'

interface Item {
  name: string
  handle: string
  icon: ReactNode
  link: string
}

let contacts = [
  {
    name: 'Instagram',
    handle: '@darianlmj',
    link: 'https://www.instagram.com/darianlmj/',
    icon: <InstagramIcon />
  },
  {
    name: 'LinkedIn',
    handle: '@Darianlmj',
    link: 'https://www.linkedin.com/Darianlmj/',
    icon: <LinkedinIcon />
  },
  {
    name: 'Website',
    handle: 'https://darianlmj.dev/',
    link: 'https://darianlmj.dev/',
    icon: <GlobeIcon />
  },
  {
    name: 'GitHub',
    handle: '@Darianlmj',
    link: 'https://github.com/Darianlmj',
    icon: <GithubIcon />
  },
  {
    name: 'Instagram (Photography)',
    handle: '@darr.lmj',
    link: 'https://www.instagram.com/darr.lmj/',
    icon: <InstagramIcon />
  },
  {
    name: 'Email',
    handle: 'hi@darianlmj.dev',
    link: 'mailto:hi@darianlmj.dev',
    icon: <MailIcon />
  }
]

const firstRow = contacts.slice(0, contacts.length / 2)
const secondRow = contacts.slice(contacts.length / 2)

contacts = Array.from({ length: 10 }, () => contacts).flat()

const Contact = ({ name, handle, link, icon }: Item) => {
  return (
    <Link href={link}>
      <figure
        className={cn(
          'relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-md p-4',
          // animation styles
          'transition-all duration-200 ease-in-out hover:scale-[103%]',
          // light styles
          'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
          // dark styles
          'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
        )}
      >
        <div className="flex flex-row items-center gap-6">
          <div className="relative flex size-5 items-center justify-center rounded-2xl border border-slate-100 p-4">
            <div className="absolute">{icon}</div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-col items-start whitespace-pre text-lg font-medium dark:text-white ">
              <span className="text-sm text-slate-900 dark:text-slate-100">
                {name}
              </span>
              <span className="text-sm text-muted-foreground">{handle}</span>
            </figcaption>
          </div>
        </div>
      </figure>
    </Link>
  )
}

export function ContactList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex flex-col sm:flex-row h-full w-full justify-center items-center gap-4 sm:gap-8 p-6 overflow-hidden',
        className
      )}
    >
      <AnimatedList>
        {firstRow.map((item, idx) => (
          <Contact {...item} key={idx} />
        ))}
      </AnimatedList>
      <AnimatedList>
        {secondRow.map((item, idx) => (
          <Contact {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  )
}
