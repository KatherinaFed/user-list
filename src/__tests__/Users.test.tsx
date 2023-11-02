import { render, screen, waitFor } from '@testing-library/react';
import Users from '../components/Users/Users';
import { Provider } from 'react-redux';
import store from '../store/store';

describe(Users, () => {
  it(`User's names in uppercase`, async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Users />
      </Provider>
    );

    const mockNamesList = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch'];

    await mockNamesList.forEach((name) => {
      const nameUppercase = name.toUpperCase();
      waitFor(() => {
        expect(getByText(nameUppercase)).toBeInTheDocument();
      });
    });
  });
});
