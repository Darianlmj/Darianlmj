import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { GlobeIcon, PaletteIcon } from 'lucide-react'
import { Badge } from './badge'

const BentoGrid = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-min grid-cols-3 gap-4 my-4',
        className
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  description,
  date,
  tags,
  website,
  design,
  sourceCode
}: {
  name: string
  className: string
  background?: ReactNode
  description: string
  date: string
  tags: string[]
  website?: string
  design?: string
  sourceCode?: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-md',
      // light styles
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className
    )}
  >
    {background && (
      <div className="relative w-full overflow-hidden rounded-t-md">
        {background}
      </div>
    )}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
      <h5 className="text-md font-semibold text-neutral-900 dark:text-neutral-300">
        {name}
      </h5>
      <small className="text-xs text-slate-900 dark:text-slate-100">
        {date}
      </small>
      <p className="max-w-lg text-sm text-muted-foreground">{description}</p>
    </div>
    <div>
      <div className="px-6 flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs px-2 py-1 rounded-sm font-bold font-[family-name:var(--font-jetbrains-mono)]"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* CTA section */}
      <div
        className={cn(
          'pointer-events-none bottom-0 flex w-full flex-wrap transform-gpu flex-row items-center px-6 py-4 gap-4'
        )}
      >
        {website && (
          <Button
            variant="secondary"
            asChild
            size="sm"
            className="pointer-events-auto flex-1"
          >
            <a href={website}>
              <GlobeIcon className="h-4 w-4" />
              Website
            </a>
          </Button>
        )}
        {design && (
          <Button
            variant="secondary"
            asChild
            size="sm"
            className="pointer-events-auto flex-1"
          >
            <a href={design}>
              <PaletteIcon className="h-4 w-4" />
              Design
            </a>
          </Button>
        )}
        {sourceCode && (
          <Button
            variant="secondary"
            asChild
            size="sm"
            className="pointer-events-auto flex-1"
          >
            <a href={sourceCode}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 dark:fill-slate-100"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Source
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
)

export { BentoCard, BentoGrid }
