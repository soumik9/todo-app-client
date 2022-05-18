import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import TaskRow from '../TaskRow/TaskRow';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const Tasks = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const navigate = useNavigate();

    const url = `https://todo-app-9.herokuapp.com/tasks?email=${email}`

    const { data: tasks, isLoading, refetch } = useQuery('tasks', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
            if(res.status === 403 || res.status === 401){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/login');
                toast.success('Forbidden !', { duration: 2000, position: 'top-right' });
            }
            return res.json()
        }  
    ));

    if (isLoading) { return <Loading /> }

    return (
        <section className="tasks my-50">
            <Container>
                <Row>
                    <Col md={12}>
                        <Card body>

                            <div className="task__header px-3">
                                <Row className='justify-content-between align-items-center'>
                                    <Col md={2}>
                                        <h2 className='task-title'>All Tasks</h2>
                                    </Col>
                                    <Col md={2}>
                                        <div className="text-end">
                                            <Link to='/add-task' className='btn btn-task'>Add Task</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <hr />

                            <div className="task__body mt-5 card p-4">
                                {
                                    tasks.length === 0 ? <p className='text-center'>You have no task <Link to='add-task'>Please Add</Link></p> 
                                    : (
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Completed!</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tasks.map((task, index) => <TaskRow
                                                        key={task._id}
                                                        index={index}
                                                        task={task}
                                                        refetch={refetch}
                                                    />)
                                                }
                                            </tbody>
                                        </Table>
                                    )
                                }

                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tasks;