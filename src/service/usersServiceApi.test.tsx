import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import Users from '../components/Users/Users';
import store from '../store/store';
import { handlers } from '../__mocks__/handlers';
import { mockData } from '../__mocks__/mockData';
import { useGetUsersQuery } from './usersServiceApi';

const server = setupServer(...handlers);
console.log(server)

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Users', () => {
  console.log(setupServer)
  it('API should return the correct data', async () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    const expectedResult = await useGetUsersQuery();

    expect(expectedResult).toEqual(mockData);
  });
});
