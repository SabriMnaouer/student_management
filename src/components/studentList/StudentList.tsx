import React, { useState } from "react";
import "./studentList.css";

import { studentList } from "../../api/studentData";
import { Search } from "../filter/Search";
import { StudentCard } from "../student/StudentCard";

export const StudentList = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Search inputValue={inputValue} setInputValue={setInputValue} />
      <div className="studentList">
        {studentList.map((Student) => (
          <StudentCard
            name={Student.name}
            age={Student.age}
            phone={Student.phone}
            email={Student.email}
          />
        ))}{" "}
      </div>
      {inputValue}
    </>
  );
};
