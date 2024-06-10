export const removePlus = (string: string): string => string.replace(/^\+/, '');

export const addPlus = (string: string): string => `+${string}`;

export const removeFirstZeros = (value: string): string => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: number | string, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export type Coord = { x: number; y: number };
export const getTransformFromCss = (transformCssString: string): Coord => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

type Rgb = [number, number, number];
export const getColorContrastValue = (rgb: Rgb): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000);

//export const getContrastType = (contrastValue) => (contrastValue > 125 ? 'black' : 'white');
export const getContrastType = (contrastValue: number): string => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): string => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
  return color;
};

export const hex2rgb = (color: string): number[] => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export const getNumberedArray = <T>(arr: T[]): { value: T; number: number }[] =>
  arr.map((value, index) => ({ value, number: index as number }));

export const toStringArray = (arr: any[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);

type Customer = {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
};

type Account = {
  [key in number]: Customer;
};

export const transformCustomers = (customers: Customer[]): Account => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed } as Customer;
    return acc;
  }, {} as Account);
};
