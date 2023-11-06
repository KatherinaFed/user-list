import React from 'react';
import css from './Users.module.css';

import { useGetUsersQuery } from '../../service/usersServiceApi';
import { isFetchBaseQueryErrorType } from '../../types/type';

const Users = () => {
  const { data, isLoading, isFetching, isError, error } = useGetUsersQuery();

  if (isLoading && isFetching) {
    return <h3>Loading...</h3>;
  }
  
  if (isError && isFetchBaseQueryErrorType(error)) {
    return <h3>{error.status}</h3>;
  }

  return (
    <div className={css.users_container}>
      {data?.map((user) => {
        const bgColor = user.id % 2 === 0 ? css.user_gray_background : '';

        return (
          <div className={bgColor} key={user.id}>
            {user.name.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
