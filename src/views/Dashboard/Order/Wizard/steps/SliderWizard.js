import React, {useState} from 'react'
import {Button, Col, CustomInput, FormGroup, Input, Label, Row} from "reactstrap"
import {ArrowLeft, ArrowRight} from "react-feather"
import Nouislider from 'nouislider-react'
import {useRTL} from "../../../../../utility/hooks/useRTL"
import '@styles/react/libs/noui-slider/noui-slider.scss'

const SliderWizard = ({ stepper, type }) => {
    const [isRtl, setIsRtl] = useRTL()


    return (
        <div>
            <div style={{marginBottom:"60px"}} className='content-header'>
                <h5 className='mb-0'>Weight</h5>
                <small>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </small>
            </div>

            <Nouislider
                className='mt-1 mb-5'
                start={10}
                step={10}
                tooltips={true}
                direction={isRtl === true ? 'rtl' : 'ltr'}
                range={{
                    min: 0,
                    max: 200
                }}
                pips={{
                    mode: 'steps',
                    stepped: true,
                    density: 5
                }}
            />

            <div  className='d-flex justify-content-between'>
                <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                    <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                </Button.Ripple>
                <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                    <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                </Button.Ripple>
            </div>
        </div>
    )
}
export default SliderWizard

