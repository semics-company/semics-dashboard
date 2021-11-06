import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'


const LastStep = ({ stepper, type }) => {
    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Confirm data</h5>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>

                </Row>

                <div className='d-flex justify-content-between'>
                    <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                        <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                        <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                    </Button.Ripple>
                    <Button.Ripple color='success' className='btn-submit' onClick={() => alert('submitted')}>
                        Submit
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment>
    )
}

export default LastStep
