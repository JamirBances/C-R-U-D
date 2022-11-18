import React from 'react';

const UsersList = ({ usersList, deleteUser, selectUser }) => {
  return (
    <div className='users-list'>
      <div >
      {usersList.map((user) => (
        <div className="users-list-container" key={user.id}>
          <div className="users-list-details">
            <div>
              <p>{`${user.first_name} ${user.last_name}`}</p>
              <span>{user.email}</span>
              <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
            </div>
          </div>
          <div className="users-list-icons">
            <button 
              onClick={() => deleteUser(user.id)} className='button-trash'>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button 
              onClick={() => selectUser(user)} className='button-edit'>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        </div>
      ))} 
      </div>
    </div>
  );
};

export default UsersList;