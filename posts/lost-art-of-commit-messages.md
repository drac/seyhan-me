---
title: 'The Lost Art of Commit Messages'
date: '2024-11-10'
tags: ['development', 'version control', 'commit messages', 'git']
license: 'CC BY-NC-SA 4.0 DEED' # https://creativecommons.org/licenses/by-nc-sa/4.0/
author: 'Seyhan Dzhamur'
---

Have you ever noticed how commit messages these days are like cryptic [haikus](https://www.britannica.com/question/What-is-a-haiku) from developers who seem to think a single word is all it takes to summarize their masterpiece?

People scribbling "fix bug", "update code", or the ever descriptive "refactor" while pushing changes that could rival a novel in length. It's as if they think we're all mind readers or perhaps they assume their code is so flawless it needs no explanation.

> For the love of clean code history, let's remember we're not monkeys banging on keyboards; we're educated, civilized human beings.

## The Art of the Commit Message

Crafting a meaningful commit message seems to be a lost art in today's fast-paced development world.

Yes! I said "lost art". Because many developers or let me correct that, many **keyboard virtuosos** apparently don't see the value in leaving a traceable breadcrumb trail of their genius.

### Okay, enough sarcasm; let's learn how to do it right.

Commit messages are the narrative of your project's history. They help others (and your future self) understand why changes were made, making collaboration smoother and debugging less of a nightmare.

Given that, let's dive into some guidelines to improve your commit messages from vague to valuable.

## Commit Message Guidelines

Each commit message should follow this structure:

```md
<type>(optional scope): <short description>
<BLANK LINE>
- Optional point 1 in brief
- Optional point 2 in brief
<BLANK LINE>
<footer>
```

### Components of the Format

1. **Type**: Specifies the nature of the commit.
2. **Scope** (optional): A short identifier for the component, file, or feature affected.
3. **Short Description**: A concise summary of the change, ideally up to 50 characters.
4. **Detailed Points** (optional): Bullet points that provide additional context or details about the changes.

## Allowed Types

Choose from the following types for the `<type>` field:

- **feat**: A new feature
- **fix**: A bug fix
- **chore**: Routine tasks that don't impact functionality
- **refactor**: Code changes that neither fix bugs nor add features
- **docs**: Documentation updates
- **style**: Code style changes that don't affect functionality
- **test**: Adding or updating tests
- **perf**: Performance improvements
- **ci**: Continuous Integration changes
- **build**: Changes related to build processes or dependencies
- **revert**: Reverts a previous commit

## Guidelines for Each Component

### Type

- **Required**: Select the appropriate type based on the commit's purpose.
- Use only one of the allowed types.

### Scope (Optional)

- **Optional**: Specifies the part of the codebase affected.
- Keep it short and descriptive.
- Use **lowercase** and **single-word** terms (hyphens are acceptable).

Examples:

- `auth`, `api`, `ui`, `database`, `config`.

### Short Description

- **Required**: Summarize the change in 50 characters or less.
- Start with a **lowercase** letter; no punctuation at the end.
- Clearly convey the essence of the change.

Examples:

- `add user authentication`
- `fix null pointer exception in payment module`
- `refactor data processing pipeline`

### Detailed Points (Optional)

- **Optional**: Provide additional context in bullet points.
- Keep each point brief and focused.
- Use bullets (`-`) and avoid lengthy explanations.

Examples:

- `- implement OAuth2 for third-party login`
- `- adjust timeout settings to prevent crashes`
- `- reorganize folder structure for clarity`


### Footer (Optional)

Now, for those who dare to venture beyond the bare minimum, there's the optional **footer** section. This is where you can sprinkle in extra metadata that helps with automation, issue tracking, and keeping your project history as pristine as a freshly refactored codebase.

Footers are additional lines at the end of your commit message that provide metadata about the commit. They can:

1. **Automate issue tracking**: Automatically close or reference issues and pull requests.
2. **Provide additional context**: Include information like co-authors, sign-offs, or breaking changes.
3. **Enhance clarity**: Make your commit history more informative and navigable.

#### Common Footer Tags

Because why settle for clarity when you can have *extra* clarity? Here are some standard footer tags you can use:

- **BREAKING CHANGE**: Signals that the commit introduces a backward-incompatible change.
- **Fixes**: References an issue your commit fixes.
- **Closes**: Similar to "Fixes", but used to close issues or pull requests.
- **Resolves**: Another way to reference and close issues.
- **Related to**: Links to issues or tasks related to the commit without closing them.
- **Co-authored-by**: Credits additional contributors.
- **Reviewed-by**: Indicates who reviewed the changes.
- **Signed-off-by**: A sign-off acknowledging you have the rights to submit the work.
- **See also**: Points to additional resources or relevant information.

You might wonder, "Footers? Isn't that a bit much?" Well, consider this: footers can automate tedious tasks, improve team communication, and make your commit history a beacon of clarity in the chaotic sea of code changes.

## Example Commit Messages

### Example 1: Feature Addition

```md
feat(auth): add user login functionality

- implement JWT authentication
- add login endpoint to API
```

### Example 2: Bug Fix that Closes an Issue

```md
fix(ui): correct alignment on dashboard widgets

- adjust CSS flex properties
- test on multiple screen sizes

Fixes #204
```

### Example 3: Documentation Update

```md
docs(readme): update installation instructions

- add steps for setting up the development environment
- include troubleshooting tips
```

### Example 4: Code Refactor

```md
refactor(api): simplify request handlers

- remove redundant code blocks
- improve error handling mechanisms
```

### Example 5: Documentation Update with See Also

```md
docs(README): update setup instructions

- include Docker configuration
- clarify environment variables

See also: https://example.com/setup-guide
```

### General Tips

- **Be concise and clear**: Your future self (and teammates) will thank you.
- **Avoid redundancy**: Don't repeat the same information.
- **Use present tense**: "Add feature", not "Added feature".
- **Be Consistent**: Use standard tags to keep the commit history uniform.
- **Keep It Relevant**: Only include footers that add value or necessary context.
- **Stay Professional**: This isn't the place for jokes or unnecessary commentary (that's what the code comments are for).

Next time you're tempted to type "fix stuff" as a commit message, remember: we're not monkeys. We're educated, civilized human beings capable of conveying complex ideas with clarity. Let's make sure our commit messages reflect that if not for the sake of our teammates, then at least to prevent our future selves from cursing our past selves.

Happy committing!