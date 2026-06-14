---
title: 'We Gave the Robot a Team'
date: '2026-06-14'
tags: ['ai', 'agents', 'developer tools']
description: "We were told to put AI in everything. Now the invoice has arrived, and it turns out giving one robot a team of robots adds up fast. Here's how I'm trying to stop paying flagship rates to move bricks."
license: 'CC BY-NC-SA 4.0 DEED' # https://creativecommons.org/licenses/by-nc-sa/4.0/
author: 'Seyhan Dzhamur'
---

A year or two ago the message was simple: use more AI, or get left behind. Every standup, every newsletter, every vendor deck said the same thing. Management heard it loud and clear, and "are you using AI for this?" quietly became a normal question in code review. Some of us were nudged. Some of us were told. Either way, AI moved from a tab we sometimes opened to something wired into the editor, the pipeline, and half the tickets.

Fine. A lot of it genuinely helps, and I'm not going to pretend otherwise.

But now the part that wasn't on the slide is showing up: the invoice.

## A chat window is cheap. An agent is not.

Here's what a lot of people missed. Asking a model a question in a chat box is one call. You type, it answers, you move on. An agent doesn't work like that. One request fans out into a small crowd of calls. The agent plans, searches the codebase, edits a few files, reviews its own work, notices it got something wrong, retries, and every so often decides the job needs a couple of helper agents to finish. Apparently one robot wasn't expensive enough, so we gave it a team.

This isn't a hunch. Anthropic, who build the things, put numbers on it: agents use roughly [4x more tokens than a normal chat, and multi-agent setups around 15x more](https://www.anthropic.com/engineering/multi-agent-research-system). Same question, fifteen times the bill. You don't feel it on one task. You feel it at the end of the month, when finance walks over wearing a particular kind of face.

And they have walked over. Uber reportedly [capped engineers at $1,500 a month per coding tool after burning through its annual AI budget in four months](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/). Four months. That's not a rounding error, that's a pattern.

Now, the easy assumption is that tokens are getting more expensive. They aren't. If anything it's the opposite. By Stanford's AI Index, the price to run a GPT-3.5-class model [fell from about $20 per million tokens in late 2022 to roughly $0.07 two years later](https://hai.stanford.edu/ai-index/2025-ai-index-report). Per token, prices are in freefall. The bills go up anyway, because we burn far more tokens than the price keeps dropping. Enterprise spend on these models [roughly doubled in just the first half of 2025](https://menlovc.com/perspective/2025-mid-year-llm-market-update/). Cheaper units, much bigger appetite. The cloud providers win either way.

## Using the best model for everything is just waste

So here's where I landed, and it isn't clever. Using the most expensive flagship model for every single action is like sending your most senior architect to rename a variable. Sure, they can do it. They'll do it beautifully. But you're paying architect rates to move a brick, and there are a lot of bricks in a building.

Most of what an agent does in a day isn't hard. It's predictable. Write the boilerplate, add the test, update the doc, summarise the file, run the search. None of that needs the smartest model on the market. It needs a model that gets it right reliably and costs a fraction.

And I want to be clear about one thing, because it's where people get this wrong: this is not "always pick the cheapest option." Cheap-but-wrong is the most expensive thing there is, since a failed task means retries, cleanup, and you doing it by hand anyway. The goal is the *least expensive model that still does the job properly*. That's a completely different sentence.

## My planner-and-worker setup

What I've been experimenting with looks roughly like this:

1. The strong model plans. Architecture, the tricky reasoning, the decisions that are painful to undo. That's where it earns its price tag.
2. That plan gets broken into smaller, clear tasks. Deliberately boring ones.
3. Those tasks go to faster, cheaper models.
4. Specialised agents handle the predictable stuff: implementation, tests, docs, research, code analysis. Each one decent at one job.
5. The strong model only comes back for a real decision, a conflict, or the final review that's actually worth its rate.

The flagship model behaves like a tech lead, not the intern who does everything. It decides what gets built and it checks the result. It does not need to lay every brick personally. Most of the work, honestly, shouldn't reach it at all.

One honest caveat, because none of this is free either. Wiring it up yourself, the routing, the handoffs, five models that each fail in their own special way, is real engineering work, and you can easily burn more time babysitting the orchestration than you ever save in tokens. So mostly, don't build it from scratch. The tooling is growing this in, and the routing is slowly becoming somebody else's problem to maintain. The trap isn't using more than one model, it's hand-rolling a fragile contraption to shave pennies off a job one solid model would have handled. The setup earns its keep when you're running the same flows all day, every day. On a one-off script, it's a cathedral with a very small congregation.

## The boring tricks that actually work

None of this is secret, and teams under cost pressure are already doing the obvious things. Route simple prompts to small models and only escalate the hard ones. Cache prompts and context so you stop paying to re-read the same system prompt on every call; Anthropic's [cache reads run at about a tenth of the normal input price](https://platform.claude.com/docs/en/build-with-claude/prompt-caching). Push anything non-urgent through a [batch API for half off](https://platform.claude.com/docs/en/build-with-claude/batch-processing). Retrieve the three files an agent actually needs instead of shipping the whole repo into context. Cap iterations and retries so a confused agent can't quietly spend your entire afternoon. Put a token budget on a task. Put a spending cap on a person. And measure cost per *finished* task, not per call, because a cheap call that fails ten times was never cheap.

The unglamorous theme under all of it: stop the agent from doing more than the job needs. Turn off the tools and MCP servers it doesn't need this time round, because those definitions cost context too. Make it ask before it does something expensive. And don't let it assemble a team when one worker would have been fine.

## Where I think this goes: home labs

Here's the part that's a guess, so treat it as one. I think local AI ends up doing a chunk of this work.

Not the planning. The actual flagships, your Claudes and GPTs, you can't self-host at all. They're closed-weight and they live in someone else's data center, so renting them there is the only option you've got. The hard reasoning probably stays in the cloud for a while for that reason alone.

The rest of the work, though, doesn't need a flagship, and the open-weight models have quietly gotten good. The catch is size. The big open ones, Kimi K2, DeepSeek, the larger Qwens, are open but still want a serious rig, so they're more "small company with a GPU budget" than "old laptop in the cupboard". The interesting tier for local work is a step down: something like a Qwen Coder, a Devstral, or one of the gpt-oss models, the kind that runs on a single decent GPU and happily chews through repo analysis, docs, tests, classification, background jobs, anything touching private company data you'd rather not send anywhere. The exact names will have moved on by the time you read this, they always do, but the shape holds: cloud brain for the hard calls, local hands for the rest.

I'm not going to pretend local is free. It isn't, not even close. You pay for the hardware, the electricity, the maintenance, the model updates, the slower runs, the setup that eats a weekend, the security that's suddenly your problem, and the hours it takes to make the orchestration actually reliable. That's a real bill too. The difference is it's a bill you control, instead of a meter someone else is spinning while you sleep.

Whether it pencils out depends entirely on how much work you're pushing through it. For a hobby project, no. For a team running agents all day, the numbers start to look different. I don't know where the line sits. I just don't think "send everything to the most expensive cloud model" survives as the default for very long.

## The skill nobody's hiring for yet

I used to think the interesting question was which model is the smartest. It's a fun thing to argue about, and it changes every few weeks anyway.

Lately the more useful question is quieter: which model should touch this task, and does this task need a model at all. Knowing when to reach for the expensive one is starting to matter more than always reaching for it. The next handy skill probably isn't picking the cleverest AI. It's knowing when to leave it in the drawer.
