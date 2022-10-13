const FilterCustomers = ({ handleFilter, value }) => {
  return (
    <div>
      <label>
        Filter customers
        <input
          type='text'
          value={value}
          placeholder="Start by entering a client's name"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterCustomers;
