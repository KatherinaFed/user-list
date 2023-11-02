import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers } from '../types/type';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUsers[], number>({
      query: (limit) => ({
        url: '/users',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
