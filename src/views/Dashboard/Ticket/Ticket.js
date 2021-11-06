import React, {Fragment} from 'react'
import SideBar from "./Components/SideBar"
import '@styles/react/apps/app-email.scss'
import classnames from 'classnames'
import LayoutWrapper from "../../../@core/layouts/components/layout-wrapper"
import {useRouterTransition} from "../../../utility/hooks/useRouterTransition"

const Ticket = () => {
    const [transition, setTransition] = useRouterTransition()

    return (
        <LayoutWrapper
            layout={"HorizontalLayout"}
            transition={transition}
            setTransition={setTransition}>
            <Fragment>
                <SideBar/>
                <div className='content-right'>
                    <div className='content-body'>
                        <div
                            className={classnames('body-content-overlay', {
                                show: true
                            })}
                        ></div>
                    </div>
                </div>
            </Fragment>
        </LayoutWrapper>
    )
}

export default Ticket