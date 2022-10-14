import * as S from './FilterCustomers.styled';

const FilterCustomers = ({ handleFilter, value }) => {
  return (
    <S.Filter>
      <S.Label>
        Filter customers
        <S.Input
          type='text'
          value={value}
          placeholder="Client's name"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </S.Label>
    </S.Filter>
  );
};

export default FilterCustomers;
