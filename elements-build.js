

// const fs = require('fs-extra');
// const concat = require('concat');
// const glob = require("glob");

// glob("./dist/angular6-elements/*.*.js",{}, function (er, files) {
//     (async function build() {
//         await fs.ensureDir('elements');    
//         await concat(files, 'elements/elements.js');     
//     })()
//   });




const fs = require('fs-extra');
const concat = require('concat');
const glob = require("glob");

glob("./dist/angular6-elements/*.*.js",{}, function (er, files) {
    (async function build() {
        await fs.ensureDir('elements');  
        let reversed = files.reverse(); 
        await concat(reversed, 'elements/elements.js');     
    })()
  });



  (async function build() {
    const files = [
        './dist/angular6-elements/runtime.6afe30102d8fe7337431.js',
        './dist/angular6-elements/scripts.69c39fe5fecacc5138f1.js',
        './dist/angular6-elements/polyfills.c72d3210425a88b28b6d.js',
        './dist/angular6-elements/main.69c25fb296a0cda9a95b.js',
    ]
 
    await fs.ensureDir('elements');
 
    await concat(files, 'elements/elements1.js');
 
    // await fs.copyFile('./dist/angular6-elements/styles.css', 'elements/styles.css');
 
})()



// const fs = require('fs-extra');
// const concat = require('concat');
 
// (async function build() {
//     const files = [
//         './dist/angular6-elements/runtime.6afe30102d8fe7337431.js',
//         './dist/angular6-elements/polyfills.c72d3210425a88b28b6d.js',
//         './dist/angular6-elements/scripts.69c39fe5fecacc5138f1.js',
//         './dist/angular6-elements/main.990e0a62299d95fa12db.js',
//     ]
 
//     await fs.ensureDir('elements');
 
//     await concat(files, 'elements/elements1.js');
 
//     // await fs.copyFile('./dist/angular6-elements/styles.css', 'elements/styles.css');
 
// })()
