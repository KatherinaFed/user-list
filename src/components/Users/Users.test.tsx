import { render, renderHook, screen, waitFor } from '@testing-library/react';
import Users from './Users';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { useGetUsersQuery } from '../../service/UsersService';

// mock API
jest.mock('../../service/UsersService', () => {
  return {
    ...jest.requireActual('../../service/UsersService'),
    useGetUsersQuery: () => ({
      data: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
      ],
      isLoading: false,
      error: null,
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
    const mockNamesList = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch'];

    await mockNamesList.forEach((name) => {
      const nameUppercase = name.toUpperCase();
      waitFor(() => {
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
    console.log(result.current.data);

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  // it('Should correctly extracts and formats the name from the JSON data', () => {});
});
