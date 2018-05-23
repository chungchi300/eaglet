#!/usr/bin/env node

/* eslint-env node, shelljs */
"use strict";
// https://gist.github.com/mlouro/8886076
// https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate/blob/master/gulp/tasks/browserify.js
require("shelljs/make");
target.lib = function(args) {
  const pkg = require("./tsconfig.json");
  var baseUrl = pkg.compilerOptions.baseUrl;
  var dist = pkg.compilerOptions.outDir;

  exec(` rm -rf ${baseUrl}/${dist}&&rm -rf ${dist}`);
  exec(`npx tsc --outDir ${baseUrl}/${dist} `);
  exec(` npx tspath -f `);
  exec(`mv ${baseUrl}/${dist} ${dist}/`);
};
