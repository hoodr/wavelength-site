This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# In case you haven't done this, set up env
npm install -g corepack typescript-language-server typescript
corepack enable
yarn dlx @yarnpkg/sdks base

# run dev
yarn install
yarn dev

yarn build \
  && touch out/.nojekyll \
  && git add out/ \
  && git commit -m \"Deploy\" \
  && git subtree push --prefix out origin gh-pages
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
