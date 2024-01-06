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
        <h1>{title}</h1>
        <small>
          <span style={{ color: "#888888" }}>{date}</span>
          {tags?.length && <span style={{ marginLeft: "8px", marginRight: "8px", color: "#888888" }}>|</span>}
          {tags?.map((tag, index) => (
            <a key={index} href={`?=${tag}`} style={{ marginRight: "4px" }}>#{tag}</a>
          ))}
        </small>
        <p>
          {content}
        </p>
        <a href={path}>
          More &gt;
        </a>
      </section>
      <hr />
    </>
  )
}