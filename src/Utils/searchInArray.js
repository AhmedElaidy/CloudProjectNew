const Search = (array, value) => {
  console.log("array is ", array);
  return array.find(({ _id }) => {
    console.log("_id is ", _id);
    console.log("value is ", value);
    return _id === value;
  });
};

export default Search;
