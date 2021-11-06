// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
        update successfully!
      </span>
      </div>
    </Fragment>
)

const EditActions = () => {
  const notifySuccessProgress = () => toast.success(<SuccessProgressToast />)

  const handleConfirmText = () => {
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }
  const handleEdit = () => {
    notifySuccessProgress()
  }

  return (
    <Fragment>
      <Card className='invoice-action-wrapper'>
        <CardBody>
          <Button.Ripple onClick={handleEdit} color='primary' block className='mb-75'>
            Edit
          </Button.Ripple>
          <Button.Ripple onClick={handleConfirmText} color='danger' block outline>
            Delete
          </Button.Ripple>
          <Button.Ripple color='primary' block outline>
            Cancel
          </Button.Ripple>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default EditActions
