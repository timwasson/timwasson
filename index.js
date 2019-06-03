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

handlebars.registerHelper('moment', require('helper-moment'));

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
  .use(layouts({
    engine: 'handlebars',
    directory: './src/layouts',
  }))
  .use(browserSync({
    server : "build",
    files  : ["src/**/*.md", "src/layouts/**/*.hbs", "src/assets/scss/*.scss"]
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
  