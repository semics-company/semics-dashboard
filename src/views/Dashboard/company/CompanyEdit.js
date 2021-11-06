import React from 'react'
import {Breadcrumb, BreadcrumbItem, Card, Col, Row} from "reactstrap"
import EditCard from "./Forms/EditForms/EditCard"
import EditActions from "./Forms/EditForms/EditActions"
import {Link} from "react-router-dom"


const CompanyEdit = () => {


    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Edit Company
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard/company'> Company </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> Company Edit </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>
            <Row className='invoice-add'>
                <Col xl={9} md={8} sm={12}>
                    <EditCard />
                </Col>
                <Col xl={3} md={4} sm={12}>
                    <EditActions />
                </Col>
            </Row>
        </div>
    )
}

export default CompanyEdit