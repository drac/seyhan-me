import PostPreview from "@/components/PostPreview";
import { getAllPosts } from "./post/[postId]/utils";

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${day}.${month}.${year}`;
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section>
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          title={post.title}
          date={formatDate(post.date)}
          tags={post.tags}
          path={`/blog/post/${post.id}`}
          content={post.description}
        />
      ))}
    </section>
  )
}
