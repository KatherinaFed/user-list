import { render, renderHook, screen } from '@testing-library/react';
import Users from './Users';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { useGetUsersQuery } from '../../service/usersServiceApi';
import { mockData, mockJsonSchema } from '../../__mocks__/mockData';
import schema from '../../config/dataSchema.json';

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
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
  });

  it(`User names should be in uppercase`, () => {
    const userNames = screen.getAllByText(/user \d/i);

    userNames.forEach((user) => {
      expect(user.textContent).toMatch(/USER \d/);
      expect(user).toBeInTheDocument();
    });
  });

  it('API should return the correct data', () => {
    const expectedData = [{ name: 'User 1' }, { name: 'User 2' }];

    const { result } = renderHook(() => useGetUsersQuery());
    const { data } = result.current;

    data?.forEach(({ name }, index) => {
      expect(name).toEqual(expectedData[index].name);
    });
  });

  it('Should correctly extract and format names from the JSON data', () => {
    const { result } = renderHook(() => useGetUsersQuery());
    const { data } = result.current;

    const hasNameKey = data?.map((user) => {
      return user.hasOwnProperty('name');
    });
    const extractedAndFormattedNames = data?.map((user) => {
      return user.name.toUpperCase();
    });

    expect({ id: 1, name: 'John Doe' }).toMatchSchema(mockJsonSchema);
    expect(hasNameKey).toEqual([true, true]);
    expect(extractedAndFormattedNames).toEqual(['USER 1', 'USER 2']);
  });
});
