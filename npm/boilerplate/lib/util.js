const codegen = require('postman-code-generators'),

/**
 * Fetches section of snippet from snippet generated by postman-code-generators

 * While adding checkpoint(to postman-code-generators) make sure the block of code
 * has the same start and end checkpoint string

 *  eg;
 //---> IMPORTS <---
 const request = require('request');
 //---> IMPORTS <---

 * CHECKPOINT1: Desc

 * @param {String} snippet - Request snippet generated by postman-code-generators
 * @param {String} section - Section of snippet to be fetched. Possible values -> (add values here)
 */
function fetchSnippet (snippet, section) {
    var saperator, re;
    switch (section) {
        case 'CHECKPOINT1':
            saperator = 'CHECKPOINT STRING HERE';
            break;
        default:
            saperator = '';
            break;
    }
    // eslint-disable-next-line security/detect-non-literal-regexp
    re = new RegExp(`(?<=${saperator})(.*)(?=${saperator})`, 'g');
    return snippet.match(re);
}

/**
 * Generates snippet for a function declaration

 * @param {String} requestSnippet - Request snippet generated by postman-code-generator
 * @param {Object} options - postman-code-gen options (for specific language)
 */
function generateFunctionSnippet (requestSnippet, options) {
    var snippet = '';
    // generate function snippet/declaration here
    return snippet;
}

module.exports = {
    fetchSnippet,
    generateFunctionSnippet
};
