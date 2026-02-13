const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const indexPath = path.join(__dirname, '../public/index.html');
const content = fs.readFileSync(indexPath, 'utf8');
const $ = cheerio.load(content);

let failed = false;

// 1. Check for <main> tag
if ($('main.content').length > 0) {
    console.log('PASS: <main> tag exists');
} else {
    console.error('FAIL: <main> tag missing');
    failed = true;
}

// 2. Check for aria-hidden="true" on GitHub SVG
const githubIcon = $('.github-icon');
if (githubIcon.attr('aria-hidden') === 'true') {
    console.log('PASS: GitHub SVG has aria-hidden="true"');
} else {
    console.error('FAIL: GitHub SVG missing aria-hidden="true"');
    failed = true;
}

// 3. Check for .disclaimer font-size
const styleContent = $('style').html();
// Regex to find .disclaimer { ... font-size: 11px ... }
// This is tricky with regex, but let's try a simple approach:
// Check if the specific line "font-size: 11px;" exists within the .disclaimer block?
// Or just check if "font-size: 11px;" appears near ".disclaimer".
// Better: check if "font-size: 9px;" is GONE from .disclaimer or replaced.
// But .footer has 11px.
// Let's use a regex that looks for .disclaimer block.
const disclaimerRegex = /\.disclaimer\s*\{[^}]*font-size:\s*11px[^}]*\}/s;
if (disclaimerRegex.test(styleContent)) {
    console.log('PASS: Disclaimer font-size is 11px');
} else {
    console.error('FAIL: Disclaimer font-size is not 11px');
    failed = true;
}

// 4. Check for .github-button:hover style
const hoverRegex = /\.github-button:hover\s*\{[^}]*\}/s;
if (hoverRegex.test(styleContent)) {
    console.log('PASS: .github-button:hover style exists');
} else {
    console.error('FAIL: .github-button:hover style missing');
    failed = true;
}

if (failed) {
    process.exit(1);
} else {
    console.log('All UX verifications passed!');
}
