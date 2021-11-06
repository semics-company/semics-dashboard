
import HorizontalLayout from "../@core/layouts/HorizontalLayout"
import {Route} from "react-router-dom"
import Main from "./Dashboard/Main"
import AddAdvert from "./Dashboard/advert/AddAdvert"
import AdvertDetail from "./Dashboard/advert/AdvertDetail"
import Advert from "./Dashboard/advert/Advert"
import Order from "./Dashboard/Order/Order"
import AddOrder from "./Dashboard/Order/AddOrder"
import OrderDetail from "./Dashboard/Order/OrderDetail"
import CompanyAdd from "./Dashboard/company/CompanyAdd"
import CompanyDetail from "./Dashboard/company/CompanyDetail"
import CompanyList from "./Dashboard/company/CompanyList"
import CompanyEdit from "./Dashboard/company/CompanyEdit"
import TransactionList from "./Dashboard/Transactions/TransactionList"
import AccountSettings from "./Dashboard/setting"
import Ticket from "./Dashboard/Ticket/Ticket"


const Dashboard = () => {
  return (
      <HorizontalLayout>
          <div style={{paddingTop:"145px"}}>
              <Route path={"/dashboard/"} component={Main} exact/>
              <Route path={"/dashboard/advert"} component={Advert} exact/>
              <Route path={"/dashboard/add-advert"} component={AddAdvert} exact/>
              <Route path={"/dashboard/advert/:id"} component={AdvertDetail} exact/>
              <Route path={"/dashboard/order"} component={Order} exact/>
              <Route path={"/dashboard/add-order"} component={AddOrder} exact/>
              <Route path={"/dashboard/order/:id"} component={OrderDetail} exact/>
              <Route path={"/dashboard/company"} component={CompanyList} exact/>
              <Route path={"/dashboard/add-company"} component={CompanyAdd} exact/>
              <Route path={"/dashboard/company/:id"} component={CompanyDetail} exact/>
              <Route path={"/dashboard/edit-company/:id"} component={CompanyEdit} exact/>
              <Route path={"/dashboard/transaction"} component={TransactionList} exact/>
              <Route path={"/dashboard/setting"} component={AccountSettings} exact/>
              <Route path={"/dashboard/ticket"} component={Ticket} exact/>
          </div>
      </HorizontalLayout>

  )
}

export default Dashboard
