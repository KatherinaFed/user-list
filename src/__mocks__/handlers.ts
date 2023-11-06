import { http, HttpResponse } from 'msw'
import { mockData } from './mockData';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(mockData)
  }),
];