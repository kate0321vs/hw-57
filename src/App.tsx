import './App.css'
import UserForm from './components/UserForm/UserForm.tsx';
import { User } from './types';
import { useState } from 'react';

const App = () => {

  const [user, setUser] = useState<User[]>([])

  const addUser = (newUser: User) => {
    setUser(prevUser => [newUser, ...prevUser]);
    console.log(user)
  }

  return (
    <>
      <header className="mb-5">

      </header>
      <main className="container">
        <div className="row">
          <div className="col-4">
            <UserForm onSubmitFormToAddUser={addUser}/>
          </div>
          <div className="col-4">
            Users
          </div>
        </div>
      </main>
    </>
  )
};

export default App
