#!/usr/bin/env node

const fest = require('fest');
const fs = require('fs');
const glob = require('glob');
const argv = require('argv');

argv.option({
  name: 'dir',
  short: 'd',
  type: 'string',
  description: 'Path to folders with templates',
  example: "'./fest-build --dir=./blocks",
});

const args = argv.run();

glob(`${args.options.dir}/**/*.xml`, (err, list) => {
  if (err) {
    console.error(err);
    return;
  }

  list.forEach((template) => {
    fs.writeFileSync(`${template}.js`, `export default ${fest.compile(template, { beautify: false })}`);
  });

  console.log(list);
});

console.log(args);
