export const camelCase = (str: string): string => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+|-/g, '');
};

export const upperFirst = (str: string): string => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

export const kebabCase = (str: string): string => {
  if (!str) return '';

  let matchedStr = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );

  if (!matchedStr) return str;

  return matchedStr.map((x) => x.toLowerCase()).join('-');
};
