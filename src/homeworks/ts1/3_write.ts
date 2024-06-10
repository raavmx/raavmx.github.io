//для удобства подключаем рандомные списки и генерацию guid
import { Random } from 'random-js';
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
  starWars,
  names,
  countries,
} from 'unique-names-generator';

// создаем новые типы
export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  amount: number;
  category: Category;
  type: 'Cost' | 'Profit';
};

//создание случайного продукта
export const createRandomProduct = (createdAt: string): Product => {
  const productId = getRandomId(); //новый id продукта
  const category = getRandomElement(categories); //получаем категорию
  const price = Math.floor(Math.random() * 10000); //цена
  return {
    id: productId,
    name: uniqueNamesGenerator(getConfigByCategory(category.name)), //на основе категории , получаем подходящее имя
    photo: `/images/roducts/${productId}.jpg`, //сылка на фото
    createdAt: createdAt,
    oldPrice: price < 4000 ? price * 1.3 : null, //иногда заполняем старую цену
    price: price,
    desc: ['1', '3', '5'].includes(category.id) ? uniqueNamesGenerator(getConfigByCategory('Description', ' | ')) : '', //иногда заполняем описание
    category: category,
  };
};

//создание операции
export const createRandomOperation = (createdAt: string): Operation => {
  const product = createRandomProduct(createdAt);
  return {
    id: getRandomId(),
    name: product.name,
    photo: product.photo,
    desc: product.desc,
    createdAt: createdAt,
    oldPrice: product.oldPrice,
    amount: product.price,
    category: product.category,
    type: product.price % 3 == 0 ? 'Cost' : 'Profit',
  };
};

//список категорий для выбора "случайной"
const categories: Category[] = [
  { id: '1', name: 'People' },
  { id: '2', name: 'Animals' },
  { id: '3', name: 'Country' },
  { id: '4', name: 'Other' },
  { id: '5', name: 'StarWars' },
];

//новый id(guid)
const getRandomId = () => {
  const random = new Random();
  return random.uuid4();
};

// возвращает случайный элемент из переданного списка
const getRandomElement = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

//формируем название или описание, в зависимости от категории (чтобы избежать абсолютной абракадабры)
export const getConfigByCategory = (name: string, separator: string = ' '): Config => {
  switch (name) {
    case 'People': {
      return { separator: separator, dictionaries: [colors, names] };
    }
    case 'Animals': {
      return { separator: separator, dictionaries: [colors, animals] };
    }
    case 'Country': {
      return { separator: separator, dictionaries: [countries] };
    }
    case 'StarWars': {
      return { separator: separator, dictionaries: [starWars] };
    }
    case 'Description': {
      return { separator: separator, dictionaries: [adjectives, colors, countries] };
    }
    default: {
      return { separator: separator, dictionaries: [adjectives, colors, names] };
    }
  }
};
