import React, {Fragment, useContext} from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardHeader, CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap"
import Select from "react-select"
import CompanyChart from "./Chart/Company chart"
import { ThemeColors } from '@src/utility/context/ThemeColors'
import '@styles/react/libs/charts/apex-charts.scss'
import {AreaChart} from "recharts"
import {useSkin} from "../../../utility/hooks/useSkin"
import CompanyChart2 from "./Chart/CompanyChart2"
import CompanyMap from "./Map/CompanyMap"
import '@styles/react/libs/maps/map-leaflet.scss'
import {Link} from "react-router-dom"
import Timeline from "../../../@core/components/timeline"

const CompanyDetail = () => {
    const context = useContext(ThemeColors)
    const { colors } = useContext(ThemeColors),
        [skin, setSkin] = useSkin(),
        labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
        tooltipShadow = 'rgba(0, 0, 0, 0.25)',
        gridLineColor = 'rgba(200, 200, 200, 0.2)',
        lineChartPrimary = '#666ee8',
        lineChartDanger = '#ff4961',
        warningColorShade = '#ffe802',
        warningLightColor = '#FDAC34',
        successColorShade = '#28dac6',
        primaryColorShade = '#836AF9',
        infoColorShade = '#299AFF',
        yellowColor = '#ffe800',
        greyColor = '#4F5D70',
        blueColor = '#2c9aff',
        blueLightColor = '#84D0FF',
        greyLightColor = '#EDF1F4'

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
                                    Company detail
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard/company'> Company </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> Company Detail </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xl={"9"}>
                    <Col xl='12'>
                        <Card className='invoice-preview-card mb-0'>
                            {/* Header */}
                            <CardBody className='invoice-padding pb-0'>
                                <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
                                    <Row>
                                        <Col className='mb-1 d-flex' xl='4' md='6' sm='12'>
                                            <h5>Name:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>
                                        <Col className='mb-1 d-flex' xl='4' md='6' sm='12'>
                                            <h5>Owner:</h5>
                                            <p className={"mr-1 ml-1"}>owner</p>
                                        </Col>
                                        <Col className='mb-1 d-flex' xl='4' md='6' sm='12'>
                                            <h5>Code:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>

                                        <Col className='mb-1 d-flex' xl='4' md='6' sm='12'>
                                            <h5>telephone:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>

                                        <Col className='mb-1 d-flex' xl='4' md='6' sm='12'>
                                            <h5>website:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>

                                        <Col className='mb-1 d-flex' xl='4' md='6' sm='12'>
                                            <h5>category:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>

                                        <Col className='mb-1 d-flex' xl='6' md='6' sm='12'>
                                            <h5>Address:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>

                                        <Col className='mb-1 d-flex' xl='6' md='6' sm='12'>
                                            <h5>Description:</h5>
                                            <p className={"mr-1 ml-1"}>mahdi</p>
                                        </Col>

                                    </Row>
                                </div>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col className={"mt-2"} xl='12'>
                        <CompanyChart primary={context.colors.primary.main}/>
                    </Col>
                    <Col sm='12'>

                        <CompanyChart2
                            labelColor={labelColor}
                            tooltipShadow={tooltipShadow}
                            gridLineColor={gridLineColor}
                            blueColor={blueColor}
                            blueLightColor={blueLightColor}
                            greyLightColor={greyLightColor}
                        />
                    </Col>
                    <Col sm='12'>
                        <CompanyMap/>
                    </Col>
                </Col>
                <Col xl={"3"}>
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

export default CompanyDetail