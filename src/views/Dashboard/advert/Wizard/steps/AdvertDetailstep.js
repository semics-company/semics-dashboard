import React from 'react'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap"
import Select from "react-select"
import {ArrowLeft, ArrowRight} from "react-feather"
import {selectThemeColors} from "../../../../../utility/Utils"

const countryOptions = [
    { value: 'UK', label: 'UK' },
    { value: 'USA', label: 'USA' },
    { value: 'Spain', label: 'Spain' },
    { value: 'France', label: 'France' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Australia', label: 'Australia' }
]


const AdvertDetailInputs = ({ stepper, type }) => {
    return (
        <div>
            <div className='content-header'>
                <h5 className='mb-0'>Advert detail</h5>
                <small>Enter Your advert detail</small>
            </div>
            <Row>
                <FormGroup tag={Col} md='12'>
                    <Label className='form-label' for={`first-name-${type}`}>
                        Title
                    </Label>
                    <Input type='text' name='first-name' id={`first-name-${type}`} placeholder='Semics' />
                </FormGroup>
                <FormGroup tag={Col} md='12'>
                    <Label className='form-label' for={`last-name-${type}`}>
                        Description
                    </Label>
                    <Input type="textarea" name='last-name' id={`last-name-${type}`} placeholder='Description' />
                </FormGroup>
                <FormGroup tag={Col} md='6'>
                    <Label className='form-label' for={`country-${type}`}>
                        Category
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
            </Row>
            <div className='d-flex justify-content-between'>

                <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                    <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                </Button.Ripple>
            </div>
        </div>
    )
}
export default AdvertDetailInputs