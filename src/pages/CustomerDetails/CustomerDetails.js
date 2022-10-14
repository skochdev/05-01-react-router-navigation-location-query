import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCustomerById } from '../../fakeAPI';
import * as S from './CustomerDetails.styled';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Notice, customerId in our case should be a number. But we're getting it from the search query, and it is a string
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  return (
    <div>
      {customer && (
        <div>
          <S.BackLink to={location.state?.from ?? '/customers'}>
            Back
          </S.BackLink>
          <h1>Name: {customer.name}</h1>
        </div>
      )}
    </div>
  );
};
export default CustomerDetails;
