# NEXTJS

React NextJS based website. This is an introduction to [Nextjs](https://nextjs.org/docs/getting-started)

`npx create-next-app@latest ninjalist`
`cd ninjalist`
`npm run dev`

# 1 INIT

- Created a new NextJs project
- Clean it to add new pages.

# 2 New pages

- added new pages
  - home
  - about
  - ninjas
    - index
    - test

# 3 Create dummy content

- Added dummy content to the site

# 4 Routes

- React adds route by itself based on folder
- Create folder and files to menu
- index.js page will point to parent url
  - ex: `/ninjas` here

# 5 Templating

- app/comps create blocks for layout
  - Layout.js
  - Navbar.js
  - Footer.js
- This can be resued in all/other pages

# 6 Link component

- This adds links to all pages
- This is nextjs style

```html
 import Link from "next/link";
 <Link href="/"><a>Home</a></Link>
```
