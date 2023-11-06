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
    const { data } = useGetUsersQuery();

    data?.forEach(({ name }, index) => {
      expect(name).toEqual(expectedData[index].name);
    });
  });

  it('Should correctly extract and format names from the JSON data', () => {
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

  it('Should show an invalidate JSON schema error', () => {
    const { data } = useGetUsersQuery();

    data?.forEach((user) => {
      const expectedJsonObject = { id: user.id, fullname: user.name };

      expect(expectedJsonObject).not.toMatchSchema(mockJsonSchema);
    });
  });
});
