import { getPostData } from "./utils"
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

/**
 * Renders a post based on the provided postId.
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.postId - The ID of the post.
 * @returns {JSX.Element} The rendered post component.
 */
export default function Post({ params }: { params: { postId: string } }): JSX.Element {
  const postId = params.postId
  const post = getPostData(postId)
  return <section>
    <Link href="/blog" style={{ color: 'var(--secondary-color)', fontSize: '0.85em' }}>← Back to blog</Link>
    <h1 style={{ marginBottom: "32px" }}>{post.title}</h1>
    <ReactMarkdown>
      {post.content}
    </ReactMarkdown>
    <Link href="/blog" style={{ color: 'var(--secondary-color)', fontSize: '0.85em', display: 'inline-block', marginTop: '2em', marginBottom: '2em' }}>← Back to blog</Link>
  </section>
}