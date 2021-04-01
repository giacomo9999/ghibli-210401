const GenderSelectForm = (props) => {
  const handleChange = (e) => {
    props.setGenderFilter(e.target.value);
  };
  return (
    <form>
      <label>Select By Gender</label>
      <select value={props.genderFilter} onChange={handleChange}>
        <option value="all">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </form>
  );
};

export default GenderSelectForm;
