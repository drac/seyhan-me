import { getPostData, getReadingTime } from "./utils"
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Link from 'next/link';
import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" }).format(date);
}

export function generateMetadata({ params }: { params: { postId: string } }): Metadata {
  const post = getPostData(params.postId)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/post/${post.id}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  }
}

export default function Post({ params }: { params: { postId: string } }): JSX.Element {
  const postId = params.postId
  const post = getPostData(postId)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://seyhan.me/about',
    },
    description: post.description,
    url: `https://seyhan.me/blog/post/${post.id}`,
    keywords: post.tags.join(', '),
  }

  return <section>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Link href="/blog" style={{ color: 'var(--secondary-color)', fontSize: '0.85em' }}>← Back to blog</Link>
    <h1 style={{ marginBottom: "8px" }}>{post.title}</h1>
    <small style={{ display: 'block', marginBottom: '32px' }}>
      <span style={{ color: '#888888' }}>{formatDate(post.date)}</span>
      <span style={{ marginLeft: '8px', marginRight: '8px', color: '#888888' }}>|</span>
      <span style={{ color: '#888888' }}>{getReadingTime(post.content)}</span>
      {post.tags.length > 0 && <span style={{ marginLeft: '8px', marginRight: '8px', color: '#888888' }}>|</span>}
      {post.tags.map((tag, index) => (
        <Link key={`${tag}-${index}`} href={`/blog?tag=${tag}`} style={{ marginRight: '4px' }}>#{tag}</Link>
      ))}
    </small>
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      components={{ pre: ({ children }) => <CodeBlock>{children}</CodeBlock> }}
    >
      {post.content}
    </ReactMarkdown>
    <Link href="/blog" style={{ color: 'var(--secondary-color)', fontSize: '0.85em', display: 'inline-block', marginTop: '2em', marginBottom: '2em' }}>← Back to blog</Link>
  </section>
}