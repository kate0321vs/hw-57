import UserItem from './UserItem/UserItem.tsx';
import { User } from '../../types';
import * as React from 'react';

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      <h4>Users</h4>
      <hr/>
      {users.length === 0 ? <p>No Added Users</p> :
        <>
          <table className="table table-striped">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Active</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
              <UserItem user={user} num={index + 1}/>
            ))}
            </tbody>
          </table>
        </>}
    </>
  );
};

export default Users;