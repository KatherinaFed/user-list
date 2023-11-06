import { render, screen } from '@testing-library/react';
import Users from './Users';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { useGetUsersQuery } from '../../service/usersServiceApi';
import { mockData, mockJsonSchema } from '../../__mocks__/mockData';

// mock API
jest.mock('../../service/usersServiceApi', () => {
  return {
    ...jest.requireActual('../../service/usersServiceApi'),
    useGetUsersQuery: () => ({
      data: mockData,
    }),
  };
});

describe('Users', () => {
  it('Should correctly extract and format names from the JSON data', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    const { data } = useGetUsersQuery();

    const hasNameKey = data?.map((user) => {
      return user.hasOwnProperty('name');
    });
    const extractedAndFormattedNames = data?.map((user) => {
      return user.name.toUpperCase();
    });

    data?.forEach((user) => {
      expect({ id: user.id, name: user.name }).toMatchSchema(mockJsonSchema);
    });
    expect(hasNameKey).toEqual([true, true]);
    expect(extractedAndFormattedNames).toEqual(['USER 1', 'USER 2']);
  });
});
