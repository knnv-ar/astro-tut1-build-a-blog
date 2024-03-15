# Astro.build official tutorial: Build a Blog

**Index**

UNIT 1 - SETUP

1.1. Prepare dev environment

-Terminal
-Node.js
-VS Code

-GitHub account
-Netlify account

1.2. Launch astro setup wizard
1.3. Write your first line of Astro
1.4. Store your repository online 
1.5. Deploy your site to the web

UNIT 2 - PAGES

2.1. Create your first Astro page
2.2. Write your first Markdown blog post
2.3. Add dynamic content about you
2.4. Style your About page
2.5. Add site-wide styling

UNIT 3 - COMPONENTS

3.1. Make a reusable Navigation component
3.2. Create a social media footer
3.3. Build it yourself - Header
3.4. Send your first script to the browser

UNIT 4 - LAYOUTS

4.1. Build your first layout
4.2. Create and pass data to a custom blog layout
4.3. Combine layouts to get the best of both worlds



---

## Unit 1 - Setup: create and deploy your first Astro site

### 1.1. Prepare your dev environment

> GET READY TO...<br>
&bull; Install any tools that you will use to build your Astro website

Get the dev tools you need:

- terminal
- Node.js (version v18.14.1 or later)
- VS Code Editor

### 1.2. Create your first Astro project

> GET READY TO...<br>
&bull; Run the `create astro` setup wizard to create a new Astro project<br>
&bull; Start the Astro server in development (dev) mode<br>
&bull; View a live preview of your website in your browser

#### Launch the Astro setup wizard

1. `npm create astro@latest`
2. "Where would you like to create your new project?": `./astro-tut1-build-a-blog`
3. Templates: `Empty`
4. TypeScript: `n`
5. "Would you like to install dependencies?": `y`
6. "“Would you like to initialize a new git repository": `y`

#### Open your project in VS Code

`code ./astro-tut1-build-a-blog`

#### Run Astro in dev mode (start the dev server)

`npm run dev`

#### View a preview of your website

`http://localhost:4321`

### 1.3. Write your first line of Astro

> GET READY TO...<br>
&bull; Make your first edit to your new website

#### Edit your home page

Replace <s>`<h1>Astro</h1>`</s> with `<h1>My Astro Site</h1>`

</body>
```

### 1.4. Store your repository online

> GET READY TO...<br>
&bull; Put your project repository online

#### Create a repository on GitHub

#### Commit your local code to GitHub

### 1.5. Deploy your site to the web

> GET READY TO...<br>
&bull; Add your GitHub repository as a new Netlify app<br>
&bull; Deploy your Astro site to the web

#### Create a new Netlify site

1. Go to: https://netlify.com/ and make a note of your username: `https://app.netlify.com/teams/knnv-ar/`
2. Click `Add new site > Import an existing project`, then choose your Astro project’s GitHub repository from the list provided.
3. At the final step, Netlify will show you your app’s site settings. The defaults should be correct for your Astro project, so you can scroll down and click `Deploy site`.

#### Change your project name

#### Visit your new website

## Unit 2 - Pages: add, style and link to pages on your site

### 2.1. Create your first Astro page

> GET READY TO...<br>
&bull; Create two new pages on your website: About and Blog<br>
&bull; Add navigation links to your pages<br>
&bull; Deploy an updated version of your website to the web

#### Create a new `.astro` file

1. In `src/pages/`, add `about.astro`
2. Copy, or retype the contents of `index.astro` into your new `about.astro` file.
3. Test `http://localhost:4321/about`

#### Edit your page

Replace:

```html
<body>
  <h1>My Astro Site</h1>
</body>
```

With:

```html
<body>
  <h1>About Me</h1>
  <h2>... and my new Astro site!</h2>

  <p>
    I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
  </p>

  <p>
    This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
  </p>
</body>
```

#### Add navigation links

Add at the top of pages `index.astro` and `about.astro`:

```html
<a href="/">Home</a> <a href="/about/">About</a>
```

#### Add a blog page

```html
<body>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>

  <h1>My Astro Learning Blog</h1>
  <p>This is where I will post about my journey learning Astro.</p>
</body>
```

#### Publish your changes to the web

### 2.2. Write your first Markdown blog post

> GET READY TO...<br>
&bull; Make a new folder and create a new post<br>
&bull; Write some Markdown content<br>
&bull; Link to your blog posts on your Blog page

