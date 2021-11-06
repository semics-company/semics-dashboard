import { Mail, Home, Settings, Box, Grid, FileText, Briefcase, FilePlus, List } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/dashboard/'
  },
  {
    id: 'advert',
    title: 'Advert',
    icon: <Box size={20} />,
    navLink: '/dashboard/advert',
    children: [
      {
        id: 'advertList',
        title: 'List',
        icon: <List />,
        navLink: '/dashboard/advert'
      },
      {
        id: 'add-advert',
        title: 'Add advert',
        icon: <FilePlus />,
        navLink: '/dashboard/add-advert'
      }
      ]
  },
  {
    id: 'order',
    title: 'Order',
    icon: <Grid size={20} />,
    navLink: '/dashboard/order',
    children: [
      {
        id: 'orderlist',
        title: 'List',
        icon: <List />,
        navLink: '/dashboard/order'
      },
      {
        id: 'add-order',
        title: 'Add order',
        icon: <FilePlus />,
        navLink: '/dashboard/add-order'
      }
    ]
  },
  {
    id: 'compnay',
    title: 'Company',
    icon: <Briefcase size={20} />,
    navLink: '/dashboard/company',
    children: [
      {
        id: 'companylist',
        title: 'List',
        icon: <List />,
        navLink: '/dashboard/company'
      },
      {
        id: 'add-company',
        title: 'Add company',
        icon: <FilePlus />,
        navLink: '/dashboard/add-company'
      }
    ]
  },
  {
    id: 'transaction',
    title: 'Transaction',
    icon: <FileText size={20} />,
    navLink: '/dashboard/transaction'
  },
  {
    id: 'ticket',
    title: 'Ticket',
    icon: <Mail size={20} />,
    navLink: '/dashboard/ticket'
  },
  {
    id: 'setting',
    title: 'Setting',
    icon: <Settings size={20} />,
    navLink: '/dashboard/setting'
  }
]
