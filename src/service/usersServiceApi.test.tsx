import React, { ReactNode } from 'react';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import Users from '../components/Users/Users';
import store from '../store/store';
import { mockData } from '../__mocks__/mockData';
import { useGetUsersQuery } from './usersServiceApi';

function wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('usersServiceApi', () => {
  it('API should return the correct data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const { result } = renderHook(() => useGetUsersQuery(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toBeCalledTimes(1);

    expect(result.current.data).toEqual(mockData);
  });
});
