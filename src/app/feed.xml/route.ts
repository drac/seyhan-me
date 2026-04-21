import { getAllPosts } from '../blog/post/[postId]/utils'

export function GET() {
  const posts = getAllPosts()
  const siteUrl = 'https://seyhan.me'

  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/post/${post.id}</link>
      <guid>${siteUrl}/blog/post/${post.id}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`).join('')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Seyhan Dzhamur</title>
    <link>${siteUrl}</link>
    <description>Personal blog of Seyhan Dzhamur — senior frontend developer based in Varna, Bulgaria.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(feed.trim(), {
    headers: { 'Content-Type': 'application/xml' },
  })
}
