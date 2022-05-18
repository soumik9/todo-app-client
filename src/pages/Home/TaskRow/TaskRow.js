import React from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import axios from 'axios';

const TaskRow = ({ task, index, refetch }) => {

    const { _id, name, description, status } = task;

    const handleTaskStatus = (taskId) => {
        const newStatus = 'completed';
        const updatedTask = { newStatus };

        //send to data base
        fetch(`https://todo-app-9.herokuapp.com/task/${taskId}`, {
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

    const handleTaskDelete = (taskId) => {
        //send to data base
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://todo-app-9.herokuapp.com/task/${taskId}`)
                .then(response => {
                        refetch();
                        swal("Product has been deleted!", {
                            icon: "success",
                        });
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    return (
        <tr className='align-middle'>
            <td>{index + 1}</td>
            <td>{status === 'active' ? name : <s>{name}</s>}</td>
            <td>{status === 'active' ? description : <s>{description}</s>}</td>
            <td>
                {
                    status === 'active' ? <button type='button' className='btn btn-outline-info completed-btn' onClick={() => handleTaskStatus(_id)}>Click to Completed</button> : <button type='button' className='btn btn-outline-secondary completed-btn' disabled>Completed</button>
                }
            </td>
            <td>
                {
                    <button type='button' className='btn btn-outline-danger' onClick={() => handleTaskDelete(_id)}>Delete</button>
                }
            </td>
        </tr>
    );
};

export default TaskRow;