import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import UploadData from "./UploadData"
import AddColor from "./AddColor"
import AdvertDetailInputs from "./AdvertDetailstep"

const WizardVertical = () => {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'advert-details',
            title: 'Advert Details',
            subtitle: 'Enter Your advert Details.',
            content: <AdvertDetailInputs stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'upload-data',
            title: 'Upload data',
            subtitle: 'Upload advert data',
            content: <UploadData stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'step-color',
            title: 'Add color',
            subtitle: 'Add your advert color type',
            content: <AddColor stepper={stepper} type='wizard-vertical' />
        }
    ]

    return (
        <div className='vertical-wizard'>
            <Wizard
                type='vertical'
                ref={ref}
                steps={steps}
                options={{
                    linear: false
                }}
                instance={el => setStepper(el)}
            />
        </div>
    )
}

export default WizardVertical
