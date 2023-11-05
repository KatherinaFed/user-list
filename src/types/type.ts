import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface IUsers {
  id: number;
  name: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const isFetchBaseQueryErrorType = (
  error: any
): error is FetchBaseQueryError => 'status' in error;
