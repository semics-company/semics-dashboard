// ** React Imports
import { Suspense, useContext, lazy } from 'react'

// ** Utils
import { isUserLoggedIn } from '@utils'
import { useLayout } from '@hooks/useLayout'
import { AbilityContext } from '@src/utility/context/Can'
import { useRouterTransition } from '@hooks/useRouterTransition'

// ** Custom Components
// import Spinner from '@components/spinner/Loading-spinner' // Uncomment if your require content fallback
import LayoutWrapper from '@layouts/components/layout-wrapper'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

// ** Routes & Default Routes
import { DefaultRoute, Routes } from './routes'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'
import VerticalLayout from '@src/layouts/VerticalLayout'
import HorizontalLayout from '@src/layouts/HorizontalLayout'
import Login from "../views/Login"
import Register from "../views/Register"
import ForgotPassword from "../views/ForgetPassword"
import ResetPassword from "../views/ResetPassword"
import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "../views/Home"
import Error from "../views/Error"

const Router = () => {
  // ** Hooks
  const [layout, setLayout] = useLayout()
  const [transition, setTransition] = useRouterTransition()

  // ** ACL Ability Context
  const ability = useContext(AbilityContext)

  // ** Default Layout
  const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout'

  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayout, HorizontalLayout }

  // ** Current Active Item
  const currentActiveItem = null

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = layout => {
    const LayoutRoutes = []
    const LayoutPaths = []

    if (Routes) {
      Routes.filter(route => {
        // ** Checks if Route layout or Default layout matches current layout
        if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }

    return { LayoutRoutes, LayoutPaths }
  }

  const NotAuthorized = lazy(() => import('@src/views/NotAuthorized'))

  return (
    <AppRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        {/* If user is logged in Redirect user to DefaultRoute else to login */}
        {/* <Route
          exact
          path='/'
          render={() => {
            return isUserLoggedIn() ? <Redirect to={DefaultRoute} /> : <Redirect to='/login' />
          }}
        /> */}
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to={DefaultRoute} />
          }}
        />
        {/* Not Auth Route */}
        <Route
          exact
          path='/not-authorized'
          render={props => (
            <Layouts.BlankLayout>
              <NotAuthorized />
            </Layouts.BlankLayout>
          )}
        />
        <PublicRoute restricted={true} component={Login} path={"/auth/login"} exact />
        <PublicRoute restricted={true} component={Register} path={"/auth/register"} exact />
        <PublicRoute restricted={true} component={ForgotPassword} path={"/auth/forget-password"} exact />
        <PublicRoute restricted={true} component={ResetPassword} path={"/auth/reset-password"} exact />
        <PrivateRoute component={Dashboard} path={"/dashboard"}/>
        <Route path="*" component={Error}/>


      </Switch>
    </AppRouter>
  )
}

export default Router
