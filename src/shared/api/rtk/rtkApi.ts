import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVER_URL } from 'src/app/constants/api';
import { getToken } from '../getToken';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      console.log('rktApi', token);
      if (token)
        headers.set('Authorization', token);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['Category', 'Product', 'Profile', 'Cart'],
});
