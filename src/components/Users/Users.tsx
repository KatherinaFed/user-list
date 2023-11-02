import React from 'react';
import css from './Users.module.css';

import { useGetUsersQuery } from '../../service/UsersService';

const Users = () => {
  const { data } = useGetUsersQuery(8);

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
