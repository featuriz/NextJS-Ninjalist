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

## Templating

- app/comps create blocks for layout
  - Layout.js
  - Navbar.js
  - Footer.js
- This can be resued in all/other pages

## Link component

- This adds links to all pages
- This is nextjs style

```html
 import Link from "next/link";
 <Link href="/"><a>Home</a></Link>
```

### Hint

- In VSCODE `sfc` will generate Stateless Functional Component.

# 5 Layout

- Create a Lyout.js page

```js
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
```

- Add this to \_app.js
- So all pages will have navbar and footer
- To be noted is `{children}`

```js
import Layout from "../app/comps/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

# 6 Styles

- Inside styles folder, check `globals.css`
- For global styles `import '../styles/globals.css'`

## For page based style

- `Home.module.css`

### HINT: on css/styles

- Only class selectors
- No element selectors

# 7 Custom Error pages 404

- Created `404.js`
- Added styles in globals.css
- called directly using ` className="not-found"`

# 8 Redirect

- If error(404) auto redirect to homepage after 3sec
- done using `useEffect` and `useRouter` with `setTimeout`
- [doc] (https://nextjs.org/docs/api-reference/next/router#router-object)
