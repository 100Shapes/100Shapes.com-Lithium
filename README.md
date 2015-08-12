# 100Shapes.com "Lithium"
This project is the "Lithium" release of the [100 Shapes site](http://www.100shapes.com/ "UX & Design services for broadcasters").

We've built it under an open MIT licence so you can pick it apart and use the ideas in your own projects.

[![100 Shapes homepage](screen.png?raw=true "Homepage")](http://www.100shapes.com/ "UX & Design services for broadcasters | 100 Shapes")
[![100 Shapes blog post page](screen2.png?raw=true "Blog item page")](http://www.100shapes.com/blog/the-evolution-of-interactive-experiences/ "The evolution of interactive experiences | 100 Shapes blog")

## About Us

We're a User experience (UX) & design agency based in London, UK. We specialise in working with broadcasters and media brands like the BBC & ITV.

If you think you can help us build things for these types of organisations, give us a shout.


## Questions/Issues

Ping us: [@100shapes](https://twitter.com/100shapes), email [hi@100shapes.com](mailto:hi@100shapes.com), or make an issue.


## Tech

Here's the tech you'll find here:

- Webpack
- Babel + ES6
- AngularJS
- LESSCSS + CardinalCSS
- Docker
- NGINX
- Prerender.io

### Webpack
Webpack does all the *tooling* for the project. See the [webpack.config.js](./webpack.config.js) file for tips here.

Key points:

- `DefinePlugin` to set up our `API_BASE_URL` (an environment variable we pass in on the server)
- `noParse` set up to save on build time
- `HtmlWebpackPlugin` to take a base `index.html` template and wire it up with webpack

### Babel + ES6

We were keen to see what all the fuss was about with ES6 so we went slowly and mixed in _some_ of the features we needed. (it's pretty easy to be honest).

### AngularJS

The site is an Angular app. We wanted to see how Angular fitted with a content-driven site. This is the result.

### LESSCSS + CardinalCSS

[CardinalCSS](http://cardinalcss.com/) is an incredible library that changed the way we wrote CSS. Using micro-styles, we found there was no longer a need to make lots of css modules files and concatenate them all together. See the [CSS directory](./src/css) and the individual `.less` files within the directives i.e. [ohs-contact.less](./src/shared/ohs-contact/ohs-contact.less).

### Docker + NGINX

We leverage docker to run the app using a base image from [Phusion – Passenger](https://github.com/phusion/passenger-docker).

### Prerender.io

SEO was kind of a big thing. [Prerender.io](https://prerender.io/) made it _no big thing_.

## "Lithium"?
Instead of versioning our projects with numbers, we use the atomic number in the periodic table – it's just a thing we do.

