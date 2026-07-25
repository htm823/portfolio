# Portfolio Website

🇬🇧 English | [🇯🇵 Japanese](README.ja.md)

A personal portfolio website showcasing my projects, technical skills, implementation highlights, and design approach.

Built with HTML, SCSS, JavaScript.

## Live Demo

👉🏻 https://hatsumi-shimizu.vercel.app

## Preview

![Portfolio Website](assets/img/preview.gif)

## Background

This portfolio was created to showcase my projects and communicate my approach to web development.

Rather than simply presenting completed work, I wanted to highlight the thought process, experimentation, and implementation decisions behind each project, allowing them to be presented as case studies.

My design philosophy is centred on reducing cognitive load by transforming complexity and ambiguity into clear, structured information.

## Features

- Responsive design
- Bilingual support (English & Japanese)
- Showcase of selected projects
- Insights into the development process
- Technology stack for each project
- Quick access to contact links

## Tech Stack

### Frontend

- HTML
- SCSS
- JavaScript

### Deployment

- Vercel

## Technology Choices

I chose to build this portfolio using core web technologies so I could focus on information architecture and responsive design rather than framework-specific features.

As the primary purpose of the website is to present my work effectively, I considered the organisation and flow of information to be the most important aspects of the project. Using a simple technology stack allowed me to spend more time refining the layout, content hierarchy, and overall user experience.

## System Design

The visual design follows a simple monochrome colour palette with a single brand accent colour. Decorative elements were kept to a minimum to reduce cognitive load and allow visitors to focus on the content.

To improve visual understanding, each page includes contextually relevant images and icons. Hero sections introduce the purpose of each page, while project cards, technology stacks, and implementation features are supported with visual elements that make information easier to scan and understand.

## Implementation Highlights

An introductory animation is displayed when visitors access the website for the first time within a browser session.

Implementing the animation timing was one of the more challenging aspects of the project. I used the browser's session storage together with JavaScript's `setTimeout()` to determine whether the visitor was accessing the site for the first time and to control when the animation should begin.

As the website automatically redirects visitors to the appropriate language based on their browser settings, the animation is triggered only after the language has been detected. This ensures that users experience the introduction on the correct localised page.

## Challenges & Solutions

One of the main challenges was deciding how to organise the SCSS files.

Reusable UI elements, such as individual cards and card collections, were straightforward to separate into reusable components. However, I spent considerable time deciding whether the remaining page sections should be implemented as independent components or kept as page-specific styles.

To make the project more scalable, I chose to separate these sections into individual components so they can be reused as the website grows and new content is added.

While this approach improves maintainability, there are still opportunities to reduce duplicated styles and better adhere to the DRY principle. As a future improvement, I plan to refactor the SCSS structure to increase reusability and make the styling system more modular.

## Future Improvements

- Refactor the SCSS
- Review the SCSS file structure
- Create a dedicated About page
- Add Dark / Light Mode
- Improve accessibility
- Refine the design of the project detail pages

## Licence & Usage

This repository is publicly available for portfolio purposes.

The source code is not open source and is provided solely to demonstrate my development work and technical skills.

## Explore More Projects

You can find more of my projects on my GitHub profile.

👉🏻 https://github.com/htm823