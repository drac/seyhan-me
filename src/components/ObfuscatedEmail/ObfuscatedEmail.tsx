"use client"
import { useEffect, useState } from 'react'

/**
 * Renders a clickable email link without ever putting the raw address in the
 * page source. The address is assembled from separate parts after the
 * component mounts on the client, so the server-rendered HTML (and therefore
 * static scrapers reading it) never sees a `user@domain` string.
 */
export default function ObfuscatedEmail() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const user = 'seyhan'
    const domain = 'dzhamur.com'
    setEmail(`${user}@${domain}`)
  }, [])

  // Until mounted, render a plain label so nothing harvestable ships in the HTML.
  if (!email) {
    return <span>Email</span>
  }

  return <a href={`mailto:${email}`}>{email}</a>
}
