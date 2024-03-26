import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [task, setTask] = useState(''); // Changed 'name' to 'task'
    const [description, setDescription] = useState(''); // Changed 'email' to 'description'
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, task, description })); // Changed 'name' to 'task' and 'email' to 'description'
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New Tasks To Do</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="task" className="form-label">Task</label> {/* Changed 'name' to 'task' */}
                        <input type="text" id="task" name='task' className='form-control' placeholder='Enter current to do' onChange={e => setTask(e.target.value)} autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label> {/* Changed 'email' to 'description' */}
                        <input type="text" id="description" name='description' className='form-control' placeholder='Enter updated to do' onChange={e => setDescription(e.target.value)} autoComplete="off" />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
