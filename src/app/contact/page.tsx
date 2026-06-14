import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Seyhan Dzhamur via GitHub or LinkedIn.',
}

export default function Contact() {
  return (
    <section>
      <h1>{`<Contact/>`}</h1>
      <ul>
        <li><a href="https://github.com/drac">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/seyhandzhamur/">LinkedIn</a></li>
      </ul>
    </section>
  )
}
