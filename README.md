# Astro.build official tutorial: Build a Blog

## 1. Create and deploy your first Astro site

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

## 2. Add, style and link to pages on your site

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


#### 

```html
```
---

## 3. Build and design with Astro UI components

## 4. Save time and energy with reusable page layouts

## 5. Beef up your blog

## 6. Set sail for Astro islands