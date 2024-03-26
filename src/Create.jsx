import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState(''); 
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, task, description }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New Tasks To Do</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="task" className="form-label">Task</label> 
                        <input type="text" id="task" name='task' className='form-control' placeholder='Enter  task to do' onChange={e => setTask(e.target.value)} autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label> 
                        <input type="text" id="description" name='description' className='form-control' placeholder='Enter description to do' onChange={e => setDescription(e.target.value)} autoComplete="off" />
                    </div>
                    <br />
                    <button type="submit" className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
