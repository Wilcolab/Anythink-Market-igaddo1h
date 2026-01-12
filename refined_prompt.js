/**
 * Converts a given string to camel case.
 * 
 * Camel case is a style of writing where the first word is in lowercase and 
 * subsequent words are capitalized, with no spaces or punctuation between them.
 * 
 * @param {string} str - The input string to be converted to camel case.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camel case version of the input string.
 * 
 * @example
 * // returns "helloWorld"
 * toCamelCase("hello world");
 * 
 * @example
 * // returns "makeThisCamelCase"
 * toCamelCase("make_this_camel-case");
 */

/**
 * Converts a given string to dot case.
 * 
 * Dot case is a style of writing where all words are in lowercase and 
 * separated by dots, with no spaces or punctuation.
 * 
 * @param {string} str - The input string to be converted to dot case.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The dot case version of the input string.
 * 
 * @example
 * // returns "hello.world"
 * toDotCase("hello world");
 * 
 * @example
 * // returns "make.this.camel.case"
 * toDotCase("make_this_camel-case");
 */

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Input must be a string');
    }

    return str
        .split(/[\s-_]+/) // Split by spaces, underscores, or hyphens
        .filter(word => /^[a-zA-Z]+$/.test(word)) // Filter out non-letter words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join(''); // Join the words back together
}

// Example usage:
// console.log(toCamelCase("hello world")); // helloWorld
// console.log(toCamelCase("make_this_camel-case")); // makeThisCamelCase

function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Input must be a string');
    }

    return str
        .split(/[\s-_]+/) // Split by spaces, underscores, or hyphens
        .filter(word => /^[a-zA-Z]+$/.test(word)) // Filter out non-letter words
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('.'); // Join the words with dots
}

// Example usage:
// console.log(toDotCase("hello world")); // hello.world
// console.log(toDotCase("make_this_camel-case")); // make.this.camel.case

