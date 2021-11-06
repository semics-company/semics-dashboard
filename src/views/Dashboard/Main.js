import React, {Fragment, useContext} from 'react'
import {Breadcrumb, BreadcrumbItem, Card, CardText, Col, Row} from "reactstrap"
import StatsHorizontal from "../../@core/components/widgets/stats/StatsHorizontal"
import {Activity, AlertOctagon, Cpu, Server} from "react-feather"
import Breadcrumbs from '../../@core/components/breadcrumbs'
import ChartjsPolarAreaChart from "./Charts/MainPagePolarChart"
import {ThemeColors} from "../../utility/context/ThemeColors"
import {useSkin} from "../../utility/hooks/useSkin"
import LineChart from "./Charts/LineChart"
import MapTooltip from "./map/MapFirstPage"
import {Link} from "react-router-dom"

const Main = () => {
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
    return (
        <div style={{margin:"28px"}}>
            <Row>
                <Col sm='12'>
                    <section id='breadcrumb-alignment'>
                        <Card title='Alignment'>
                            <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                                <h4 style={{marginTop:"5px"}}>
                                    Dashboard
                                </h4>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <Link to='/dashboard'> Dashbaord </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <Link to='#'> Home </Link>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </Card>
                    </section>
                </Col>
            </Row>
            <Row>
                {/* Stats With Icons Horizontal */}
                <Col lg='3' sm='6'>
                    <StatsHorizontal icon={<Cpu size={21} />} color='primary' stats='86%' statTitle='Orders' />
                </Col>
                <Col lg='3' sm='6'>
                    <StatsHorizontal icon={<Server size={21} />} color='success' stats='1.2gb' statTitle='Payments' />
                </Col>
                <Col lg='3' sm='6'>
                    <StatsHorizontal icon={<Activity size={21} />} color='danger' stats='0.1%' statTitle='Ads' />
                </Col>
                <Col lg='3' sm='6'>
                    <StatsHorizontal icon={<AlertOctagon size={21} />} color='warning' stats='13' statTitle='Visits' />
                </Col>
                {/* Stats With Icons Horizontal */}
            </Row>
            <Row className='match-height'>
                <Col lg='6' sm='12'>
                    <ChartjsPolarAreaChart
                        primary={colors.primary.main}
                        labelColor={labelColor}
                        primaryColorShade={primaryColorShade}
                        warningColorShade={warningColorShade}
                        infoColorShade={infoColorShade}
                        greyColor={greyColor}
                        successColorShade={successColorShade}
                        tooltipShadow={tooltipShadow}
                    />
                </Col>
                <Col lg='6' sm='12'>
                    <LineChart
                        warningColorShade={warningColorShade}
                        lineChartDanger={lineChartDanger}
                        lineChartPrimary={lineChartPrimary}
                        labelColor={labelColor}
                        tooltipShadow={tooltipShadow}
                        gridLineColor={gridLineColor}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm='12'>
                    <MapTooltip />
                </Col>
            </Row>
        </div>
    )
}
export default Main