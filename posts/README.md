# Posts

Each blog post is a single Markdown file in this directory. The filename
(without `.md`) becomes the post's URL slug: `posts/my-post.md` →
`/blog/post/my-post`.

## Frontmatter

Every post starts with a YAML frontmatter block:

```md
---
title: 'Your Title'
date: 'YYYY-MM-DD'
tags: ['software development', 'best practices']
description: 'A punchy one- or two-sentence teaser. Used for the listing, the meta description, and the RSS feed.'
license: 'CC BY-NC-SA 4.0 DEED' # https://creativecommons.org/licenses/by-nc-sa/4.0/
author: 'Seyhan Dzhamur'
---
```

`title`, `date`, and `description` are required (posts missing them are
skipped from the listing). `tags` defaults to `[]` and `author` defaults
to `Seyhan Dzhamur` if omitted.

## Tags

Tags drive the listing filter (`/?tag=<tag>`), which matches the **exact
string**. So "programming" and "software development" never group together
— reuse the canonical tags below verbatim instead of inventing synonyms.
Keep them **lowercase**; spaces are fine.

Prefer 2–4 tags per post: one or two broad umbrella tags (for clustering)
plus one or two specific ones.

### Canonical tags

Umbrella (use these to cluster related posts):

- `software development` — general engineering, craft, programming
- `web development` — the web platform, frontend, browser APIs
- `best practices` — opinion/"do it right" craft pieces
- `developer tools` — tooling, editors, workflows, AI dev tooling

Specific (use when genuinely on-topic):

- `git` — version control, commits, history
- `html` — HTML elements and semantics
- `operating systems` — OS design, systems
- `ai` — AI/LLMs in general
- `agents` — agentic workflows, multi-agent systems

Before adding a new tag, check whether an existing one fits. Add a new
canonical tag only when a genuinely new topic recurs (ideally across more
than one post), and list it here so it stays consistent.
