import React from 'react';
import { IUser } from '../../types/type';

const User = (data: IUser) => {
  return (
    <div
      key={data.id}
      style={{ textTransform: 'uppercase' }}
    >
      {data.name}
    </div>
  );
};

export default User;
