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
                    <tbody>
                        {users.map(user =>
                            <tr key={user.Id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={user.avatarUrl} alt="Avatar" className="avatar-img mr-3" />
                                        <div>
                                            <h5>{user.name}</h5>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                </td>
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