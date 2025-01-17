import './App.css'
import UserForm from './components/UserForm/UserForm.tsx';
import { User } from './types';
import { useState } from 'react';
import Users from './components/Users/Users.tsx';

const App = () => {

  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prevUser => [...prevUser, newUser]);
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
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  )
};

export default App
