import React, { useState } from "react";
import "./studentList.css";

import { studentList } from "../../api/studentData";
import { Search } from "../filter/Search";
import { Student } from "../../types";
import { StudentCard } from "../student/StudentCard";

const removedElements: Student[] = [];

export const StudentList = () => {
  const [inputValue, setInputValue] = useState("");


  const [filteredStudents, setFilteredStudents] =
  useState<Student[]>(studentList);
const searchForElement = () => {
  if (inputValue === "") {
    const studentListIndexes = studentList.map((el) => el.id);
    const removedelementsIndexes = removedElements.map((el) => el.id);
    const finalStudentsArrayIndexes = studentListIndexes.filter(
      (el) => !removedelementsIndexes.includes(el)
    );
    const finalStudentsArray = finalStudentsArrayIndexes.map(
      (el) => studentList[el!]
    );
    setFilteredStudents(finalStudentsArray);
  } else {
    const result = filteredStudents.filter(
      (el) => el.name === inputValue
    );
    setFilteredStudents(result);
  }
};

const removeElement = (id: number) => {
  const elements = filteredStudents.filter((el) => el.id === id);
  removedElements.push(...elements);
  const studentListIndexes = studentList.map((el) => el.id);
  const removedelementsIndexes = removedElements.map((el) => el.id);
  const finalStudentsArrayIndexes = studentListIndexes.filter(
    (el) => !removedelementsIndexes.includes(el)
  );
  const finalStudentsArray = finalStudentsArrayIndexes.map(
    (el) => studentList[el!]
  );
  setFilteredStudents(finalStudentsArray);
};
const updateRemovedElement = (items: Student[]) => {
  removedElements.push(...items);
};
  return (
    <>
      <Search inputValue={inputValue} setInputValue={setInputValue} 
       searchForElement={searchForElement}
       studentList={filteredStudents}
       setFilteredStudent={setFilteredStudents}
       removedElements={removedElements}
       updateRemovedElement={updateRemovedElement}
      />
     <div className="studentList">
  {filteredStudents.map((student, index) => (
    <StudentCard
      key={index}
      id={student.id}
      name={student.name}
      age={student.age}
      phone={student.phone}
      email={student.email}
      removeElement={removeElement}
    />
  ))}
</div>
    </>
  );
};
