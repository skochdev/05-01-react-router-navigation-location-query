import { useState, useEffect } from 'react';
import * as S from './Invoices.styled';
import { Box } from '../Box';
import { getInvoices } from '../../fakeAPI';
import { Outlet } from 'react-router-dom';

export const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Box display='flex'>
      <Box
        as='aside'
        display='flex'
        flexDirection='column'
        p={3}
        borderRight='1px solid black'>
        {invoices.map(({ id }) => (
          <S.NavItem key={id} to={`${id}`}>
            <p>
              Invoice ID: <span> {id}</span>
            </p>
          </S.NavItem>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};