#### Create your first .md file

Create `src/pages/posts/post-1-md` and test `http://localhost:4321/posts/post-1`

#### Write Markdown content

```md
---
title: "My First Blog Post"
pubDate: 2022-07-01
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

# My First Blog Post

Published on: 2022-07-01

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
```

#### Link to your posts

1. Link to your first post with an anchor tag in `src/pages/blog.astro`:

```html
---
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro</title>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>

    <h1>My Astro Learning Blog</h1>
    <p>This is where I will post about my journey learning Astro.</p>
    <ul>
      <li><a href="/posts/post-1/">Post 1</a></li>
    </ul>
  </body>
</html>
```

### 2.3. Add dynamic content about you

> GET READY TO...<br>
&bull; Define your page title in frontmatter, and use it in your HTML<br>
&bull; Conditionally display HTML elements<br>
&bull; Add some content about you

#### Define and use a variable

In `src/pages/about.astro` add the variable `pageTitle` between the code fences and use it with curly braces in the body:

```jsx
---
const pageTitle = "About Me";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>

    <h1>{pageTitle}</h1>
    <h2>... and my new Astro site!</h2>

    <p>
      I am working through Astro's introductory tutorial. This is the second
      page on my website, and it's the first one I built myself!
    </p>

    <p>
      This site will update as I complete more of the tutorial, so keep checking
      back and see how my journey is going!
    </p>
  </body>
</html>
```

#### Write JavaScript expressions in Astro

1. In `src/pages/about.astro` add the following code between the code fences, below your existing content:

```jsx
const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Technical Writer",
  hobbies: ["photography", "birdwatching", "baseball"],
};

const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
```

2. In the same page add the following code in your HTML template, below your existing content:

```jsx
<p>Here are a few facts about me:</p>
<ul>
  <li>My name is {identity.firstName}.</li>
  <li>I live in {identity.country} and I work as a {identity.occupation}.</li>
  {identity.hobbies.length >= 2 &&
    <li>Two of my hobbies are: {identity.hobbies[0]} and {identity.hobbies[1]}</li>
  }
</ul>
<p>My skills are:</p>
<ul>
  {skills.map((skill) => <li>{skill}</li>)}
</ul>
```

#### Conditionally render elements

You can also use your script variables to choose **whether or not** to render individual elements of your HTML `<body>` content.

1. Add the following lines to your frontmatter script to **define variables**, below your existing content:

```js
const happy = true;
const finished = false;
const goal = 3;
```

2. Add the following lines below your existing paragraphs.

```astro
{happy && <p>I am happy to be learning Astro!</p>}

{finished && <p>I finished this tutorial!</p>}

{goal === 3 ? <p>My goal is to finish in 3 days.</p> : <p>My goal is not 3 days.</p>}
```

Then, check the live preview in your browser tab to see what is displayed on the page:

3. Commit your changes to GitHub before moving on.

### 2.4. Style your About page

> GET READY TO...<br>
&bull; Style items on a single page<br>
&bull; Use CSS variables

#### Style an individual page

Using Astro’s own <style></style> tags, you can style items on your page. Adding attributes and directives to these tags gives you even more ways to style.

1. Copy the following `<style>` code and paste it into `src/pages/about.astro`:

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{pageTitle}</title>
    <style>
      h1 {
        color: purple;
        font-size: 4rem;
      }

      .skill {
        color: green;
        font-weight: bold;
      }
    </style>
  </head>
</html>
```

2. Add the class name `skill` to the generated `<li>` elements on your About page, so you can style them. Your code should now look like this:

```jsx
<p>My skills are:</p>
<ul>
  {skills.map((skill) => <li class="skill">{skill}</li>)}
</ul>
```

3. Add the `skill` class code to your existing style tag:

```css
<style>
  h1 {
    color: purple;
    font-size: 4rem;
  }
  .skill {
    color: green;
    font-weight: bold;
  }
</style>
```

4. Visit your About page in your browser again, and verify, through visual inspection or dev tools, that each item in your list of skills is now green and bold.

#### Use your first CSS variable

The Astro `<style>` tag can also reference any variables from your frontmatter script using the `define:vars={ {...} }` directive. You can **define variables within your code fence**, then **use them as CSS variables in your style tag**.

1. Define a `skillColor` variable by adding it to the frontmatter script of `src/pages/about.astro` like this:

```jsx
---
const pageTitle = "About Me";

