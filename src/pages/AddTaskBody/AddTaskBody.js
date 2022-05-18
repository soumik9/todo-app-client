import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { RiLoginCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const AddTaskBody = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [user] = useAuthState(auth);

    const handleAddTask = data => {
        console.log(data);
    }

    return (
        <section className="tasks my-50">
            <Container>
                <Row>
                    <Col md={12}>
                        <Card body>

                            <div className="task__header px-3">
                                <Row className='justify-content-between align-items-center'>
                                    <Col md={2}>
                                        <h2 className='task-title'>Add Task</h2>
                                    </Col>
                                    <Col md={2}>
                                        <div className="text-end">
                                            <Link to='/' className='btn btn-task'>View Tasks</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <hr />

                            <div className="task__body mt-5 card p-4">
                                <form onSubmit={handleSubmit(handleAddTask)}>

                                    <input type="hidden" {...register('status')} value='active'  />

                                    <div>
                                        <Form.Label htmlFor="email" className='ps-1'>Email</Form.Label>
                                        <Form.Control type="text" readOnly {...register('email')} value={user.email} />
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="name" className='ps-1'>Task Name</Form.Label>
                                        <Form.Control type="text" {...register('name', { required: true })} placeholder='Your Task Name' />
                                        {errors.name && <p className='p-0 text-danger text-center'>Task name is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="description" className='ps-1'>Task Description</Form.Label>
                                        <Form.Control as="textarea" type="text" {...register('description', { required: true })} placeholder='Your Task Description' />
                                        {errors.description && <p className='p-0 text-danger text-center'>Task description is required.</p>}
                                    </div>

                                    <button className='btn btn-task w-100 mt-5' type="submit">
                                        Add Task
                                        <RiLoginCircleLine className='form__btn-icon' />
                                    </button>
                                </form>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddTaskBody;