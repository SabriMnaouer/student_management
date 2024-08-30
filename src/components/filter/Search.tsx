import React, { ChangeEvent } from "react";
import { SearchProps } from "../../types";

export const Search: React.FunctionComponent<SearchProps> = (props) => {
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.target.value);
  };

  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Search students"
        value={props.inputValue}
        onChange={changeInput}
      />
      <button>Search</button>
    </div>
  );
};
