var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', [], function() { // 'karma', 'iconFont'
  // This runs only if the karma tests pass
  gulp.start( ['minifyCss', 'uglifyJs'] );
});