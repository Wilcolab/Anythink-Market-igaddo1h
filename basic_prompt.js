function toCamelCase(str) {
    return str.replace(/([a-z])([a-z]*)/gi, (match, first, rest, offset) => {
        return offset === 0 ? match.toLowerCase() : first.toUpperCase() + rest.toLowerCase();
    });
}

// Example usage:
console.log(toCamelCase("vedisvigorous")); // vedIsVigorous