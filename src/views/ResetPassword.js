import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'
import InputPassword from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const ResetPassword = () => {
    const [skin, setSkin] = useSkin()

    const illustration = skin === 'dark' ? 'reset-password-v2-dark.svg' : 'reset-password-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default

    return (
        <div className='auth-wrapper auth-v2'>
            <Row className='auth-inner m-0'>
                <Link className='brand-logo justify-content-center align-items-center' to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40.108" viewBox="0 0 82.43 100.108"><path d="M143.15,69.831a34.546,34.546,0,0,1,23.294,9l4.632-4.586a41.16,41.16,0,0,0-55.863,0l4.643,4.586A34.546,34.546,0,0,1,143.15,69.831Z" transform="translate(-101.93 -63.319)" fill="#4e259d"/><path d="M118.034,145.2l-4.654,4.609a34.666,34.666,0,0,1-1.484,44.188l-.023.023c-.747.838-1.54,1.653-2.469,2.514l-23.487,24.03L62.2,196.327c-.77-.725-1.506-1.472-2.163-2.208l-.1-.125a34.629,34.629,0,0,1-1.484-44.188L53.79,145.2a41.148,41.148,0,0,0,1.257,53.089l.113.136c.793.895,1.676,1.789,2.491,2.559l28.266,28.9L113.946,201.2q1.461-1.359,2.82-2.888a41.162,41.162,0,0,0,1.268-53.111Z" transform="translate(-44.697 -129.773)" fill="#242a31"/><path d="M107.745,208.433a29.278,29.278,0,0,0,7.371,19.436l.076.087c.575.64,1.192,1.29,1.756,1.8l20.141,20.6,19.957-20.412c.683-.64,1.355-1.333,2.005-2.06a29.31,29.31,0,0,0,1.5-37.04l-4.455,4.4a23.12,23.12,0,0,1-1.68,28.542l-.011.011c-.5.564-1.03,1.106-1.68,1.713l-15.631,16-15.815-16.173c-.52-.477-1.008-.986-1.431-1.453l-.087-.1a23.119,23.119,0,0,1-1.68-28.542l-4.444-4.4A29.133,29.133,0,0,0,107.745,208.433Z" transform="translate(-95.868 -166.818)" fill="#242a31"/><path d="M179.59,128.52a29.163,29.163,0,0,0-19.479,7.414l4.412,4.358a23.111,23.111,0,0,1,30.124,0l4.412-4.368A29.221,29.221,0,0,0,179.59,128.52Z" transform="translate(-138.37 -116.238)" fill="#4e259d"/><path d="M171.662,243.275a17.3,17.3,0,0,0,4.383,11.506c.34.385.713.77,1,1.031L188.966,268l11.766-12.049c.408-.374.8-.781,1.189-1.212a17.265,17.265,0,0,0,2.106-19.965l-4.609,4.564a10.874,10.874,0,0,1,.725,3.941,11.17,11.17,0,0,1-2.809,7.406l-.011.011a12.108,12.108,0,0,1-.861.872l-7.5,7.678-7.633-7.8a9.367,9.367,0,0,1-.736-.759,11.137,11.137,0,0,1-2.1-11.358l-4.6-4.552A17.136,17.136,0,0,0,171.662,243.275Z" transform="translate(-147.745 -202.473)" fill="#242a31"/><path d="M215.606,194.175a11.083,11.083,0,0,1,6.738,2.276l4.383-4.337a17.279,17.279,0,0,0-22.241,0l4.383,4.326A11.146,11.146,0,0,1,215.606,194.175Z" transform="translate(-174.386 -164.562)" fill="#4e259d"/><ellipse cx="6.361" cy="6.361" rx="6.361" ry="6.361" transform="translate(34.857 34.479)" fill="#4e259d"/></svg>
                    <h2 className='brand-text text-primary ml-1'>Semics</h2>
                </Link>
                <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                        <img className='img-fluid' src={source} alt='Login V2' />
                    </div>
                </Col>
                <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <CardTitle tag='h2' className='font-weight-bold mb-1'>
                            Reset Password 🔒
                        </CardTitle>
                        <CardText className='mb-2'>Your new password must be different from previously used passwords</CardText>
                        <Form className='auth-reset-password-form mt-2' onSubmit={e => e.preventDefault()}>
                            <FormGroup>
                                <Label className='form-label' for='new-password'>
                                    New Password
                                </Label>
                                <InputPassword className='input-group-merge' id='new-password' autoFocus />
                            </FormGroup>
                            <FormGroup>
                                <Label className='form-label' for='confirm-password'>
                                    Confirm Password
                                </Label>
                                <InputPassword className='input-group-merge' id='confirm-password' />
                            </FormGroup>
                            <Button.Ripple color='primary' block>
                                Set New Password
                            </Button.Ripple>
                        </Form>
                        <p className='text-center mt-2'>
                            <Link to='/pages/login-v2'>
                                <ChevronLeft className='mr-25' size={14} />
                                <span className='align-middle'>Back to login</span>
                            </Link>
                        </p>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default ResetPassword
