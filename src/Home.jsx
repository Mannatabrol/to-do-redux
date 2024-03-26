import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch(); // Add missing useDispatch

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }));
    };

    return (
        <div className='container'>
            <h2>To-Do App with Redux</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tasks</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.task}</td>
                            <td>{user.description}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
