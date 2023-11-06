import React from 'react';
import css from './User.module.css';
import { IUser } from '../../types/type';

const User = (data: IUser) => {
  return (
    <li
      key={data.id}
      className={css.user_item}
      style={{ textTransform: 'uppercase' }}
    >
      {data.name}
    </li>
  );
};

export default User;
