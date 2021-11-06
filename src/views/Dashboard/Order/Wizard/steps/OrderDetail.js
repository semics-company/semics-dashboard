import React, {useState} from 'react'
import {Button, Col, CustomInput, FormGroup, Input, Label, Row} from "reactstrap"
import Select from "react-select"
import {ArrowLeft, ArrowRight} from "react-feather"
import {selectThemeColors} from "../../../../../utility/Utils"
import Flatpickr from 'react-flatpickr'

const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
]


const WizardOrderDetail = ({ stepper, type }) => {
    const colourOptions = [
        { value: 'ocean', label: 'Ocean' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' }
    ]


    const [ordertype, setordertype] = useState("w")
    const [picker, setPicker] = useState(new Date())
    const [picker1, setPicker1] = useState(new Date())

    return (
        <div>
            <div className='content-header'>
                <h5 className='mb-0'>Order Details</h5>
                <small>Enter Your Order Details.</small>
            </div>
            <div style={{marginBottom:"15px"}} className='demo-inline-spacing'>
                <CustomInput type='radio' onClick={e => setordertype("w")} id='ImageRadio' name='ImageRadio' inline label='Watch count' checked={ ordertype === "w"}/>
                <CustomInput type='radio' onClick={e => setordertype("d")} id='VideoRadio' name='VideoRadio' inline label='Expiration date' checked={ ordertype !== "w"}/>
            </div>
            {ordertype === "w" &&
                <Row>
                <FormGroup tag={Col} md='6'>
                    <Label className='form-label' for={`country-${type}`}>
                        Company
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        isClearable={false}
                        id={`country-${type}`}
                        className='react-select'
                        classNamePrefix='select'
                        options={countryOptions}
                        defaultValue={countryOptions[0]}
                    />
                </FormGroup>

                <FormGroup tag={Col} md='6'>
                    <Label className='form-label' for={`country-${type}`}>
                        Advert
                    </Label>
                    <Select
                        theme={selectThemeColors}
                        isClearable={false}
                        id={`country-${type}`}
                        className='react-select'
                        classNamePrefix='select'
                        options={countryOptions}
                        defaultValue={countryOptions[0]}
                    />
                </FormGroup>

                    <FormGroup tag={Col} md='12'>
                        <Label className='form-label' for={`country-${type}`}>
                            Area
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            isClearable={false}
                            id={`country-${type}`}
                            className='react-select'
                            classNamePrefix='select'
                            options={countryOptions}
                            defaultValue={countryOptions[0]}
                        />
                    </FormGroup>

                    <FormGroup tag={Col} md='12'>
                        <Label className='form-label' for={`first-name-${type}`}>
                            Watch count
                        </Label>
                        <Input type='number' name='first-name' id={`first-name-${type}`} placeholder='Watch count' />
                    </FormGroup>

            </Row>
            }

            {ordertype === "d" &&
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`country-${type}`}>
                            Company
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            isClearable={false}
                            id={`country-${type}`}
                            className='react-select'
                            classNamePrefix='select'
                            options={countryOptions}
                            defaultValue={countryOptions[0]}
                        />
                    </FormGroup>

                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`country-${type}`}>
                            Advert
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            isClearable={false}
                            id={`country-${type}`}
                            className='react-select'
                            classNamePrefix='select'
                            options={countryOptions}
                            defaultValue={countryOptions[0]}
                        />
                    </FormGroup>

                    <FormGroup tag={Col} md='12'>
                        <Label className='form-label' for={`country-${type}`}>
                            Area
                        </Label>
                        <Select
                            theme={selectThemeColors}
                            isClearable={false}
                            id={`country-${type}`}
                            className='react-select'
                            classNamePrefix='select'
                            options={countryOptions}
                            defaultValue={countryOptions[0]}
                        />
                    </FormGroup>

                    <FormGroup tag={Col} md='6'>
                        <Label for='default-picker'>Active date</Label>
                        <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
                    </FormGroup>

                    <FormGroup tag={Col} md='6'>
                        <Label for='default-picker'>Expire date</Label>
                        <Flatpickr className='form-control' value={picker1} onChange={date => setPicker1(date)} id='default-picker' />
                    </FormGroup>

                </Row>
            }


            <div className='d-flex justify-content-between'>

                <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                    <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                </Button.Ripple>
            </div>
        </div>
    )
}
export default WizardOrderDetail

