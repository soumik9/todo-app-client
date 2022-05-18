import React from 'react';
import toast from 'react-hot-toast';

const TaskRow = ({ task, index, refetch }) => {

    const { _id, name, description, status } = task;

    const handleTaskStatus = () => {
        const newStatus = 'completed';
        const updatedTask = { newStatus };

        //send to data base
        fetch(`https://todo-app-9.herokuapp.com/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                //authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                refetch();
                toast.success('Task Completed!', { duration: 2000, position: 'top-right' });
            } else {
                toast.error('Failed!', { duration: 2000, position: 'top-right' });
            }
        })
    }

    return (
        <tr className='align-middle'>
            <td>{index + 1}</td>
            <td>{status === 'active' ? name : <s>name</s>}</td>
            <td>{status === 'active' ? description : <s>description</s>}</td>
            <td>
                {
                    status === 'active' ? <button type='button' className='btn btn-outline-info completed-btn' onClick={handleTaskStatus}>Click to Completed</button> : <button type='button' className='btn btn-outline-secondary completed-btn' disabled>Completed</button>
                }
            </td>
        </tr>
    );
};

export default TaskRow;