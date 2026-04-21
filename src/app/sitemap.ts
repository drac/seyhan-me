import type { MetadataRoute } from 'next'
import { getAllPosts } from './blog/post/[postId]/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogPostEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://seyhan.me/blog/post/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://seyhan.me',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://seyhan.me/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://seyhan.me/about',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://seyhan.me/contact',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [...staticPages, ...blogPostEntries]
}
