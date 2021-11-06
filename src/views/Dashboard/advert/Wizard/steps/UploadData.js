import React, {Fragment, useEffect, useState} from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {Label, FormGroup, Row, Col, Form, Input, Button, CustomInput, CardBody} from 'reactstrap'
import '@styles/react/libs/react-select/_react-select.scss'
import {DragDrop} from "@uppy/react"
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import {ArrowLeft, ArrowRight} from "react-feather"

const UploadData = ({ stepper, type }) => {
    const [adverttype, setadverttype] = useState("image")
    const [img, setImg] = useState(null)

    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 2, allowedFileTypes: ['image/*'] },
        autoProceed: true
    })

    uppy.use(thumbnailGenerator)

    uppy.on('thumbnail:generated', (file, preview) => {
        setImg(preview)
    })


    const [img1, setImg1] = useState(null)

    const uppy1 = new Uppy({
        meta: { type: 'avatar' },
        autoProceed: true,
        restrictions: {
            allowedFileTypes: ['video/*']
        }
    })

    uppy1.use(thumbnailGenerator)

    uppy1.on('file-added', (file, preview) => {
        setImg1(file)
    })

    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Upload data</h5>
                <small>Upload advert data.</small>
            </div>
            <div className='demo-inline-spacing'>
                <CustomInput type='radio' onClick={e => setadverttype("image")} id='ImageRadio' name='ImageRadio' inline label='Image advert' checked={ adverttype === "image"}/>
                <CustomInput type='radio' onClick={e => setadverttype("video")} id='VideoRadio' name='VideoRadio' inline label='Video advert' checked={ adverttype !== "image"}/>
            </div>
            <div>
                {adverttype === "image" ? <CardBody>
                        <DragDrop uppy={uppy} />
                        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                    </CardBody> : <CardBody>
                        <DragDrop uppy={uppy1} />
                    {img1 !== null ? <h6 style={{marginTop:"10px"}} className={"text-success"}>Video upload successfully!</h6> : null}
                    </CardBody>
                }

            </div>

            <div className='d-flex justify-content-between'>

                <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                    <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                    <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                </Button.Ripple>

                <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                    <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                </Button.Ripple>
            </div>
        </Fragment>
    )
}

export default UploadData
