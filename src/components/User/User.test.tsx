import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('User', () => {
  it(`User names should be in uppercase`, () => {
    render(
      <Provider store={store}>
        <User {...{ id: 1, name: 'John Doe' }} />
      </Provider>
    );

    const userName = screen.getByText(/John Doe/);
    expect(userName).toHaveStyle({ textTransform: 'uppercase' })
  });
});
