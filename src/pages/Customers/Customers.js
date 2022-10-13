import { useEffect, useMemo, useState } from 'react';
import { getCustomers } from '../../fakeAPI';
import * as S from './Customers.styled';
import FilterCustomers from '../../components/FilterCustomers/FilterCustomers';
import { Link, useSearchParams } from 'react-router-dom';

const Customers = () => {
  const [customers, setCustomers] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const visibleCustomers = useMemo(() => {
    return customers?.filter((customer) =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);

  const changeFilter = (value) => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <main>
      <FilterCustomers handleFilter={changeFilter} value={filterParam} />
      {visibleCustomers && (
        <S.CustomersList>
          {visibleCustomers.map(({ name, id }) => (
            <Link to={`${id}`} key={id}>
              {name}
            </Link>
          ))}
        </S.CustomersList>
      )}
    </main>
  );
};

export default Customers;