const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Technical Writer",
  hobbies: ["photography", "birdwatching", "baseball"],
};

const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];

const happy = true;
const finished = false;
const goal = 3;

const skillColor = "navy";
---
```

2. Update your existing `<style>` tag below to first define, then use this `skillColor` variable inside double curly braces.

```css
<style define:vars={{skillColor}}>
  h1 {
    color: purple;
    font-size: 4rem;
  }
  .skill {
    color: var(--skillColor);
    font-weight: bold;
  }
</style>
```

3. Check your About page in your browser preview. You should see that the skills are now navy blue, as set by the `skillColor` variable passed to the `define:vars` directive.

### 2.5. Add site-wide styling

> GET READY TO...<br>
&bull; Apply styles globally

#### Add a global stylesheet

1. Create a new file at the location `src/styles/global.css` (You’ll have to create a `styles` folder first.)

2. Copy the following code into your new file, `global.css`:

```css
html {
  background-color: #f1f5f9;
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: 100%;
  max-width: 80ch;
  padding: 1rem;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

h1 {
  margin: 1rem 0;
  font-size: 2.5rem;
}
```

3. In `about.astro`, add the following import statement to your frontmatter:

```jsx
---
import '../styles/global.css';

const pageTitle = "About Me";

const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Technical Writer",
  hobbies: ["photography", "birdwatching", "baseball"],
};

const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];

const happy = true;
const finished = false;
const goal = 3;

const skillColor = "navy";
const fontWeight = "bold";
const textCase = "uppercase";
---
```

## 3. Build and design with Astro UI components

## Unit 3 - Components: build and design with Astro UI components

### 3.1 Make a reusable Navigation component

> GET READY TO...<br>
&bull; Create a new folder for components<br>
&bull; Build an Astro component to display your navigation links<br>
&bull; Replace existing HTML with a new, reusable navigation component

#### Create a new `src/components/` folder

To hold .`astro` files that will generate HTML but that will not become new pages on your website, you will need a new folder in your project: `src/components/`.

#### Create a Navigation component

1. Create a new file: `src/components/Navigation.astro`.

2. Copy your links to navigate between pages from the top of any page and paste them into your new file, `Navigation.astro`:

```html
<a href="/">Home</a>
<a href="/about/">About</a>
<a href="/blog/">Blog</a>
```

#### Import and use `Navigation.astro`

1. Go back to `index.astro` and import your new component inside the code fence:

```jsx
---
import Navigation from '../components/Navigation.astro';
---
```

2. Then below, replace the existing navigation HTML link elements with the new navigation component you just imported:

Replace:
```html
<a href="/">Home</a>
<a href="/about/">About</a>
<a href="/blog/">Blog</a>
```

With:
```html
<Navigation />
```

3. Check the preview in your browser and notice that it should look exactly the same… and that’s what you want!

Your site contains the same HTML as it did before. But now, those three lines of code are provided by your `<Navigation />` component.

### 3.2. Create a social media footer

> GET READY TO...<br>
&bull; Create a Footer component<br>
&bull; Create and pass props to a Social Media component

#### Create a Footer Component

1. Create a new file at the location `src/components/Footer.astro`.

2. Copy the following code into your new file, `Footer.astro`:

```jsx
---
const platform = "github";
const username = "withastro";
---

<footer>
  <p>Learn more about my projects on <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!</p>
</footer>
```

#### Import and use Footer.astro



1. Add the following import statement to the frontmatter in each of your three Astro pages (`index.astro`, `about.astro`, and `blog.astro`):

```jsx
import Footer from '../components/Footer.astro';
```

2. Add a new `<Footer />` component in your Astro template on each page, just before the closing `</body>` tag to display your footer at the bottom of the page.

```html
    <Footer />
  </body>
