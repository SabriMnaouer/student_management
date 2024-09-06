import React, { ChangeEvent } from "react";
import { SearchProps } from "../../types";
import "./Search.css";

export const Search: React.FunctionComponent<SearchProps> = (props) => {
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.target.value);
  };
  const searchForElement = () => {
    props.searchForElement();
  };

  const deleteElement = () => {
    const result = props.studentList.filter(
      (el) => el.name !== props.inputValue
    );
    const remElements = props.studentList.filter(
      (el) => el.name === props.inputValue
    );
    props.updateRemovedElement(remElements);
    props.setFilteredStudent(result);
  };
  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder="Search students"
        value={props.inputValue}
        onChange={changeInput}
      />
      <button className="searchButton" onClick={searchForElement}>
        Search
      </button>
      <button className="deleteButton" onClick={deleteElement}>
        Delete
      </button>
    </div>
  );
};
