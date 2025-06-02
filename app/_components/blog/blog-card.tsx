import { Blog } from '@/app/_data/blogs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { StickyNoteIcon } from 'lucide-react'

const BlogCard = ({ title, excerpt, publishDate, slug, tags }: Blog) => (
  <div
    key={title}
    className={cn(
      'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-md',
      // light styles
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
    )}
  >
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
      <h5 className="text-md font-semibold text-neutral-900 dark:text-neutral-300">
        {title}
      </h5>
      <small className="text-xs text-slate-900 dark:text-slate-100">
        Published on{' '}
        {new Date(publishDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })}
      </small>
      <p className="text-sm text-secondary-foreground">{excerpt}</p>
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
        <Button
          variant="secondary"
          asChild
          size="sm"
          className="pointer-events-auto flex-1"
        >
          <a href={`/blog/${slug}`}>
            <StickyNoteIcon />
            Read More
          </a>
        </Button>
      </div>
    </div>
  </div>
)

export default BlogCard
