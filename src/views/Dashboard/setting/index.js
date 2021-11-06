import React, { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import GeneralTabContent from './GeneralTabContent'
import PasswordTabContent from './PasswordTabContent'
import NotificationsTabContent from './NotificationsTabContent'
import {Row, Col, TabContent, TabPane, Card, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
import {Link} from "react-router-dom"

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('1')
  const toggleTab = tab => {
    setActiveTab(tab)
  }

  return (
    <div style={{margin:"28px"}}>
      <Row>
        <Col sm='12'>
          <section id='breadcrumb-alignment'>
            <Card title='Alignment'>
              <div style={{paddingLeft:"20px"}} className='d-flex justify-content-start breadcrumb-wrapper align-items-center'>
                <h4 style={{marginTop:"5px"}}>
                  Setting
                </h4>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to='/dashboard'> Dashbaord </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link to='#'> Setting </Link>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Card>
          </section>
        </Col>
      </Row>
        <Row>
          <Col className='mb-2 mb-md-0' md='3'>
            <Tabs activeTab={activeTab} toggleTab={toggleTab} />
          </Col>
          <Col md='9'>
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <GeneralTabContent />
                  </TabPane>
                  <TabPane tabId='2'>
                    <PasswordTabContent />
                  </TabPane>
                  <TabPane tabId='5'>
                    <NotificationsTabContent/>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default AccountSettings
