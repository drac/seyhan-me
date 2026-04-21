import PostPreview from "@/components/PostPreview";
import { getAllPosts } from "./post/[postId]/utils";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on frontend development, version control, and software engineering by Seyhan Dzhamur.',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(date);
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
          readingTime={post.readingTime}
        />
      ))}
    </section>
  )
}
