# Astro.build official tutorial: Build a Blog

## Unit 1 - Setup: create and deploy your first Astro site

### 1.1. Prepare your dev environment

Get the dev tools you need:

* terminal
* Node.js (version v18.14.1 or later)
* VS Code Editor

### 1.2. Create your first Astro project

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

#### Edit your home page

Replace <s>`<h1>Astro</h1>`</s>  with `<h1>My Astro Site</h1>`
</body>
```

### 1.4. Store your repository online

#### Create a repository on GitHub

#### Commit your local code to GitHub

### 1.5. Deploy your site to the web

#### Create a new Netlify site

1. Go to: https://netlify.com/ and make a note of your username: `https://app.netlify.com/teams/knnv-ar/`
2. Click `Add new site > Import an existing project`, then choose your Astro project’s GitHub repository from the list provided.
3. At the final step, Netlify will show you your app’s site settings. The defaults should be correct for your Astro project, so you can scroll down and click `Deploy site`.

#### Change your project name

#### Visit your new website

## Unit 2 - Pages: add, style and link to pages on your site

### 2.1. Create your first Astro page

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

  <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p>

  <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
</body>
```

#### Add navigation links

Add at the top of pages `index.astro` and `about.astro`:

```html
<a href="/">Home</a>
<a href="/about/">About</a>
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

#### Create your first .md file

Create `src/pages/posts/post-1-md` and test `http://localhost:4321/posts/post-1`

#### Write Markdown content

```md
---
title: 'My First Blog Post'
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
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
    <meta charset="utf-8"/>
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

#### Define and use a variable

In `src/pages/about.astro` add the variable `pageTitle` between the code fences and use it with curly braces in the body:

```astro
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

```astro
const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Technical Writer",
  hobbies: ["photography", "birdwatching", "baseball"],
};

const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
```

2. In the same page add the following code in your HTML template, below your existing content:

```astro
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


#### 

```astro
```
---

## 3. Build and design with Astro UI components

## 4. Save time and energy with reusable page layouts

## 5. Beef up your blog

## 6. Set sail for Astro islands