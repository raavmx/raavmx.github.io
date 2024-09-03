import type { Meta } from '@storybook/react';
import { ProductForm } from './ProductForm';

const meta: Meta<typeof ProductForm> = {
  title: 'features/ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {};
