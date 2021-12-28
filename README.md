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
- [doc](https://nextjs.org/docs/api-reference/next/router#router-object)

# 9 Images and Metadata

### Images

- All item in public folder can be directly accesed using something like `<img src="/logo.png" />`
- Correct way is to use Image

```html
import Image from "next/image";
<image src="/logo.png" width="{128}" height="{77}" />
```

### Metadata

```html
import Head from "next/head";
<>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
    </Head>
...
</>
```

# 10 API Data

- [jsonplaceholder](https://jsonplaceholder.typicode.com/guide/)
- Mainly usign [Users](https://jsonplaceholder.typicode.com/users)

- By using `getStaticProps` get `async` data from [users](https://jsonplaceholder.typicode.com/users)
- return props

- Get those props in method parameter
- And display those data using map
- Also added style to the list

# 11 Dynamic Route

- Created `[id].js` page
  - This is a dynamic url
- At ninjas page `<Link href={'/ninjas/' + ninja.id} key={ninja.id}>`
  - This will generate dynamic url to next page i.e `[id].js`

## Data

- Same as list page get all values
- Map those values to path ids
- return those paths and fallback: false
  - fallback: false
    - This will throw 404 page if fails.

## Display single item

- `getStaticPaths` This will create all pages
  - Prebuild all pages
- `getStaticProps` Props for all pages
  - Displays pages by url
  - `getStaticProps` parameter is `context` but we destructure to `params`
  - This return props is in Details function i.e main page

# Deploy

- I deployed to [vercel](https://vercel.com/featuriz/next-js-ninjalist)
  - Just create an account https://vercel.com
    - Using github auth
    - Dashboard
    - New Project
    - Import Git repo
    - Deploy : I used default settings
  - After deploy just visit
  - [My Site](https://next-js-ninjalist.vercel.app/)
  - I don't know how long will it be there!

# END
