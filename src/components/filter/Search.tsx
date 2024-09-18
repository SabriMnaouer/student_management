import React, { ChangeEvent } from "react";
import { SearchProps } from "../../types";
import "./Search.css";

export const Search: React.FunctionComponent<SearchProps> = (props) => {
  
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    props.searchForElement();
  };

  const handleDeleteClick = () => {
    const result = filterStudents();
    const removed = getRemovedStudents();
    props.updateRemovedElement(removed);
    props.setFilteredStudent(result);
  };

  const filterStudents = () => {
    return props.studentList.filter((el) => el.name !== props.inputValue);
  };

  const getRemovedStudents = () => {
    return props.studentList.filter((el) => el.name === props.inputValue);
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
      <button className="searchButton" onClick={handleSearchClick}>
        Search
      </button>
      <button className="deleteButton" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};
