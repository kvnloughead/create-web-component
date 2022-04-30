// Methods for converting strings to titleCase

declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function () {
  // Capitalizes the first letter of the string
  return this[0].toUpperCase() + this.slice(1);
};

export const kebabToTitle = (s: string) => {
  // Converts `s` from kebab-case to TitleCase
  return s
    .split('-')
    .map((t) => t.capitalize())
    .join('');
};

export {};
