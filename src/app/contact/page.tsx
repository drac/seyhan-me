import type { Metadata } from 'next';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Seyhan Dzhamur via GitHub, LinkedIn, or email.',
}

export default function Contact() {
  return (
    <section>
      <h1>{`<Contact/>`}</h1>
      <ul>
        <li><a href="https://github.com/drac">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/seyhandzhamur/">LinkedIn</a></li>
        <li><ObfuscatedEmail /></li>
      </ul>
    </section>
  )
}
