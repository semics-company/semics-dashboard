// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Input, CustomInput, Label } from 'reactstrap'
import {toast} from "react-toastify"
import Avatar from "../../../../../@core/components/avatar"
import {Check} from "react-feather"

const SuccessProgressToast = () => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Check size={12} />} />
          <h6 className='toast-title'>Company </h6>
        </div>
        <small className='text-muted'></small>
      </div>
      <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        insert successfully!
      </span>
      </div>
    </Fragment>
)

const AddActions = () => {
  const notifySuccessProgress = () => toast.success(<SuccessProgressToast />)

  const handleAdd = () => {
    notifySuccessProgress()
  }


  return (
    <Fragment>
      <Card className='invoice-action-wrapper'>
        <CardBody>
          <Button.Ripple color='primary' block className='mb-75' onClick={handleAdd}>
            Insert
          </Button.Ripple>
          <Button.Ripple color='primary' block outline>
            Cancel
          </Button.Ripple>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default AddActions
