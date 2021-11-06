import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import {Eye} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const VisitTable1 = () => {
    const transactionsArr = [
        {
            title: 'Wallet',
            color: 'light-primary',
            subtitle: 'Starbucks',
            amount: '- $74',
            Icon: Icon['Pocket'],
            down: true
        },
        {
            title: 'Bank Transfer',
            color: 'light-success',
            subtitle: 'Add Money',
            amount: '+ $480',
            Icon: Icon['Check']
        },
        {
            title: 'Paypal',
            color: 'light-danger',
            subtitle: 'Add Money',
            amount: '+ $590',
            Icon: Icon['DollarSign']
        },
        {
            title: 'Mastercard',
            color: 'light-warning',
            subtitle: 'Ordered Food',
            amount: '- $12',
            Icon: Icon['CreditCard'],
            down: true
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        },
        {
            title: 'Transfer',
            color: 'light-info',
            subtitle: 'Refund',
            amount: '+ $98',
            Icon: Icon['TrendingUp']
        }
    ]

    const renderTransactions = () => {
        return transactionsArr.map(item => {
            return (
                <div key={item.title} className='transaction-item'>
                    <Media className={"align-items-center"}>
                        <Avatar className='rounded' color={'light-success'} icon={<Eye size={18} />} />
                        <h6 className='transaction-title'>Android</h6>
                    </Media>
                    <div className={`font-weight-bolder text-success`}>2000/10/24</div>
                </div>
            )
        })
    }

    return (
        <Card className='card-transaction'>
            <CardHeader>
                <CardTitle tag='h4'>Lasts visits</CardTitle>
            </CardHeader>
            <CardBody>{renderTransactions()}</CardBody>
        </Card>
    )
}

export default VisitTable1
