import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data));
  }, []);

  console.log(usersList);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data));
  };

  const addUser = (newUser) => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(() => getUsers())
      .catch((error) => console.log(error.response?.data));
  };

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const updateUser = (editedUser) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, editedUser)
      .then(() => getUsers())
      .catch((error) => console.log(error.response?.data));
    setUserSelected(null);
  };

  return (
    <div className="App">
      <div className='users-form-app'>
        <UsersForm
          addUser={addUser}
          selectUser={selectUser}
          userSelected={userSelected}
          updateUser={updateUser}
        />
      </div>
      <div className='users-list-app'>
        <UsersList 
          usersList={usersList}
          deleteUser={deleteUser}
          selectUser={selectUser}
        />
      </div>
    </div>
  )
}

export default App
