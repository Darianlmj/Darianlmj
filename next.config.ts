import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw, rehypeSanitize]
  }
})

export default withMDX(nextConfig)
