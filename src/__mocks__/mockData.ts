import { IUsers } from '../types/type';

export const mockData: IUsers[] = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
];

export const mockJsonSchema = {
  $id: 'dataSchema.json',
  title: 'User',
  description: 'User data',
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: "The users's an indentifier.",
    },
    name: {
      type: 'string',
      description: "The user's a full name",
    },
  },
  required: ['id', 'name'],
};