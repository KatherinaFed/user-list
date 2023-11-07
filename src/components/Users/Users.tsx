import React from 'react';
import css from './Users.module.css';

import { useGetUsersQuery } from '../../service/usersServiceApi';
import User from '../User/User';

const Users = () => {
  const { data, isLoading, isFetching, isError } = useGetUsersQuery();

  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div className={css.users_container}>
      <ul>
        {data?.map((user) => {
          return (
            <li key={user.id} className={css.user_item}>
              <User id={user.id} name={user.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
