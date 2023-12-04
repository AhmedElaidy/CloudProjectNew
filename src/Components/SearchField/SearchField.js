import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonRound from "Components/Buttons/ButtonRound";
import { useHistory } from "react-router-dom";
import useStore from "Store/StoreContext";

const SearchField = (props) => {
  const [searchInput, setSearchInput] = useState();
  const { searchQuery, setSearchQuery } = useStore();

  const classes = useStyles();

  const handleSearch = () => {
    if (searchInput.trim() !== searchQuery) {
      setSearchQuery(searchInput.trim());
    }
  };

  return (
    <InputGroup className="align-items-center" style={{ marginTop: "1rem" }}>
      <Form.Control
        as="input"
        className={classes.inputField}
        placeholder="Search"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <InputGroup.Append
        onClick={handleSearch}
        className={classes.buttonContainer}
      >
        <ButtonRound icon="/icons/search.svg" />
      </InputGroup.Append>
    </InputGroup>
  );
};

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    borderRadius: "30px!important",
    backgroundColor: theme.colors.cream,
    boxShadow: "none!important",
    fontWeight: "600",
    height: 40,
    "&:focus": {
      backgroundColor: theme.colors.cream,
    },
  },
  buttonContainer: {
    position: "absolute",
    right: 4,
    zIndex: "1111",
  },
}));

export default SearchField;