</html>
```

3. In your browser preview, check that you can see your new footer text on each page.

#### Create a Social Media component

Since you might have multiple online accounts you can link to, you can make a single, reusable component and display it multiple times. Each time, you will pass it different properties (`props`) to use: the online platform and your username there.

1. Create a new file at the location `src/components/Social.astro`. 

2. Copy the following code into your new file, `Social.astro`:

```jsx
---
const { platform, username } = Astro.props;
---
<a href={`https://www.${platform.toLowerCase()}.com/${username}`}>{platform}</a>
```

#### Import and use `Social.astro` in your Footer

1. Change the code in `src/components/Footer.astro` to import, then use this new component three times, passing different **component attributes** as props each time:

Replace:

```jsx
const platform = "github";
const username = "withastro";
```

With:

```jsx
import Social from './Social.astro';
```

and replace:

```jsx
<p>Learn more about my projects on <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!</p>
```

With:

```jsx
  <p>
    Learn more about my projects on <Social
      platform="GitHub"
      username="withastro"
    />, <Social platform="Twitter" username="astrodotbuild" /> and <Social
      platform="Youtube"
      username="astrodotbuild"
    />.
  </p>
```

2. Check your browser preview, and you should see your new footer displaying links to these three platforms on each page.

#### Style your Social Media Component

1. Customize the appearance of your links by adding a `<style>` tag to `src/components/Social.astro`.

```jsx
---
const { platform, username } = Astro.props;
---
<a href={`https://www.${platform.toLowerCase()}.com/${username}`}>{platform}</a>

<style>
  a {
    padding: 0.5rem 1rem;
    color: white;
    background-color: #4c1d95;
    text-decoration: none;
  }
</style>
```

2. Add a `<style>` tag to `src/components/Footer.astro` to improve the layout of its contents.

```astro
---
import Social from "./Social.astro";
---

<footer>
  <p>
    Learn more about my projects on <Social
      platform="GitHub"
      username="withastro"
    />, <Social platform="Twitter" username="astrodotbuild" /> and <Social
      platform="Youtube"
      username="astrodotbuild"
    />.
  </p>
</footer>

<style>
  a {
    padding: 0.5rem 1rem;
    color: white;
    background-color: #4c1d95;
    text-decoration: none;
  }
</style>
```

3. Check your browser preview again and confirm that each page shows an updated footer.

### 3.3. Build it yourself - Header

> GET READY TO...<br>
&bull; Create a Header for your site that contains the Navigation component<br>
&bull; Make the Navigation component responsive

#### Try it yourself - Build a new Header component

1. Create a new Header component. Import and use your existing `Navigation.astro` component inside a `<nav>` element which is inside a `<header>` element.


```jsx
---
import Navigation from './Navigation.astro';
---
<header>
  <nav>
    <Navigation />
  </nav>
