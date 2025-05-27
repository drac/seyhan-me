---
title: 'Short or Long Functions? Relax, It Depends'
date: '2025-05-27'
tags: ['programming', 'functions', 'SOLID', 'software development']
license: 'CC BY-NC-SA 4.0 DEED' # https://creativecommons.org/licenses/by-nc-sa/4.0/
author: 'Seyhan Dzhamur'
---

Every few months the web discovers again that developers disagree about the “right” length of a function. On one side you have the slice-and-dice gang, armed with tiny functions and a stopwatch that screams whenever a function hits 6 lines. On the other, the one-page poets insist that everything is clearer if it fits on a single scroll, preferably with comments comparing their masterpiece to “War and Peace”.

The truth, as usual, is somewhere in the middle. There’s no universal rule that says functions must be short enough to fit on a sticky note or long enough to require a scroll bar. It all depends on the context, the complexity of the task, and the team’s collective sanity.

Both camps claim victory, yet both keep forgetting the same boring truth: **context rules**, especially the business context. A 5 line helper that fires real invoices into the wild might deserve extra care and its own set of unit tests. A calm, single-purpose 100 liner that never misbehaves? Probably fine to leave it be, no matter how many itches you get about its length.

I’ve spent enough evenings reviewing code written by bright juniors who tried to fold the entire universe into one sprawling function. It usually works exactly once—right up to the moment we try to unit-test that mega form-submission handler that validates input, fires a fetch, dispatches three Redux actions, shows a toast, and then redirects the user. At that point the codebase starts to sound like an old printer. In those moments, a few small, well-named functions would feel like a weekend at the spa.

The real question isn’t “short or long” - it’s “does the business gain anything from changing it?” If trimming a function makes releases safer, fixes bugs faster or keeps the midnight pager duty quiet, go on and slice away. If a clear 100-liner already does its job without slowing anyone down, leave it and ship, the business won’t thank you for pretty refactors that add zero value. If splitting code creates more ceremony than clarity, congratulations, you’ve just built a maze. The real question is always the same: will refactoring make the system safer, faster, or cheaper to change? If yes, grab the machete. If not, step away and enjoy your evening beverage of choice. Because at the end of the day, this action is going to cost something to the business, and it’s your job to make sure it’s worth it.

Programming is not a contest to see who can follow the most rules, it is an ongoing attempt to write code future humans can read without caffeine-induced tears. Pick the length that moves the business forward, break things up if it makes releases safer or fixes land faster, keep them together if a clear 100 liner already does the job. Sometimes that means tiny micro-functions, sometimes a graceful block of well told logic. Know your context, know your business, and you’ll know what to do.
