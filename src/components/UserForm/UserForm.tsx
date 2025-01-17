import { User, UserMutation } from '../../types';
import { useState } from 'react';

interface Props {
  onSubmitFormToAddUser: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmitFormToAddUser}) => {
  const initialFormState: UserMutation = {
    name: '',
    email: '',
    active: false,
    role: 'User',
  };

  const [form, setForm] = useState<UserMutation>(initialFormState);

  const changeActive = () => {
    setForm(prevForm => ({...prevForm, active: !form.active}));
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {value, name} = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitFormToAddUser({id: String(new Date().toISOString()), ...form});
    console.log(form);
    setForm(initialFormState)
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>User form</h4>
      <hr/>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={form.name}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="active">Active</label>
        <input
          type="checkbox"
          id="active"
          checked={form.active}
          onChange={changeActive}
        />
      </div>

      <div className="form-group">
        <select name="role"
                value={form.role}
                onChange={inputChangeHandler}>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-4">Add</button>
    </form>
  );
};


export default UserForm;



