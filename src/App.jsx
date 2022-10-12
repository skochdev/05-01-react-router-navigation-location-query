import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Sales } from './pages/Sales/Sales';
import { Invoices } from './components/Invoices/Invoices';
import InvoiceDetails from './components/InvoiceDetails/InvoiceDetails';
import { Box } from './components/Box';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
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
          <Route path='customers' element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export { App };
