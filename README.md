# Microfrontends Template with Hanami

The best way to run Hamani app + Webpack without dirty hacks 

# Features

* Ready for dev and prod environments
* **Webpack 4.x** integrated with **Hamani 1.x** to forget about ugly Rails-like asset pipeline
* You can use default Hamani helpers like `favicon`, `stylesheet`, `javascript` with `fingerprint true` (support for CDN + SRI will be added in future if needed)
* Integrated **SCSS support** + source maps
* Integrated **TypeScript 2.x support** + source maps — enjoy power of well-designed typing system
* Shipped with SCSS version of latest **ZURB Foundation framework**
* Added support for **Vue.js** + TypeScript with **Class-Style Components** (see https://vuejs.org/v2/guide/typescript.html#Class-Style-Vue-Components)
* Application-wide SCSS will go to application.scss file instead of js embedding
* No more JSX/TSX stuff — use a separate html file to define your web component's template 
* Embedded support for **Scoped CSS** for your web components (check https://vue-loader.vuejs.org/en/features/scoped-css.html)
* Added examples for Vue components (look at `apps/web/frondend/` directory)
* Included support plus example for **Vue Router** (you can find docs here: https://router.vuejs.org/en/)  


## Setup

To start, first run Webpack in watch mode:

```
git clone git@github.com:0x000000/microfrontends_template.git
cd microfrontends_template
bundle
bundle exec hanami db prepare
yarn
yarn serve
```

Then, just run Hamani server. Use different process / tab for your terminal app:

```
bundle exec hanami server
```

To build assets in production mode just use:

```
yarn build
```


## Roadmap

* [WIP] Examples for **Vuex**
* [WIP] Testing with **Vue Test Utils**
* Hot Module Replacement (not all plugins support it right now)
* Webpack 5+ (I am sure it will be released right after you finish your tunings for 4.x to break everything)
* Build a tool to generate template with options
