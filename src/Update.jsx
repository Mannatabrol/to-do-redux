import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './UserReducer';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);

    // Convert id to a number
    const userId = parseInt(id);

    // Use lowercase 'filter' instead of 'Filter'
    const existingUser = users.find(user => user.id === userId);

    // Destructure the user object if it exists
    const { task, description } = existingUser || {};

    const [utask, setTask] = useState(task || '');
    const [udescription, setDescription] = useState(description || '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: userId, // Use userId instead of id
            task: utask,
            description: udescription,
        }));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update Task</h3>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="task" className="form-label">Task</label>
                        <input type="text" id="task" name='task' className='form-control' placeholder='Enter current to do' autoComplete="off" value={utask} onChange={e => setTask(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" id="description" name='description' className='form-control' placeholder='Enter updated to do' autoComplete="off" value={udescription} onChange={e => setDescription(e.target.value)} />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
