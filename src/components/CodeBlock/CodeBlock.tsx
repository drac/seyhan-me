'use client'

import { useState, useCallback, type ReactNode } from 'react'

export default function CodeBlock({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    const code = extractText(children)
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [children])

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: copied ? 'var(--primary-color)' : 'var(--code-bg-color)',
          color: copied ? 'var(--invert-font-color)' : 'var(--secondary-color)',
          border: '1px solid var(--secondary-color)',
          padding: '2px 8px',
          fontSize: '0.75em',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre>{children}</pre>
    </div>
  )
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && 'props' in node) {
    return extractText(node.props.children)
  }
  return ''
}
