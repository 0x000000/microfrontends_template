# Microfrontends Template with Hanami

This is one of possible ways to run Hamani app + Webpack 

# Features

* Ready for dev environment (production config will be added soon)
* Webpack integrated with Hamani to forget about ugly Rails-like asset pipeline
* You can use default Hamani helpers like `favicon`, `stylesheet`, `javascript` with `fingerprint true` (support for CDN + SRI will be added in future if needed)
* Integrated SCSS support + source maps
* Integrated TypeScript 2.x support + source maps — enjoy power of well-designed typing system
* Shipped with SCSS version of latest ZURB Foundation framework
* Added support for Vue.js + TypeScript with Class-Style Components (see https://vuejs.org/v2/guide/typescript.html#Class-Style-Vue-Components)
* Vendor libs organized to vendor.js file
* Application-wide SCSS will go to application.scss file instead of js embedding
* No more JSX/TSX stuff — use separate html file to define your web component's template (check frontend/components)
* Embedded support for Scoped CSS for your web components (check https://vue-loader.vuejs.org/en/features/scoped-css.html)


## Setup

To start, first run Webpack in watch mode:

```
git clone ...
cd microfrontends_template
bundle
bundle exec hanami db prepare
yarn
yarn run webpack
```

Then, just run Hamani server. Use different process / tab for your terminal app:

```
bundle exec hanami server
```
