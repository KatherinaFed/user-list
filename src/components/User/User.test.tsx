import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

describe('User', () => {
  it(`User names should be in uppercase`, () => {
    render(<User id={1} name="John Doe" />);

    const userName = screen.getByText(/John Doe/);
    expect(userName).toHaveStyle({ textTransform: 'uppercase' });
  });
});
