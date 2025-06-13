import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import Invoice from './components/invoices/invoice';
import AppLayout from './components/layout/appLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ledgers from './components/ledgers/ledgers';



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout  />,
      children:[
        {
          path:"/",
          element:<Dashboard/>
        },
        {
          path:"/allInvoices",
          element:<Invoice/>
        },
        {
          path:"/ledgers",
          element:<Ledgers/>
        }
      ]
    }
  ])

  return <RouterProvider router = {router} />
}

export default App
