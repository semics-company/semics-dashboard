import React from 'react'
import WizardOrder from "./Wizard/steps/AddOrderWizard"
import {Breadcrumb, BreadcrumbItem, Card, Col, Row} from "reactstrap"
import {Link} from "react-router-dom"

const AddOrder = () => {
    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Add Order
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard/order'> Order </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> Add order </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>

            <WizardOrder/>
        </div>
    )
}

export default AddOrder