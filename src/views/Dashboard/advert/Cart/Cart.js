import Avatar from '@components/avatar'
import { Calendar, MapPin, Briefcase, Type, Grid, Check } from 'react-feather'
import AvatarGroup from '@components/avatar-group'
import { Card, CardTitle, CardBody, CardText, Media } from 'reactstrap'
import {Link} from "react-router-dom"

const CardMeetup = () => {
    const data = [
        {
            title: 'Billy Hopkins',
            placement: 'bottom',
            img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
            imgHeight: 33,
            imgWidth: 33
        },
        {
            title: 'Amy Carson',
            placement: 'bottom',
            img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
            imgHeight: 33,
            imgWidth: 33
        },
        {
            title: 'Brandon Miles',
            placement: 'bottom',
            img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
            imgHeight: 33,
            imgWidth: 33
        },
        {
            title: 'Daisy Weber',
            placement: 'bottom',
            img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
            imgHeight: 33,
            imgWidth: 33
        },
        {
            title: 'Jenny Looper',
            placement: 'bottom',
            img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
            imgHeight: 33,
            imgWidth: 33
        },
        {
            meta: '+42'
        }
    ]

    return (
        <Card className='card-developer-meetup'>
            <div className='meetup-img-wrapper rounded-top text-center'>
                <img src={"data:image/jpeg;base64,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"} height='170' />
            </div>
            <CardBody>
                <Link to={"/dashboard/advert/529289518"}>
                    <div className='meetup-header d-flex align-items-center'>
                        <div className='meetup-day'>
                            <h6 className='mb-0'>THU</h6>
                            <h3 className='mb-0'>24</h3>
                        </div>
                        <div className='my-auto'>
                            <CardTitle tag='h4' className='mb-25'>
                                Developer Meetup
                            </CardTitle>
                            <CardText className='mb-0 justify-content-center align-items-center'> <Check size={18}/> Verify</CardText>
                        </div>
                    </div>
                    <Media>
                        <Avatar color='light-primary' className='rounded mr-1' icon={<Briefcase size={18} />} />
                        <Media body>
                            <h6 className='mb-0'>Company:</h6>
                            <small>Semics ads</small>
                        </Media>
                    </Media>
                    <Media className='mt-2'>
                        <Avatar color='light-primary' className='rounded mr-1' icon={<Grid size={18} />} />
                        <Media body>
                            <h6 className='mb-0'>Category:</h6>
                            <small>Dentistry</small>
                        </Media>
                    </Media>
                </Link>
            </CardBody>
        </Card>
    )
}

export default CardMeetup
