import React, {useState, Fragment} from 'react'
import {Button, CardText, Col, CustomInput, FormGroup, Input, Label, Row} from "reactstrap"
import {ArrowLeft, ArrowRight, Info} from "react-feather"
import {useRTL} from "../../../../../utility/hooks/useRTL"
import '@styles/react/libs/noui-slider/noui-slider.scss'
import successimage from "../../../../../assets/images/Achievement-pana.png"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import Avatar from "../../../../../@core/components/avatar"

const MySwal = withReactContent(Swal)

const SuccessProgressToast = () => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='info' icon={<Info size={12} />} />
                <h6 className='toast-title'>Pay order</h6>
            </div>
            <small className='text-muted'></small>
        </div>
        <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        Go to your order list and pay your order
      </span>
        </div>
    </Fragment>
)

const TotalPriceStep = ({ stepper, type }) => {
    const [isRtl, setIsRtl] = useRTL()

    const history = useHistory()
    const notifySuccessProgress = () => toast.info(<SuccessProgressToast />)

    const handleConfirmText = () => {
        return MySwal.fire({
            title: 'Are you sure?',
            text: "Do you want insert this order?",
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
                    title: 'order added!',
                    text: 'Your order has been added.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                }).then(r => {
                    history.push("/dashboard/order")
                    notifySuccessProgress()
                })
            }
        })
    }

    const CreateAdvert = () => {
        handleConfirmText()
    }

    return (
        <div>

            <div className={"d-flex justify-content-center align-items-center flex-column"}>
                <div>
                    <h3>Congratulations 🎉</h3>
                    <CardText className='font-small-3'>You have passed all the steps </CardText>
                    <h3 className='mb-75 mt-2 pt-50'>
                        <a style={{marginBottom:"3rem"}} href='/' onClick={e => e.preventDefault()}>
                            Total price : $48.9k
                        </a>
                    </h3>
                </div>
                <div>
                    <img style={{width:"300px", height:"300px"}} src={successimage} alt=""/>
                </div>

            </div>

            <div className='d-flex justify-content-between'>
                <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                    <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                </Button.Ripple>
                <Button.Ripple color='success' className='btn-submit' onClick={CreateAdvert}>
                    Submit
                </Button.Ripple>
            </div>
        </div>
    )
}
export default TotalPriceStep

