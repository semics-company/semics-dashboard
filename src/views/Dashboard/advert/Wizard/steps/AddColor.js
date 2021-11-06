import { Fragment } from 'react'
import {ArrowLeft, ArrowRight, Check, Info} from 'react-feather'
import { Label, FormGroup, Row, Col, Input, Form, Button } from 'reactstrap'
import { useHistory } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import Avatar from "../../../../../@core/components/avatar"
import {toast} from "react-toastify"

const MySwal = withReactContent(Swal)

const SuccessProgressToast = () => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='info' icon={<Info size={12} />} />
                <h6 className='toast-title'>Verify advert</h6>
            </div>
            <small className='text-muted'></small>
        </div>
        <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        We will verify your advert soon, after that you can submit your order!
      </span>
        </div>
    </Fragment>
)

const AddColor = ({ stepper, type }, props) => {
    const history = useHistory()
    const notifySuccessProgress = () => toast.info(<SuccessProgressToast />)

    const handleConfirmText = () => {
        return MySwal.fire({
            title: 'Are you sure?',
            text: "Do you want insert this advert?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ml-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            if (result.value) {
                MySwal.fire({
                    icon: 'success',
                    title: 'Advert added!',
                    text: 'Your advert has been added.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                }).then(r => {
                    history.push("/dashboard/advert")
                    notifySuccessProgress()
                })
            }
        })
    }

    const CreateAdvert = () => {
        handleConfirmText()
    }
    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Add color</h5>
                <small>Add your advert color type.</small>
            </div>
            <Form onSubmit={e => e.preventDefault()}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`address-${type}`}>
                            Primary color
                        </Label>
                        <Input
                            type='color'
                            id={`address-${type}`}
                            name={`address-${type}`}
                            placeholder='98  Borough bridge Road, Birmingham'
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`landmark-${type}`}>
                            Secondary color
                        </Label>
                        <Input type='color' name={`landmark-${type}`} id={`landmark-${type}`} placeholder='Borough bridge' />
                    </FormGroup>
                </Row>

                <div className='d-flex justify-content-between'>
                    <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                        <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                        <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                    </Button.Ripple>
                    <Button.Ripple color='success' className='btn-submit' onClick={CreateAdvert}>
                        Submit
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment>
    )
}

export default AddColor
