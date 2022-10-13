import { GlobalStyle } from './GlobalStyle';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Sales } from './pages/Sales/Sales';
import { Invoices } from './components/Invoices/Invoices';
import InvoiceDetails from './components/InvoiceDetails/InvoiceDetails';
import { Box } from './components/Box/Box';
import Customers from './pages/Customers/Customers';
import CustomerDetails from './pages/CustomerDetails/CustomerDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='dashboard' />} />
          <Route
            path='dashboard'
            element={
              <Box p={4} fontSize='1.6rem'>
                <p>Dashboard page</p>
                <strong>Checkout sales/invoices route.</strong>
              </Box>
            }
          />
          <Route path='sales' element={<Sales />}>
            <Route
              index
              element={
                <Box p={4} fontSize='1.6rem'>
                  Sales index route. <b>Invoices</b> link have some dynamic
                  components rendered
                </Box>
              }
            />
            <Route path='analytics' element={<div>Analytics</div>} />
            <Route path='invoices' element={<Invoices />}>
              <Route path=':invoiceId' element={<InvoiceDetails />} />
            </Route>
            <Route path='deposits' element={<div>Deposits</div>} />
          </Route>
          <Route path='reports' element={<div>Reports</div>} />
          <Route path='feedback' element={<div>Feedback</div>} />
          <Route path='customers' element={<Customers />} />
          <Route path='customers/:customerId' element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export { App };
