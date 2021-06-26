# Frontend Mentor - Bookmark landing page

![Design preview for the Bookmark landing page coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [Intro](#intro)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
  - [Useful resources](#useful-resources)

## Overview

### Intro
Hello! This is my solution to [Bookmark landing page - Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Pretty simple landing page with few features such as the tabbed features, the FAQ accordion and sticky header controlled by IntersectionObserver. The project was made using ***ReactJS*** which I just started to learn. I've always liked breaking my code into modules or parts so I instantly liked building my app using components that manage their own state. I also enjoyed writing JSX syntax which makes the code very readable and transparent. The fact that rendering logic, functionality is inherently coupled with UI logic is awesome. I look forward to learn more about React because many of its benefits can be seen at first glance.


### The challenge

>Your challenge is to build out this landing page and get it looking as close to the design as possible.
>
>You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
>
>Your users should be able to:
>
> - View the optimal layout for the site depending on their device's screen size
> - See hover states for all interactive elements on the page
> - Receive an error message when the newsletter form is submitted if:
  > - The input field is empty
  > - The email address is not formatted correctly

### Links

- [LIVE PREVIEW](https://bookmark-tediko.netlify.app/) to check my solution.
- [Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

## My process

### Built with

 - ReactJS
 - Webpack
 - SCSS
 - BEM methodology
 - Mobile first
 - Semantic HTML5 markup
 - JavaScript
 - Flexbox
 - Intersection Observer API

### Features
- I used ***ReactJS*** library to create an app. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
- Implemented ***defer*** to my script tag. The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.
- Prevented body scrolling on *iOS* when the mobile menu is open. So far I was using helper class with `overflow: hidden` on the `<body>` element to prevent scrolling. But unfortunately, that does not work on iOS. *(It does work when nav is on top of the window whole time but it doesn't when we add `position: fixed` to it when we want our nav to be always on top of our viewport)*. I use `position: fixed` on body in combination with storing the scroll position of the user so we can restore the scroll position after the fact.
- Added ***touch-enabled*** mobile navigation. It's hard to reach for the hamburger menu on larger phones so I added a menu that is enabled by touchmove feature. Swipe from left to right to open menu on mobiles. 
- Implemented ***Skip to content*** link. Skip links are little internal navigation links that help users move around a page. It is used as an accessibility enhancement that lets keyboard users and screen readers jump from the top of the page to the content without have to go through other elements on the page first.
- Added ***sticky nav menu*** using `Intersection Observer API`. In short, this API is a native way of detecting if an object has entered the viewport. My observer looking at `.kv` section, and if that section is no longer interacting with viewport it triggers my header to appear.
- Implemented `prefers-reduced-motion` CSS media feature which is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses. Prevent animations in brief.
- `:focus-visible` pseudo class. This selector only indicate focus when it is helpful to the user - such as in cases where the user interacts with the page via a keyboard or some other non-pointing device. It isn't supported by Safari yet, but there is simple [workaround](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press).
- Tried to create more accessible mobile navigation. Used the `aria-expanded` and `aria-controls` attributes.
- To create this project I used webpack. More specifically i used `laravel mix` which is a wrapper for webpack and targets the 80% usecase.

### Useful resources

- [DOCS - ReactJS](https://reactjs.org/)
- [VIDEO - ReactJS tutorial by The Net Ninja](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
- [LINK - async/defer](https://flaviocopes.com/javascript-async-defer/#the-position-matters)
- [LINK - prevent body scrollin on iOS](https://markus.oberlehner.net/blog/simple-solution-to-prevent-body-scrolling-on-ios/).
- [LINK - touch-events](https://flaviocopes.com/touch-events/)
- [LINK - skip-to-content](https://css-tricks.com/how-to-create-a-skip-to-content-link/)
- [DOCS - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [LINK - webpack](https://laravel-mix.com/docs/6.0/what-is-mix)
