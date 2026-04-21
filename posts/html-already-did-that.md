---
title: 'HTML Already Did That'
date: '2026-04-21'
tags: ['html', 'web development', 'frontend']
description: 'We keep installing packages and writing JavaScript to build modals, accordions, and dropdowns. Meanwhile, HTML has been sitting there with native solutions for years, wondering when we would notice.'
license: 'CC BY-NC-SA 4.0 DEED' # https://creativecommons.org/licenses/by-nc-sa/4.0/
author: 'Seyhan Dzhamur'
---

Have you ever `npm install`-ed a package just to get a modal working, only to spend the next hour fighting z-index issues and scroll locking? Or maybe you pulled in an entire UI library because you needed an accordion and didn't feel like writing the toggle logic yourself?

Yeah. We've all been there.

Here's the thing though, HTML already solved most of these problems. Natively. No bundle size. No dependencies. No breaking changes when some maintainer decides to rewrite the API for the fourth time. And yet, we keep reaching for JavaScript like it's the only tool in the shed. Spoiler: it isn't.

## The `<dialog>` Element

Let's start with the big one. Modals. The amount of JavaScript the industry has written to handle modals is honestly embarrassing when you consider that the `<dialog>` element exists and has existed for a while now.

```html
<dialog id="my-modal">
  <h2>Hello, I'm a native modal</h2>
  <p>No npm install required.</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>

<button onclick="document.getElementById('my-modal').showModal()">
  Open Modal
</button>
```

That's it. You get a backdrop, focus trapping, escape-to-close, and proper accessibility out of the box. The `showModal()` method handles the overlay. The `close()` method handles, well, closing. You can style the backdrop with `::backdrop`. No portals, no context providers, no `useRef` gymnastics.

You might wonder, "But what about animations and transitions?" Fair point. CSS can handle that too. The `<dialog>` element fires events you can hook into, and with a bit of CSS you can have smooth enter and exit transitions. Still no JavaScript library required.

## `<details>` and `<summary>`: The Accordion Nobody Uses

Every frontend developer has built an accordion at some point. State management, click handlers, aria attributes, height transitions, the works. Meanwhile:

```html
<details>
  <summary>Click me, I dare you</summary>
  <p>Surprise! I was here all along.</p>
</details>
```

That's a fully functional, accessible accordion. The browser handles the open/close state. Screen readers understand it. Keyboard navigation works. And here's a neat trick most people don't know about: give multiple `<details>` elements the same `name` attribute, and they become mutually exclusive. Open one, the others close. An accordion group with zero JavaScript.

```html
<details name="faq">
  <summary>Question one</summary>
  <p>Answer one.</p>
</details>
<details name="faq">
  <summary>Question two</summary>
  <p>Answer two.</p>
</details>
```

For the love of clean bundles, why are we still importing accordion components?

## `<datalist>`: The Searchable Dropdown

You know those autocomplete inputs with the dropdown suggestions? The ones that need a state array, a filter function, keyboard navigation handlers, and probably a debounce for good measure? HTML has that:

```html
<input list="frameworks" placeholder="Pick a framework" />
<datalist id="frameworks">
  <option value="React" />
  <option value="Vue" />
  <option value="Svelte" />
  <option value="Angular" />
  <option value="The next one that drops this week" />
</datalist>
```

Type into the input, get filtered suggestions. Done. It's not the prettiest thing out of the box, I'll give you that. But it works, it's accessible, and it weighs exactly zero kilobytes.

## `<progress>` and `<meter>`: Not Everything Needs a Div

How many times have you seen this pattern?

```html
<div class="progress-bar">
  <div class="progress-bar-fill" style="width: 70%"></div>
</div>
```

Two divs, a bunch of CSS, and absolutely no semantic meaning. The browser, the screen reader, everyone is just guessing what this thing is. Compare that to:

```html
<progress value="70" max="100">70%</progress>
```

One element. Semantic. Accessible. Styleable with CSS pseudo-elements. And then there's `<meter>`, its lesser-known cousin, which is perfect for gauges and ratings where you want to express a value within a known range:

```html
<meter value="0.7" min="0" max="1" low="0.3" high="0.7" optimum="1">70%</meter>
```

The browser even color-codes it based on whether the value is in the low, medium, or high range. Try doing that with your two nested divs.

## `<output>`, `<kbd>`, and `<figure>`

A few more gems that deserve a mention.

The `<output>` element is basically a live result display. Pair it with a range slider, and you've got a dynamic value indicator without writing an `onChange` handler:

```html
<form oninput="result.value = parseInt(slider.value)">
  <input type="range" id="slider" value="50" />
  <output name="result" for="slider">50</output>
</form>
```

The `<kbd>` element is for representing keyboard input. Instead of styling a `<span>` to look like a key, just use:

```html
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
```

It's semantic, it tells assistive technology exactly what it is, and you can style it once globally. No utility classes needed.

And `<figure>` with `<figcaption>` gives your images actual context instead of floating around with no explanation:

```html
<figure>
  <img src="chart.png" alt="Monthly revenue" />
  <figcaption>Revenue growth, Q1 2026. The spike is not a bug.</figcaption>
</figure>
```

Screen readers associate the caption with the image. Search engines understand the relationship. It's what the `alt` attribute wishes it could be when it grows up.

## So Why Do We Keep Ignoring This Stuff?

The real question isn't whether these elements work. They do. The real question is why the average frontend project still ships a modal library, an accordion component, and a custom progress bar when the browser handles all three natively.

Part of it is habit. We learned React or Vue first, and everything became a component problem. Part of it is aesthetics, native elements don't always look gorgeous out of the box, and the instinct is to reach for something pre-styled rather than writing a few lines of CSS. And part of it, honestly, is that nobody told us. The JavaScript community is excellent at promoting the latest framework but quietly terrible at reminding people what the platform already provides.

At the end of the day, every kilobyte you ship is a choice. Every dependency you add is a maintenance commitment. And every time you write JavaScript for something HTML already handles, somewhere a browser engine sheds a single, silent tear.

You don't have to go full HTML purist. Nobody's asking you to delete your `node_modules` folder, tempting as that sounds. But next time you're about to install a package for something that sounds suspiciously simple, maybe check if the browser already did the work for you. You might be surprised how often it did.
