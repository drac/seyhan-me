import { getPostData } from "./utils"
import ReactMarkdown from 'react-markdown';

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
    <h1 style={{ marginBottom: "32px" }}>{post.title}</h1>
    <ReactMarkdown>
      {post.content}
    </ReactMarkdown>
  </section>
}