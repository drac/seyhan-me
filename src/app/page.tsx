import PostPreview from "@/components/PostPreview";
import { getAllPosts } from "./blog/post/[postId]/utils";
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  description: 'Articles on frontend development, version control, and software engineering by Seyhan Dzhamur.',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(date);
}

export default function Home({ searchParams }: { searchParams: { tag?: string | string[] } }) {
  const activeTag = Array.isArray(searchParams.tag) ? searchParams.tag[0] : searchParams.tag;

  const posts = getAllPosts().filter(
    (post) => !activeTag || post.tags.includes(activeTag)
  );

  return (
    <section>
      {activeTag && (
        <p style={{ color: "#888888", marginBottom: "2em" }}>
          Showing posts tagged <span style={{ color: "var(--secondary-color)" }}>#{activeTag}</span>
          <span style={{ marginLeft: "8px", marginRight: "8px" }}>|</span>
          <Link href="/">clear filter</Link>
        </p>
      )}
      {posts.length === 0 ? (
        <p style={{ color: "#888888" }}>
          No posts found{activeTag ? <> for <span style={{ color: "var(--secondary-color)" }}>#{activeTag}</span></> : null}.
        </p>
      ) : (
        posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            date={formatDate(post.date)}
            tags={post.tags}
            path={`/blog/post/${post.id}`}
            content={post.description}
            readingTime={post.readingTime}
          />
        ))
      )}
    </section>
  )
}
