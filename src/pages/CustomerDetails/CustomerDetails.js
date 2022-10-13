import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCustomerById } from '../../fakeAPI';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();

  useEffect(() => {
    // Notice, customerId in our case should be a number. But we're getting it from the search query, and it is a string
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  return (
    <div>
      {customer && (
        <div>
          <Link to='/customers'>Back</Link>
          <h1>Name: {customer.name}</h1>
        </div>
      )}
    </div>
  );
};
export default CustomerDetails;