</header>
```

#### Try it yourself - Update your pages

1. On each page (`index.astro`, `about.astro` and `blog.astro`), replace your existing `<Navigation/>` component with your new header.

Replace: 

```jsx
import Navigation from '../components/Navigation.astro';
```

With:

```jsx
import Header from '../components/Header.astro';
```

And replace:

```jsx
<Navigation />
```

With:

```jsx
<Header />
```

#### Add responsive styles

1. Update `Navigation.astro` with the CSS class to control your navigation links. Wrap the existing navigation links in a ' ' with the class `nav-links`.

```jsx
---
---
<div class="nav-links">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
</div>
```

2. Copy the CSS styles below into `global.css`. These styles:

    - Style and position the navigation links for mobile
    - Include an `expanded` class that can be toggled to display or hide the links on mobile
    - Use a `@media` query to define different styles for larger screen sizes

```css
html {
  background-color: #f1f5f9;
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: 100%;
  max-width: 80ch;
  padding: 1rem;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

h1 {
  margin: 1rem 0;
  font-size: 2.5rem;
}

/* nav styles */

.nav-links {
  width: 100%;
  top: 5rem;
  left: 48px;
  background-color: #ff9776;
  display: unset;
  margin: 0;
}

.nav-links a {
  display: block;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-links a:hover,
.nav-links a:focus {
  background-color: #ff9776;
}

.expanded {
  display: unset;
}

@media screen and (min-width: 636px) {
  .nav-links {
    margin-left: 5em;
    display: block;
    position: static;
    width: auto;
    background: none;
  }

  .nav-links a {
    display: inline-block;
    padding: 15px 20px;
  }

}
```

Resize your window and look for different styles being applied at different screen widths. Your header is now **responsive** to screen size through the use of `@media` queries.

### 3.4. Send your first script to the browser

Let’s add a hamburger menu to open and close your links on mobile screen sizes, requiring some client-side interactivity!

> GET READY TO...<br>
&bull; Create a hamburger menu component<br>
&bull; Write a `<script>` to allow your site visitors to open and close the navigation menu<br>
&bull; Move your JavaScript to its `.js` file

#### Build a Hamburger component

Create a `<Hamburger />` component to open and close your mobile menu.

1. Create a file named `Hamburger.astro` in `src/components/`

2. Copy the following code into your component. This will represent your 3-line “hamburger” menu to open and close your navigation links on mobile. (You will add the new CSS styles to `global.css` later.)

3. Place this new `<Hamburger />` component just before your `<Navigation />` component in `Header.astro`.

```jsx
---
import Navigation from "./Navigation.astro";
import Hamburger from "./Hamburger.astro";
---

<header>
  <nav>
    <Hamburger />
    <Navigation />
  </nav>
</header>
```

4. Add the following styles for your Hamburger component:

```css
/* nav styles */
/* ADD THE FOLLOWING*/
.hamburger {
  padding-right: 20px;
  cursor: pointer;
}

/* ADD THE FOLLOWING*/
.hamburger .line {
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 10px;
  background-color: #ff9776;
}

.nav-links {
  width: 100%;
  top: 5rem;
  left: 48px;
  background-color: #ff9776;
  display: none;
  margin: 0;
}

.nav-links a {
  display: block;
  text-align: center;
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.nav-links a:hover, a:focus {
  background-color: #ff9776;
}

.expanded {
  display: unset;
}

@media screen and (min-width: 636px) {
  .nav-links {
    margin-left: 5em;
    display: block;
    position: static;
    width: auto;
    background: none;
  }

  .nav-links a {
    display: inline-block;
    padding: 15px 20px;
  }

  /* ADD THE FOLLOWING*/
  .hamburger {
    display: none;
  }
}
```

#### Write your first script tag

Your header is not yet **interactive** because it can’t respond to user input, like clicking on the hamburger menu to show or hide the navigation links.

Adding a `<script>` tag provides client-side JavaScript to “listen” for a user event and then respond accordingly.

1. Add the following `<script>` tag to `index.astro`, just before the closing `</body>` tag.

```jsx
  <Footer />
  <script>
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('expanded');
    });
  </script>
</body>
```

2. Check your browser preview again at various sizes, and verify that you have a working navigation menu that is both responsive to screen size and responds to user input on this page.

#### Importing a `.js` file

Instead of writing your JavaScript directly on each page, you can move the contents of your `<script>` tag into its own `.js` file in your project.

1. Create `src/scripts/menu.js` (you will have to create a new `/scripts/` folder) and move your JavaScript into it.

```js
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});
```

2. Replace the contents of the `<script>` tag on `index.astro` with the following file import:

```jsx
  <Footer />
  <script>
    import "../scripts/menu.js";
  </script>
</body>
```

3. Check your browser preview again at a smaller size and verify that the hamburger menu still opens and closes your navigation links.

4. Add the same `<script>` with import to your other two pages, `about.astro` and `blog.astro` and verify that you have a responsive, interactive header on each page.

```jsx
  <Footer />
  <script>
    import "../scripts/menu.js";
  </script>
</body>
```

> IMPORTANT: **The JavaScript in a `<script>` tag is sent to the browser**, and is available to run, based on user interactions like refreshing a page or toggling an input.

## 4. Save time and energy with reusable page layouts

Now that you can build with components, it’s time to create some custom layouts!

### Looking ahead

In this unit, you’ll build layouts to share common elements and styles across your pages and blog posts.

To do this, you will:

- Create reusable layout components
- Pass content to your layouts with `<slot />`
- Pass data from Markdown frontmatter to your layouts
- Nest multiple layouts

### 4.1. Build your first layout

> GET READY TO...<br>
&bull; Refactor common elements into a page layout<br>
&bull; Use an Astro `<slot />` element to place page contents within a layout<br>
&bull; Pass page-specific values as props to its layout

You still have some Astro components repeatedly rendered on every page. It’s time to refactor again to create a shared page layout!

#### Create your first layout component

1. Create a new file at the location `src/layouts/BaseLayout.astro`. (You will need to create a new `layouts` folder first.)

2. Copy the entire contents of `index.astro` into your new file, `BaseLayout.astro`.

```jsx
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
const pageTitle = "Home Page";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Header />
    <h1>{pageTitle}</h1>
    <Footer />
    <script>
      import "../scripts/menu.js";
    </script>
  </body>
