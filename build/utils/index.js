"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabToTitle = void 0;
String.prototype.toTitleCase = function () {
    return this[0].toUpperCase() + this.slice(1);
};
'foo'.toTitleCase();
const kebabToTitle = (s) => {
    // Converts `s` from kebab-case to TitleCase
    return s
        .split('-')
        .map((t) => t.toTitleCase())
        .join('');
};
exports.kebabToTitle = kebabToTitle;
