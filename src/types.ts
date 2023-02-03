export type Image = {
  src: string
  alt: string
  height?: string
  width?: string
  type?: 'image/png' | 'image/svg+xml' | 'image/jpeg' | 'image/avif' | 'image/webp' | 'image/gif'
}

export type OpenGraph = {
  dir?: string
  lang?: string
  title: string
  description: string
  canonical?: string | URL
  image?: Image
  cardType?: 'summary' | 'summary_large_image'
  pageType?: 'article' | 'website' | 'profile'
}

export interface Post {
  id: string
  slug: string
  draft?: boolean
  content?: string
  Content: unknown

  dir?: string
  lang?: string
  title: string
  description: string
  canonical?: string | URL
  image?: Image

  author?: string
  date: string
  updated?: string
  category?: string
  tags?: Array<string>
  readingTime?: number
}
