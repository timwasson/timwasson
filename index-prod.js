var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var moment = require('helper-moment');
var handlebars = require('handlebars');
var browserSync = require('metalsmith-browser-sync');
var sass = require('metalsmith-sass');
var discoverPartials = require('metalsmith-discover-partials');
var pagination = require('metalsmith-pagination');

handlebars.registerHelper('moment', require('helper-moment'));

handlebars.registerHelper('add',function(a, b) {
  return a + b;
});

// limit an array to a maximum of elements (from the start)
handlebars.registerHelper('limit', function (arr, limit) {
  if (!Array.isArray(arr)) { return []; }
  return arr.slice(0, limit);
});

Metalsmith(__dirname)
  .metadata({
    title: "timwasson.com",
    description: "hello.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(sass({
    outputDir: 'assets/css/'   // This changes the output dir to "build/css/" instead of "build/scss/"
  }))
  .use(permalinks())
  .use(discoverPartials({
    directory: './src/layouts/partials',
    pattern: /\.hbs$/
  }))
  .use(collections({
    blog: {
      pattern: 'posts/blog/**/*.md',
      sortBy: 'date',
      reverse: true
    },
  }))
  
  .use(pagination({
    'collections.blog': {
      perPage: 5,
      layout: 'archive.html.hbs',
      first: 'archive/index.html',
      path: 'archive/:num/index.html',
      //filter: function (page) {
      //  return !page.private
      //},
      //pageMetadata: {
      //  title: 'Archive'
      //}
    }
  }))
  .use(layouts({
    engine: 'twig',
    directory: './src/layouts',
  }))
  .build(function(err, files) {
    if (err) { throw err; }
    else {
      console.log("site regenerated successfully");
    }
  });
  