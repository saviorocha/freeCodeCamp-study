import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async function () {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users) // quando usamos o setUsers nós renderizamos novamente o componente, o que roda o useEffect
  }

  useEffect(() => {
    getUsers()
  }, []); // por isso, é essencial passar o array para que o useEffect rode apenas uma vez, se não teremos um loop infinito e o browser irá crashar


  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {
          users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
