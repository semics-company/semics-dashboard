import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'

import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import {Link} from "react-router-dom"

const avatarGroupData1 = [
    {
        title: 'Lilian',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Alberto',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Bruce',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData2 = [
    {
        title: 'Diana',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Rey',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'James',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData3 = [
    {
        title: 'Lee',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Mario',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Oswald',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData4 = [
    {
        title: 'Christie',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Barnes',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Arthur',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const TableBasic = () => {
    return (
        <Table responsive>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Area</th>
                <th>kind</th>
                <th>Total</th>
                <th>Paid status</th>
                <th className={"text-center"}>Actions</th>
                <th className={"text-center"}>Detail</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <td>
                    <span className='align-middle font-weight-bold'>order-JI4YZejh</span>
                </td>
                <td>
                    <span className='align-middle font-weight-bold'>Angular Project</span>
                </td>
                <td>Peter Charles</td>
                <td>
                    Image
                </td>
                <td>
                    1000007.0
                </td>
                <td>
                    <Badge pill color='light-danger' className='mr-1'>
                        Not completed
                    </Badge>
                </td>
                <td>
                    <Button.Ripple color='flat-info'>Pay</Button.Ripple>
                </td>
                <td>
                    <Link to={"/dashboard/order/555"}>
                        <Button.Ripple color='flat-primary'>Detail</Button.Ripple>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <span className='align-middle font-weight-bold'>order-JI4YZejh</span>
                </td>
                <td>
                    <span className='align-middle font-weight-bold'>React Project</span>
                </td>
                <td>Ronald Frest</td>
                <td>
                    Video
                </td>
                <td>
                    1000007.0
                </td>
                <td>
                    <Badge pill color='light-success' className='mr-1'>
                        Completed
                    </Badge>
                </td>
                <td>
                    <Button.Ripple color='flat-info'>Pay</Button.Ripple>

                </td>
                <td>
                    <Link to={"/dashboard/order/555"}>
                        <Button.Ripple color='flat-primary'>Detail</Button.Ripple>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <span className='align-middle font-weight-bold'>order-JI4YZejh</span>
                </td>
                <td>
                    <span className='align-middle font-weight-bold'>Vuejs Project</span>
                </td>
                <td>Jack Obes</td>
                <td>
                    Image
                </td>
                <td>
                    1000007.0
                </td>
                <td>
                    <Badge pill color='light-success' className='mr-1'>
                        Completed
                    </Badge>
                </td>
                <td>
                    <Button.Ripple color='flat-info'>Pay</Button.Ripple>

                </td>
                <td>
                    <Link to={"/dashboard/order/555"}>
                        <Button.Ripple color='flat-primary'>Detail</Button.Ripple>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>
                    <span className='align-middle font-weight-bold'>order-JI4YZejh</span>
                </td>
                <td>
                    <span className='align-middle font-weight-bold'>Bootstrap Project</span>
                </td>
                <td>Jerry Milton</td>
                <td>
                    Image
                </td>
                <td>
                    1000007.0
                </td>
                <td>
                    <Badge pill color='light-success' className='mr-1'>
                        Completed
                    </Badge>
                </td>
                <td>
                    <Button.Ripple color='flat-info'>Pay</Button.Ripple>

                </td>
                <td>
                    <Link to={"/dashboard/order/555"}>
                        <Button.Ripple color='flat-primary'>Detail</Button.Ripple>
                    </Link>
                </td>
            </tr>
            </tbody>
        </Table>
    )
}

export default TableBasic
