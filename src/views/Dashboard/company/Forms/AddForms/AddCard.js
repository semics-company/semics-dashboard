// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Repeater from '@components/repeater'

// ** Third Party Components
import axios from 'axios'
import Flatpickr from 'react-flatpickr'
import { SlideDown } from 'react-slidedown'
import { X, Plus, Hash } from 'react-feather'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

// ** Styles
import 'react-slidedown/lib/slidedown.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'

const AddCard = () => {
  // ** States
  const [count, setCount] = useState(1)
  const [value, setValue] = useState({})
  const [open, setOpen] = useState(false)
  const [clients, setClients] = useState(null)
  const [selected, setSelected] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [invoiceNumber, setInvoiceNumber] = useState(false)
  const [dueDatepicker, setDueDatePicker] = useState(new Date())
  const [options, setOptions] = useState([
    {
      value: 'add-new',
      label: 'Add New Customer',
      type: 'button',
      color: 'flat-success'
    }
  ])


  // ** Deletes form
  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Function to toggle sidebar
  const toggleSidebar = () => setOpen(!open)

  // ** Vars
  const countryOptions = [
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'russia', label: 'Russia' },
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'united-arab-emirates', label: 'United Arab Emirates' },
    { value: 'united-states-of-america', label: 'United States of America' }
  ]

  const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]
  // ** Custom Options Component
  const OptionComponent = ({ data, ...props }) => {
    if (data.type === 'button') {
      return (
        <Button className='text-left rounded-0' color={data.color} block onClick={() => setOpen(true)}>
          <Plus size={14} /> <span className='align-middle ml-50'>{data.label}</span>
        </Button>
      )
    } else {
      return <components.Option {...props}> {data.label} </components.Option>
    }
  }

  // ** Invoice To OnChange
  const handleInvoiceToChange = data => {
    setValue(data)
    setSelected(clients.filter(i => i.name === data.value)[0])
  }

  const note =
    'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'

  return (
    <Fragment>
      <Card className='invoice-preview-card mb-0'>
        {/* Header */}
        <CardBody className='invoice-padding pb-0'>
          <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
            <Row>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <FormGroup>
                  <Label for='basicInput'>Name:</Label>
                  <Input type='email' id='basicInput' placeholder='Company name' />
                </FormGroup>
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <FormGroup>
                  <Label for='basicInput'>Email:</Label>
                  <Input type='email' id='basicInput' placeholder='Enter Email' />
                </FormGroup>
              </Col>
              <Col className='mb-1' xl='4' md='6' sm='12'>
                <FormGroup>
                  <Label for='basicInput'>Telephone :</Label>
                  <Input type='tel' id='basicInput' placeholder='Enter telephone' />
                </FormGroup>
              </Col>

              <Col className='mb-1' xl='4' md='6' sm='12'>
                <FormGroup>
                  <Label for='basicInput'>Telephone :</Label>
                  <Input type='tel' id='basicInput' placeholder='Enter telephone' />
                </FormGroup>
              </Col>

              <Col className='mb-1' xl='8' md='6' sm='12'>
                <FormGroup>
                  <Label>Category</Label>
                  <Select
                      theme={selectThemeColors}
                      className='react-select'
                      classNamePrefix='select'
                      defaultValue={colourOptions[0]}
                      options={colourOptions}
                      isClearable={false}
                  />
                </FormGroup>
              </Col>

              <Col className='mb-1' xl='6' md='6' sm='12'>
                <FormGroup>
                  <Label>Address</Label>
                    <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Address' />

                </FormGroup>
              </Col>

              <Col className='mb-1' xl='6' md='6' sm='12'>
                <FormGroup>
                  <Label>Description</Label>
                  <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Description' />

                </FormGroup>
              </Col>

            </Row>
          </div>
        </CardBody>

      </Card>

      <Sidebar
        size='lg'
        open={open}
        title='Add Payment'
        headerClassName='mb-1'
        contentClassName='p-0'
        toggleSidebar={toggleSidebar}
      >
        <Form>
          <FormGroup>
            <Label for='customer-name' className='form-label'>
              Customer Name
            </Label>
            <Input id='customer-name' placeholder='John Doe' />
          </FormGroup>
          <FormGroup>
            <Label for='customer-email' className='form-label'>
              Customer Email
            </Label>
            <Input type='email' id='customer-email' placeholder='example@domain.com' />
          </FormGroup>
          <FormGroup>
            <Label for='customer-address' className='form-label'>
              Customer Address
            </Label>
            <Input type='textarea' cols='2' rows='2' id='customer-address' placeholder='1307 Lady Bug Drive New York' />
          </FormGroup>
          <FormGroup>
            <Label for='country' className='form-label'>
              Country
            </Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              options={countryOptions}
              isClearable={false}
            />
          </FormGroup>
          <FormGroup>
            <Label for='customer-contact' className='form-label'>
              Contact
            </Label>
            <Input type='number' id='customer-contact' placeholder='763-242-9206' />
          </FormGroup>
          <FormGroup className='d-flex flex-wrap mt-2'>
            <Button className='mr-1' color='primary' onClick={() => setOpen(false)}>
              Add
            </Button>
            <Button color='secondary' onClick={() => setOpen(false)} outline>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Sidebar>
    </Fragment>
  )
}

export default AddCard

