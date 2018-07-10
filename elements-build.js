
const fs = require('fs-extra');
const concat = require('concat');
 
(async function build() {
    const files = [
        './dist/angular6-elements/runtime.6afe30102d8fe7337431.js',
        './dist/angular6-elements/polyfills.c72d3210425a88b28b6d.js',
        './dist/angular6-elements/scripts.69c39fe5fecacc5138f1.js',
        './dist/angular6-elements/main.6da85607331421fce36c.js',
    ]
 
    await fs.ensureDir('elements');
 
    await concat(files, 'elements/elements.js');
 
    await fs.copyFile('./dist/angular6-elements/styles.css', 'elements/styles.css');
 
})()