import * as React from 'react';
import { User } from '../../types';

interface Props {
user: User;
num: number;
}

const UserItem: React.FC<Props> = ({user, num}) => {

  const style = {
    marginLeft: '30px',
  }

  return (
    <tr>
      <th  scope="row">{num}</th>
      <td style={style}>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.active}</td>
    </tr>
  );
};

export default UserItem;