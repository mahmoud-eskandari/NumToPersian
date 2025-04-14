const fs = require('fs');
const { minify } = require('terser');

// Read the file
const filePath = './dist/num2persian.js';
let content = fs.readFileSync(filePath, 'utf8');

// Remove the export lines
content = content.replace('Object.defineProperty(exports, "__esModule", { value: true });', '');
content = content.replace('exports.default = num2persian;', '');
content = content.replace('exports.en2fa = en2fa;', '');
content = content.replace('exports.fa2en = fa2en;', '');
content = content.replace('exports.num2mixed = num2mixed;', '');
content = content.replace('exports.moneyFormat = moneyFormat;', '');

// Write back to file
fs.writeFileSync(filePath, content);
console.log('Export statements removed successfully!');

// Create minified version
async function createMinified() {
  try {
    const result = await minify(content, {
      compress: {
        drop_console: false,
        passes: 2
      },
      mangle: true
    });
    
    fs.writeFileSync('./dist/num2persian.min.js', result.code);
    console.log('Minified version created: num2persian.min.js');
  } catch (error) {
    console.error('Minification error:', error);
  }
}

createMinified();