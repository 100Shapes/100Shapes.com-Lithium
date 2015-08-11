# 100Shapes.com "Lithium"
This project is the "Lithium" release of the [100 Shapes site](http://www.100shapes.com/ "UX & Design services for broadcasters").

We've built it under an open MIT licence so you can pick it apart and use some of the ideas in your own project.

## Tech

Here's some of the tech you'll find here:

- Webpack
- Babel + ES6
- AngularJS
- LESSCSS + CardinalCSS
- Docker
- NGINX
- Prerender.io

### Webpack
Webpack does all the *tooling* for the project. See the webpack.config.js file for tips here.

Key points:

- `DefinePlugin` to set up our `API_BASE_URL` (an environment variable we pass in on the server)
- `noParse` set up to save on build time
- `HtmlWebpackPlugin` 

### Babel + ES6

We were keen to see what all the fuss was about with ES6 so we went slowly and mixed in _some_ of the features we needed. (it's pretty easy to be honest).

### AngularJS

The site is an Angular app. We wanted to see how Angular fitted with a content-driven site. This is the result.

### LESSCSS + CardinalCSS

[CardinalCSS](http://cardinalcss.com/) is an incredible library that changed the way we wrote CSS. Using micro-styles, we found we were no longer needed to create CSS modules files. See the CSS directory and the individual `.less` files within the directives. 

### Docker + NGINX

We leverage docker to run the app using a base image from Phusion – Passenger.

### Prerender.io

SEO was kind of a big thing. Prerender made it "no big thing".

## Issues

[@100shapes](https://twitter.com/100shapes) or email [hi@100shapes.com](mailto:hi@100shapes.com).

## "Lithium"?
Instead of versioning our projects with numbers, we use the atomic number in the periodic table – it's just a thing we do.

