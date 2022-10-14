import { GlobalStyle } from './GlobalStyle';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';
import InvoiceDetails from './components/InvoiceDetails/InvoiceDetails';
import { Box } from './components/Box/Box';

const Sales = lazy(() => import('./pages/Sales/Sales'));
const Customers = lazy(() => import('./pages/Customers/Customers'));
const CustomerDetails = lazy(() =>
  import('./pages/CustomerDetails/CustomerDetails')
);
// Below is when we import named exports, above are default exports
const Invoices = lazy(() =>
  import('./components/Invoices/Invoices').then((module) => ({
    ...module,
    default: module.Invoices,
  }))
);

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
                <strong>Checkout sales/invoices or Customers route.</strong>
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
          <Route path='customers' element={<Customers />} />
          <Route path='customers/:customerId' element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export { App };
