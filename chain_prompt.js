function toKebabCase(input) {
    // Validate input
    if (typeof input !== 'string') {
        throw new Error('Input is invalid');
    }

    if (input.trim().length === 0) {
        throw new Error('Input is invalid');
    }

    // Trim trailing and leading spaces
    let result = input.trim();

    // Insert hyphen before uppercase letters (for camelCase and PascalCase)
    result = result.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Replace underscores with hyphens (for snake_case)
    result = result.replace(/_/g, '-');

    // Replace spaces with hyphens
    result = result.replace(/\s+/g, '-');

    // Convert to lowercase
    result = result.toLowerCase();

    // Remove consecutive hyphens
    result = result.replace(/-+/g, '-');

    // Remove leading/trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    if (result.length === 0) {
        throw new Error('Input is invalid');
    }

    return result;
}