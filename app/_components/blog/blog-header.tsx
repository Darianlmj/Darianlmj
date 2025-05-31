import { Breadcrumbs } from '../breadcrumbs'
import { Blog } from '@/app/_data/blogs'
import Image from 'next/image'

const BlogHeader = ({ title, tags, publishDate, excerpt, slug }: Blog) => {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs items={[{ slug: '/blog', name: 'Blog' }, { slug, name: title }]}  />
      <div className="pt-4">
        {tags.map((tag) => (
          <div className="flex gap-2 items-center pr-4" key={tag}>
            <div className="block w-4 h-2 rounded-full bg-[#438EDF]"></div>
            <small className="text-sm font-medium leading-none text-[#438EDF]">
              {tag}
            </small>
          </div>
        ))}
      </div>
      <h1 className="relative w-fit scroll-m-20 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 lg:text-5xl">
        {title}
        <Image
          src="/assets/illustrations/sparkles.webp"
          alt="Sparkle"
          width={40}
          height={40}
          className="absolute -right-12 -top-20 md:-right-20 w-40 h-40 inline-block"
        />
      </h1>
      <p className="leading-6 text-sm font-medium text-slate-500">
        Published on{' '}
        {new Date(publishDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })}
      </p>
      <p className="leading-6 font-medium text-slate-900 dark:text-slate-100 text-justify">
        {excerpt}
      </p>
    </section>
  )
}

export default BlogHeader
