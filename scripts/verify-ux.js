const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexPath = path.join(__dirname, '../public/index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

const $ = cheerio.load(indexHtml);

let hasErrors = false;

console.log('🔍 Verifying UX improvements in public/index.html...');

// 1. Check for <main> tag
if ($('main').length === 0) {
    console.error('❌ Missing <main> tag. Content should be wrapped in <main>.');
    hasErrors = true;
} else {
    console.log('✅ Found <main> tag.');
}

// 2. Check for aria-hidden="true" on GitHub icon
const githubIcon = $('.github-icon');
if (githubIcon.length === 0) {
    console.error('❌ Missing .github-icon SVG.');
    hasErrors = true;
} else if (githubIcon.attr('aria-hidden') !== 'true') {
    console.error('❌ .github-icon missing aria-hidden="true".');
    hasErrors = true;
} else {
    console.log('✅ .github-icon has aria-hidden="true".');
}

// 3. Check for .github-button hover state
if (!indexHtml.includes('.github-button:hover')) {
    console.error('❌ Missing .github-button:hover style.');
    hasErrors = true;
} else {
    console.log('✅ Found .github-button:hover style.');
}

// 4. Check for .github-button focus-visible state
if (!indexHtml.includes('.github-button:focus-visible')) {
    console.error('❌ Missing .github-button:focus-visible style.');
    hasErrors = true;
} else {
    console.log('✅ Found .github-button:focus-visible style.');
}

if (hasErrors) {
    console.error('⚠️ Verification failed.');
    process.exit(1);
} else {
    console.log('🎉 Verification passed!');
    process.exit(0);
}
