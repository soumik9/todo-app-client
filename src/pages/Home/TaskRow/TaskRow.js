import React from 'react';

const TaskRow = ({ task, index }) => {

    const {name, description} = task;

    const handleTaskStatus = () => {
        
    }

    return (
        <tr className='align-middle'>
            <td>{ index + 1 }</td>
            <td>{ name }</td>
            <td>{ description }</td>
            <td>
                <button type='button' className='btn btn-outline-info completed-btn' onClick={handleTaskStatus}>Click to Completed</button>
            </td>
        </tr>
    );
};

export default TaskRow;