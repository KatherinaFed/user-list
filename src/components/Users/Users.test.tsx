import { render, renderHook, screen, waitFor } from '@testing-library/react';
import Users from './Users';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { useGetUsersQuery } from '../../service/usersServiceApi';

// mock API
jest.mock('../../service/UsersService', () => {
  return {
    ...jest.requireActual('../../service/UsersService'),
    useGetUsersQuery: () => ({
      data: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
      ],
    }),
  };
});

describe('Users', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
  });

  it(`User's names should be in uppercase`, async () => {
    const { result } = renderHook(() => useGetUsersQuery());

    await waitFor(() => {
      result.current.data?.forEach(({ name }) => {
        const nameUppercase = name.toUpperCase();
        expect(screen.getByText(nameUppercase)).toBeInTheDocument();
      });
    });
  });

  it('API should return the correct data', () => {
    const mockData = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ];

    const { result } = renderHook(() => useGetUsersQuery());

    expect(result.current.data).toEqual(mockData);
  });

  it('Should correctly extracts and formats the name from the JSON data', async () => {
    const { result } = renderHook(() => useGetUsersQuery());
    console.log(result.current);
  });
});
