import React from 'react';
import css from './User.module.css';
import { IUser } from '../../types/type';

const User = (data: IUser) => {
  return (
    <li
      className={css.user_item}
      style={{ textTransform: 'uppercase' }}
      key={data.id}
    >
      {data.name}
    </li>
  );
};

export default User;
