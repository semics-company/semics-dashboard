import React from 'react'
import WizardVertical from "./Wizard/steps/AddAdvertWizard"
import {Breadcrumb, BreadcrumbItem, Card, Col, Row} from "reactstrap"
import {Link} from "react-router-dom"

const AddAdvert = () => {
    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Add Advert
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard/advert'> Advert </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> Add Advert </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>
            <WizardVertical/>
        </div>
    )
}

export default AddAdvert