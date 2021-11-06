import React from 'react'
import TableBasic from "./Table/OrderTable"
import {Breadcrumb, BreadcrumbItem, Card, Col, Pagination, PaginationItem, PaginationLink, Row} from "reactstrap"
import {Link} from "react-router-dom"

const Order = () => {

    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Order List
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> order </Link>
                                    </BreadcrumbItem>

                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>

            <TableBasic/>
            <Row className={'d-flex justify-content-center align-items-center'}>
                <Pagination className='d-flex mt-3'>
                    <PaginationItem className='prev-item'>
                        <PaginationLink href='#'></PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href='#'>4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>6</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>7</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='next-item'>
                        <PaginationLink href='#'></PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Row>
        </div>
    )
}

export default Order