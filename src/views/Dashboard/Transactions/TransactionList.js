import React from 'react'
import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import {MoreVertical, Edit, Trash, Eye} from 'react-feather'
import {
    Table,
    Badge,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Row,
    Col,
    Button, Card, Breadcrumb, BreadcrumbItem
} from 'reactstrap'
import {Link} from "react-router-dom"

const avatarGroupData1 = [
    {
        title: 'Yoshi',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Kevyn',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Louis',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData2 = [
    {
        title: 'Aileen',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Karleigh',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Elmo',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData3 = [
    {
        title: 'Blossom',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Jescie',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Gemma',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData4 = [
    {
        title: 'Thor',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Jack',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Reece',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]
const TransactionList = () => {
    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Transaction list
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard/company'> Transaction list </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>

            <Row>
                <Col sm='12'>
                    <Table className='table-hover-animation' responsive>
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Company</th>
                            <th>Order</th>
                            <th>Method</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                52562151569
                            </td>
                            <td>
                                <img className='mr-75' src={angular} alt='angular' height='20' width='20' />
                                <span className='align-middle font-weight-bold'>Angular Project</span>
                            </td>
                            <td>order-JI4YZejh</td>
                            <td>
                                <Badge pill color='light-info' className='mr-1'>
                                    Payment
                                </Badge>
                            </td>
                            <td>
                                1000007
                            </td>
                            <td>
                                <Badge pill color='light-success' className='mr-1'>
                                    Success
                                </Badge>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                52562151569
                            </td>
                            <td>
                                <img className='mr-75' src={angular} alt='angular' height='20' width='20' />
                                <span className='align-middle font-weight-bold'>Angular Project</span>
                            </td>
                            <td>order-JI4YZejh</td>
                            <td>
                                <Badge pill color='light-info' className='mr-1'>
                                    Payment
                                </Badge>
                            </td>
                            <td>
                                1000007
                            </td>
                            <td>
                                <Badge pill color='light-success' className='mr-1'>
                                    Success
                                </Badge>
                            </td>
                        </tr>
                        
                        </tbody>
                    </Table>
                </Col>

            </Row>
        </div>
    )
}

export default TransactionList