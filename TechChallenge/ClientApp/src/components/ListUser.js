import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const res = await fetch('user');
        const data = await res.json();
        setUsers(data);
    }

    const renderUsersTable = (users) => {
        return (
            <div>
                <Link to="/usersadd">
                    <button className="btn btn-primary">Novo Usuario</button>
                </Link>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>AvatarUrl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user.Id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.avatarUrl}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);

    return (
      <div>
        <h1 id="tabelLabel">Listagem de Usuarios</h1>
            {
                loading ? (<p><em>Loading...</em></p>) : (renderUsersTable(users))
            }
      </div>
    );

    

}

export default ListUser;