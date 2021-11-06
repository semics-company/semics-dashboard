import React from 'react'
import classnames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Mail, Send, Edit2, Star, Info, Trash } from 'react-feather'
import { Button, ListGroup, ListGroupItem, Badge } from 'reactstrap'

const SideBar = () => {
    return (
        <div
            className={classnames('sidebar-left', {
                show: true
            })}
        >
            <div className='sidebar'>
                <div className='sidebar-content email-app-sidebar'>
                    <div className='email-app-menu'>
                        <div className='form-group-compose text-center compose-btn'>
                            <Button.Ripple className='compose-email' color='primary' block>
                                Compose
                            </Button.Ripple>
                        </div>
                        <PerfectScrollbar className='sidebar-menu-list' options={{ wheelPropagation: false }}>
                            <ListGroup tag='div' className='list-group-messages'>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/inbox'
                                    action
                                    active={true}
                                >
                                    <Mail size={18} className='mr-75' />
                                    <span className='align-middle'>Inbox</span>
                                        <Badge className='float-right' color='light-primary' pill>
                                            mahdi@mahdi.com
                                        </Badge>
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/sent'
                                    action
                                    active={false}
                                >
                                    <Send size={18} className='mr-75' />
                                    <span className='align-middle'>Sent</span>
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/draft'
                                    action
                                    active={false}
                                >
                                    <Edit2 size={18} className='mr-75' />
                                    <span className='align-middle'>Draft</span>
                                        <Badge className='float-right' color='light-warning' pill>
                                            dsaasd
                                        </Badge>
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/starred'
                                    action
                                    active={false}
                                >
                                    <Star size={18} className='mr-75' />
                                    <span className='align-middle'>Starred</span>
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/spam'
                                    action
                                    active={false}
                                >
                                    <Info size={18} className='mr-75' />
                                    <span className='align-middle'>Spam</span>
                                        <Badge className='float-right' color='light-danger' pill>
                                            dasdsadsa
                                        </Badge>
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/trash'
                                    action
                                    active={false}
                                >
                                    <Trash size={18} className='mr-75' />
                                    <span className='align-middle'>Trash</span>
                                </ListGroupItem>
                            </ListGroup>
                            <h6 className='section-label mt-3 mb-1 px-2'>Labels</h6>
                            <ListGroup tag='div' className='list-group-labels'>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/label/personal'
                                    active={false}
                                    action
                                >
                                    <span className='bullet bullet-sm bullet-success mr-1'></span>
                                    Personal
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/label/company'
                                    active={false}
                                    action
                                >
                                    <span className='bullet bullet-sm bullet-primary mr-1'></span>
                                    Company
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/label/important'
                                    active={false}
                                    action
                                >
                                    <span className='bullet bullet-sm bullet-warning mr-1'></span>
                                    Important
                                </ListGroupItem>
                                <ListGroupItem
                                    tag={Link}
                                    to='/apps/email/label/private'
                                    active={false}
                                    action
                                >
                                    <span className='bullet bullet-sm bullet-danger mr-1'></span>
                                    Private
                                </ListGroupItem>
                            </ListGroup>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar