import React, {useContext} from 'react'
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap"
import {Link} from "react-router-dom"
import Timeline from "../../../@core/components/timeline"
import SupportTracker from "./Chart/orderChart"

const OrderDetail = () => {

    const basicData = [
        {
            title: 'First step',
            content: 'At first you should add your company in company tab ',
            color: 'success'
        },
        {
            title: 'Second step',
            content: 'After add company you should add Order from order tab'
        },
        {
            title: 'Third step',
            content: 'At last you can finalize your advert from advert tab, we will show your advert after finish this part!'
        }
    ]


    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Order Detail
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard/order'> Order </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> Order Detail</Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>

            <Row className='invoice-preview'>
                <Col xl={9} md={8} sm={12}>
                    <Row>
                        <Col lg='12' sm='6'>
                            <Card className='invoice-preview-card'>
                                <CardBody className='invoice-padding pb-0'>
                                    {/* Header */}
                                    <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
                                        <div style={{width:"100%"}} className='mt-md-0 mt-2'>
                                            <h4 className="mb-2">
                                                Order detail
                                            </h4>
                                            <div style={{width:"100%"}} className={"d-flex"}>
                                                <div style={{width:"50%"}}>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Watch count:</p>
                                                        <p className='invoice-date'>this is Company</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Active At:</p>
                                                        <p className='invoice-date'>2000/10/24</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Expire At:</p>
                                                        <p className='invoice-date'>2000/10/24</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Total:</p>
                                                        <p className='invoice-date'>494165</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Is paid:</p>
                                                        <p className='invoice-date'>Paid</p>
                                                    </div>
                                                </div>
                                                <div style={{width:"50%"}}>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Id:</p>
                                                        <p className='invoice-date'>order-JI4YZejh</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>kind:</p>
                                                        <p className='invoice-date'>Watch count</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Company:</p>
                                                        <p className='invoice-date'>this is Category</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Advert:</p>
                                                        <p className='invoice-date'>this is Company</p>
                                                    </div>
                                                    <div className='invoice-date-wrapper'>
                                                        <p className='invoice-date-title'>Area:</p>
                                                        <p className='invoice-date'>this is Company</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Header */}
                                </CardBody>

                            </Card>
                        </Col>
                        <Col lg='12' sm='6'>
                            <Card className='invoice-preview-card'>
                                <SupportTracker primary={"#8d62cd"} danger={"#e75458"} />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3} md={4} sm={12}>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Steps</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Timeline data={basicData} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default OrderDetail