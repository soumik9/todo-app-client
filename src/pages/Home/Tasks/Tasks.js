import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './task.css'

const Tasks = () => {
    return (
        <section className="tasks my-50">
            <Container>
                <Row>
                    <Col md={12}>
                        <Card body>

                            <div className="task__header px-3">
                                <Row className='justify-content-between align-items-center'>
                                    <Col md={2}>
                                        <h2 className='task__title'>All Tasks</h2>
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
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
  
                                    </tbody>
                                </Table>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Tasks;