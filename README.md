# Personal Website

> [seyhan.me](https://seyhan.me)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/github/license/drac/seyhan-me)
![Content License](https://img.shields.io/badge/Content-CC%20BY--NC--SA%204.0-lightgrey)

Welcome to the repository of my personal website. This site is open source, so feel free to explore the code and learn from it.

## Technology Stack

- [Next.js 14](https://nextjs.org/) (App Router) with TypeScript
- Blog posts written in Markdown, parsed with [gray-matter](https://github.com/jonschlinkert/gray-matter) and rendered with [react-markdown](https://github.com/remarkjs/react-markdown)
- Syntax highlighting via [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- Terminal-inspired styling with [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono)

## Features

- **Blog**: A simple blog where I share my thoughts and experiences. Each blog post is a Markdown file in the `posts/` directory.
- **About**: A page where I share a bit about myself.
- **Contact**: A page with my contact information and links to my social media profiles.

## Development

Requires Node.js 24.x and npm.

```sh
git clone https://github.com/drac/seyhan-me.git
cd seyhan-me
npm install
```

```sh
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Contributions

As this is my personal website, I'm not accepting contributions. However, you're welcome to look at the code and use it as a reference for your projects.

## Licenses

- This project is open source and available under the [MIT License](https://github.com/drac/seyhan-me/blob/master/LICENSE).
- The content of the website (blog posts, about page, etc.) is licensed under the [CC BY-NC-SA 4.0 DEED](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.
