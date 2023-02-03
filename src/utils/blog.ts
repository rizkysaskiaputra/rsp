import type { CollectionEntry } from 'astro:content'
import type { Post } from '~/types'
import { getCollection } from 'astro:content'

async function getNormalizedPost(post: CollectionEntry<'post'>): Promise<Post> {
  const { id, slug, data } = post
  const { Content, remarkPluginFrontmatter } = await post.render()
  const { title, description, date, ...rest } = data
  return {
    id: id,
    slug: slug,

    title: title,
    description: description,
    date: date,
    ...rest,

    Content: Content,
    readingTime: remarkPluginFrontmatter?.readingTime,
  }
}

async function load(): Promise<Array<Post>> {
  const posts = await getCollection('post')
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post))

  const results = (await Promise.all(normalizedPosts))
    .sort(
      (a, b) =>
        Math.floor(new Date(b.date).getTime() / 1000) -
        Math.floor(new Date(a.date).getTime() / 1000)
    )
    .filter((post) => !post.draft)

  return results
}

let _posts: Array<Post>

/** */
export async function fetchPosts(): Promise<Array<Post>> {
  if (!_posts) {
    _posts = await load()
  }
  return _posts
}
