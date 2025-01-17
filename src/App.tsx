import './App.css'
import UserForm from './components/UserForm/UserForm.tsx';
import { User } from './types';
import { useState } from 'react';
import UserItem from './components/UserItem/UserItem.tsx';

const App = () => {

  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prevUser => [newUser, ...prevUser]);
    console.log(users)
  }

  return (
    <>
      <header className="mb-5">

      </header>
      <main className="container">
        <div className="row">
          <div className="col-6">
            <UserForm onSubmitFormToAddUser={addUser}/>
          </div>
          <div className="col-6">
            <h4>Users</h4>
            <hr/>
            {users.length === 0 ? <p>No Added Users</p> :
              <>
                <table className="table table-striped">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
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
          </div>
        </div>
      </main>
    </>
  )
};

export default App
