"use strict";
// Methods for converting strings to titleCase
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabToTitle = void 0;
String.prototype.capitalize = function () {
    // Capitalizes the first letter of the string
    return this[0].toUpperCase() + this.slice(1);
};
const kebabToTitle = (s) => {
    // Converts `s` from kebab-case to TitleCase
    return s
        .split('-')
        .map((t) => t.capitalize())
        .join('');
};
exports.kebabToTitle = kebabToTitle;
