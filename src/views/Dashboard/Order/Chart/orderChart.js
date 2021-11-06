import { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Row,
    Col
} from 'reactstrap'
import Chart from 'react-apexcharts'

const SupportTracker = props => {
    const [data, setData] = useState(null)


    const options = {
            plotOptions: {
                radialBar: {
                    size: 150,
                    offsetY: 20,
                    startAngle: -150,
                    endAngle: 150,
                    hollow: {
                        size: '65%'
                    },
                    track: {
                        background: '#FFF',
                        strokeWidth: '100%'
                    },
                    dataLabels: {
                        name: {
                            offsetY: -5,
                            fontFamily: 'Montserrat',
                            fontSize: '1rem'
                        },
                        value: {
                            offsetY: 15,
                            fontFamily: 'Montserrat',
                            fontSize: '1.714rem'
                        }
                    }
                }
            },
            colors: [props.danger],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: [props.primary],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            stroke: {
                dashArray: 8
            },
            labels: ['Completed Tickets']
        },
        series = [83]

    return <Card>
            <CardHeader className='pb-0'>
                <CardTitle tag='h4'>Remaining watch</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col sm='12' className='d-flex justify-content-center align-items-center'>
                        <Chart options={options} series={series} type='radialBar' height={270} id='support-tracker-card' />
                    </Col>
                </Row>
                <div className='d-flex justify-content-between mt-1'>
                    <div className='text-center'>
                        <CardText className='mb-50'>New Tickets</CardText>
                        <span className='font-large-1 font-weight-bold'>85</span>
                    </div>
                    <div className='text-center'>
                        <CardText className='mb-50'>Open Tickets</CardText>
                        <span className='font-large-1 font-weight-bold'>18</span>
                    </div>
                    <div className='text-center'>
                        <CardText className='mb-50'>Response Time</CardText>
                        <span className='font-large-1 font-weight-bold'>83</span>
                    </div>
                </div>
            </CardBody>
        </Card>
}
export default SupportTracker
