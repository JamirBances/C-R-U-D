import React, { useEffect, useState } from 'react';

const UsersForm = ({ addUser, userSelected, updateUser }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setFirstName(userSelected?.first_name);
      setLastName(userSelected?.last_name);
      setEmail(userSelected?.email);
      setPassword(userSelected?.password);
      setDate(userSelected?.birthday);
    }
  }, [userSelected])

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: date 
    };
    if (userSelected !== null) {
      updateUser(newUser);
    } else {
      addUser(newUser);
    }
    reset();
    /* console.log(email + firstName + lastName + password + date) */
  }

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setDate("");
  };

  return (
    <form onSubmit={submit}>
      <div className='user-form'>
        <div className="user-form-container">
          <h1>New User</h1>
          <div className="user-form-full-name">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder='first name' onChange={e => setFirstName(e.target.value)} value={firstName}/>
            <input type="text" placeholder='last name' onChange={e => setLastName(e.target.value)} value={lastName}/>
          </div>
          <div className="user-form-email">
            <i className="fa-solid fa-envelope"></i>
            <input type="text" placeholder='email' onChange={e => setEmail(e.target.value)} value={email} />
          </div>
          <div className="user-form-password">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
          </div>
          <div className="user-form-birthday">
            <i className="fa-solid fa-cake-candles"></i>
            <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
          </div>
        </div>
        <div className='button-upload'>
          <button>Upload</button>
        </div>
      </div>
    </form>
  );
};

export default UsersForm;