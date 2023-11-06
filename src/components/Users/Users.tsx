import React from 'react';
import css from './Users.module.css';
import _ from 'lodash';

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
          return <User key={_.uniqueId()} id={user.id} name={user.name} />;
        })}
      </ul>
    </div>
  );
};

export default Users;
