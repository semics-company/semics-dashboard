import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import WizardOrderDetail from "./OrderDetail"
import SliderWizard from "./SliderWizard"
import TotalPriceStep from "./TotalPriceStep"

const WizardOrder = () => {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'order-details',
            title: 'Order Details',
            subtitle: 'Enter Your Order Details.',
            content: <WizardOrderDetail stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'weight-details',
            title: 'Weight',
            subtitle: 'Enter Your Order Weight.',
            content: <SliderWizard stepper={stepper} type='wizard-vertical' />
        },
        {
            id: 'price-details',
            title: 'Price',
            subtitle: 'Total price',
            content: <TotalPriceStep stepper={stepper} type='wizard-vertical' />
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

export default WizardOrder
