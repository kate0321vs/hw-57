import * as React from 'react';
import { User } from '../../types';

interface Props {
user: User;
num: number;
}

const UserItem: React.FC<Props> = ({user, num}) => {

  let activeStatus = '';
  if (user.active) {
    activeStatus = 'Active';
  } else {
    activeStatus = 'No Active';
  }

  return (
    <tr>
      <th scope="row">{num}</th>
      <td >{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{activeStatus}</td>
    </tr>
  );
};

export default UserItem;