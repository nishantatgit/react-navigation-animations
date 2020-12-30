let ghpages = require('gh-pages');
ghpages.publish('build', function(err) {
    console.log('published to git pages :)');
})