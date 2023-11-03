import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers } from '../types/type';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUsers[], void>({
      query: () => ({
        url: '/users',
        params: {
          _limit: 8,
        },
      }),
      transformResponse: (res: IUsers[]): IUsers[] => {
        return res.map((user) => ({
          id: user.id,
          name: user.name,
        }));
      },
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;