/**
 * Convert HTML Entities
 * =====================
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their
 * corresponding HTML entities.
 *
 */


function convertHTML(str) {
  return str
    .replace(/&/gi, '&amp;')
    .replace(/</gi, '&lt;')
    .replace(/>/gi, '&gt;')
    .replace(/"/gi, '&quot;')
    .replace(/'/gi, '&apos;');
}

module.exports = convertHTML;
