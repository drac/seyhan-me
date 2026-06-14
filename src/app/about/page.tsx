import type { Metadata } from 'next';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Seyhan Dzhamur — web architect and team lead in Varna, Bulgaria, with over a decade building for the web in React, TypeScript, and Next.js.',
}

const skills = [
  'react', 'typescript', 'nextjs', 'redux', 'graphql', 'react-native',
  'frontend-architecture', 'ui-ux', 'figma', 'web-performance',
  'accessibility', 'team-lead', 'open-source',
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Seyhan Dzhamur',
  url: 'https://seyhan.me',
  jobTitle: 'Web Architect',
  worksFor: { '@type': 'Organization', name: 'Dzhamur Softuer EOOD' },
  address: { '@type': 'PostalAddress', addressLocality: 'Varna', addressCountry: 'BG' },
  knowsAbout: [
    'React', 'TypeScript', 'Next.js', 'Redux', 'GraphQL', 'Apollo',
    'React Native', 'Frontend Architecture', 'UI/UX Design', 'Figma',
    'Web Performance', 'Accessibility', 'Technical Leadership',
    'Open Source Software',
  ],
  sameAs: [
    'https://github.com/drac',
    'https://www.linkedin.com/in/seyhandzhamur/',
  ],
};

export default function AboutMe() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>{`<About/>`}</h1>
      <p>
        Hi, I&apos;m Seyhan, a web architect based in Varna, Bulgaria. I&apos;ve spent more than a decade building for the web. I run my own software company, Dzhamur Softuer EOOD, and for the past few years I&apos;ve contracted through it for the European Patent Office (EPO), leading the architecture and the teams around it, frontend and beyond, while still writing plenty of code. I&apos;d rather not forget how the bricks actually go together. Most of what I think about ends up on the blog.
      </p>
      <hr />
      <h2>What I work with</h2>
      <ul>
        <li><strong>Architecture & leadership:</strong> I lead frontend teams and the web architecture behind them, turning fuzzy requirements into systems other people can actually build on.</li>
        <li><strong>Frontend:</strong> React with TypeScript, Next.js, Redux. Testing with Jest, GraphQL through Apollo, and React Native when a project needs it.</li>
        <li><strong>UI/UX design:</strong> not a side note. I design in Figma and care about how a thing feels to use, not just whether it compiles.</li>
        <li><strong>Open source:</strong> I build and release open-source tools, and I trust open over closed whenever it&apos;s a real choice, this site included.</li>
        <li><strong>Foundations:</strong> HTML, CSS, and JavaScript from before frameworks made them feel optional.</li>
        <li><strong>Tools:</strong> macOS and Cursor daily, happiest in the terminal, with past lives in Fedora, Ubuntu, and Arch Linux.</li>
        <li><strong>Lately:</strong> local and multi-model AI setups, agent orchestration, and keeping the bill sane.</li>
      </ul>
      <p style={{ marginTop: '1.5em' }}>
        {skills.map((skill) => (
          <span key={skill} style={{ color: '#888888', marginRight: '8px', fontSize: '0.85em' }}>{`#${skill}`}</span>
        ))}
      </p>
      <hr />
      <h2>Contact</h2>
      <ul>
        <li><a href="https://github.com/drac">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/seyhandzhamur/">LinkedIn</a></li>
        <li><ObfuscatedEmail /></li>
      </ul>
    </section>
  )
}
