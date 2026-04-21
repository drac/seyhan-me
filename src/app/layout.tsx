import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans_Mono } from 'next/font/google'
import Navigation from '@/components/Navigation'

const notoSansFont = Noto_Sans_Mono({ subsets: ['latin-ext'], weight: ["400", "600"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://seyhan.me'),
  title: {
    default: 'Seyhan Dzhamur',
    template: '%s | Seyhan Dzhamur',
  },
  description: 'Personal blog of Seyhan Dzhamur — senior frontend developer based in Varna, Bulgaria.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Seyhan Dzhamur',
    title: 'Seyhan Dzhamur',
    description: 'Personal blog of Seyhan Dzhamur — senior frontend developer based in Varna, Bulgaria.',
    url: 'https://seyhan.me',
  },
  twitter: {
    card: 'summary',
    title: 'Seyhan Dzhamur',
    description: 'Personal blog of Seyhan Dzhamur — senior frontend developer based in Varna, Bulgaria.',
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  authors: [{ name: 'Seyhan Dzhamur', url: 'https://seyhan.me' }],
  other: {
    'theme-color': '#1e1e1e',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansFont.className} style={{ maxWidth: "720px", margin: "auto" }}>
        <Navigation />
        {children}
        <footer>
          <small style={{ color: "#888888" }}>
            © 2023 All Rights Reserved. Content on the site is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
          </small>
        </footer>
      </body>
    </html>
  )
}
