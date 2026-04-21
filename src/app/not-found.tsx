import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', marginTop: '4em' }}>
      <h1>404</h1>
      <p style={{ color: 'var(--secondary-color)' }}>
        The page you&#39;re looking for doesn&#39;t exist, was removed, or you just mistyped the URL.
      </p>
      <p>
        <Link href="/">← Back to home</Link>
      </p>
    </section>
  )
}