</html>
```

#### Use your layout on a page

3. Replace the code at `src/pages/index.astro` with the following:

```jsx
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Home Page";
---
<BaseLayout>
  <h2>My awesome blog subtitle</h2>
</BaseLayout>
```

4. Check the browser preview again to notice what did (or, spoiler alert: did not!) change.

5. Add a `<slot />` element to `src/layouts/BaseLayout.astro` just above the footer component, then check the browser preview of your Home page and notice what really did change this time!

```jsx
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
const pageTitle = "Home Page";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Header />
    <h1>{pageTitle}</h1>
    <slot />
    <Footer />
    <script>
      import "../scripts/menu.js";
    </script>
  </body>
</html>
```

The `<slot />` allows you to inject (or “slot in”) child content written between opening and closing `<Component></Component>` tags to any `Component.astro` file.

#### Pass page-specific values as props

1. Pass the page title to your layout component from `index.astro` using a component attribute:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const pageTitle = "Home Page";
---
<BaseLayout pageTitle={pageTitle}>
  <h2>My awesome blog subtitle</h2>
</BaseLayout>
```

2. Change the script of your `BaseLayout.astro` layout component to receive a page title via `Astro.props` instead of defining it as a constant.

Replace:

```jsx
const pageTitle = "Home Page";
```

With:

```jsx
const { pageTitle } = Astro.props;
```

3. Check your browser preview to verify that your page title has not changed. It has the same value, but is now being rendered dynamically. And now, each individual page can specify its own title to the layout.

#### Try it yourself - Use your layout everywhere

**Refactor** your other pages (`blog.astro` and `about.astro`) so that they use your new `<BaseLayout>` component to render the common page elements.

Don’t forget to:

- Pass a page title as props via a component attribute.
- Let the layout be responsible for the HTML rendering of any common elements.
- Delete anything from each page that that page is no longer responsible for rendering, because it is being handled by the layout, including:

  - HTML elements
  - Components and their imports
  - CSS rules in a `<style>` tag (e.g. `<h1>` in your About page)
  - `<script>` tags

### 4.2 Create and pass data to a custom blog layout

> GET READY TO...<br>
&bull; Create a new blog post layout for your Markdown files<br>
&bull; Pass YAML frontmatter values as props to layout component

#### Add a layout to your blog posts

When you include the `layout` frontmatter property in an `.md` file, all of your frontmatter YAML values are available to the layout file.

1. Create a new file at `src/layouts/MarkdownPostLayout.astro`

2. Copy the following code into `MarkdownPostLayout.astro`

```jsx
---
const { frontmatter } = Astro.props;
---
<h1>{frontmatter.title}</h1>
<p>Written by {frontmatter.author}</p>
<slot />
```

3. Add the following frontmatter property in `post-1.md`

```jsx
---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["astro", "blogging", "learning in public"]
---
```

4. Check your browser preview again at http://localhost:4321/posts/post-1 and notice what the layout has added to your page.

5. Add the same layout property to your two other blog posts `post-2.md` and `post-3.md`. Verify in your browser that your layout is also applied to these posts.

#### Try it yourself - Customize your blog post layout

**Challenge**: Identify items common to every blog post, and use `MarkdownPostLayout.astro` to render them, instead of writing them in your Markdown in `post-1.md` and in every future blog post.

Here’s an example of refactoring your code to include the `pubDate` in the layout component instead of writing it in the body of your Markdown:

Delete in `post-1.md`:

```jsx
Published on: 2022-07-01
```

Add in `src/layouts/MarkdownPostLayout.astro`:

```jsx
---
const { frontmatter } = Astro.props;
---
<h1>{frontmatter.title}</h1>
<p>Published on: {frontmatter.pubDate.toString().slice(0,10)}</p>
<p>Written by {frontmatter.author}</p>
<slot />
```


#### 

```astro
```

> GET READY TO...<br>
&bull; x<br>
&bull; x<br>
&bull; x


CONTINUAR EN: https://docs.astro.build/en/tutorial/4-layouts/

Build your first layout
Create and pass data to a custom blog layout
Combine layouts to get the best of both worlds


---
## 5. Beef up your blog

## 6. Set sail for Astro islands
