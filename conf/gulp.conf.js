'use strict';

const path = require('path');
const gutil = require('gulp-util');


exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  tasks: 'gulp_tasks'
};


exports.htmlmin = {
  ignoreCustomFragments: [/{{.*?}}/]
};


exports.path = {};
for (const pathName in exports.paths) {
  if (Object.prototype.hasOwnProperty.call(exports.paths, pathName)) {
    exports.path[pathName] = function () {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}
