import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  date: string
  content: string
  path: string
  tags?: string[]
}

/**
 * Renders a preview of a post.
 * 
 * @component
 * @example
 * ```tsx
 * <PostPreview
 *  title="Example title"
 *  date="16.10.2023"
 *  content="Lorem ipsum dolor sit amet..."
 *  path="/blog/post/postname"
 *  tags={["tag1", "tag2"]}
 * />
 * ```
 */
export default function PostPreview({ title, date, content, tags, path }: Props) {
  return (
    <>
      <section>
        <h1><Link href={path} style={{ color: 'inherit' }}>{title}</Link></h1>
        <small>
          <span style={{ color: "#888888" }}>{date}</span>
          {(tags?.length ?? 0) > 0 && <span style={{ marginLeft: "8px", marginRight: "8px", color: "#888888" }}>|</span>}
          {tags?.map((tag, index) => (
            <Link key={`${tag}-${index}`} href={{ query: { tag } }} style={{ marginRight: "4px" }}>#{tag}</Link>
          ))}
        </small>
        <p>
          {content}
        </p>
        <Link href={path}>
          More &gt;
        </Link>
      </section>
      <hr />
    </>
  )
}