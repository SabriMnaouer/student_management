import React, { useState } from "react";
import "./studentList.css";
import { studentList } from "../../api/studentData";
import { Search } from "../filter/Search";
import { Student } from "../../types";
import { StudentCard } from "../student/StudentCard";

const removedElements: Student[] = [];

export const StudentList: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(studentList);

  const searchForElement = () => {
    const updatedList = inputValue === "" ? getAllStudents() : filterBySearch();
    setFilteredStudents(updatedList);
  };

  const filterBySearch = () => {
    return filteredStudents.filter((el) => el.name === inputValue);
  };

  const getAllStudents = () => {
    const activeStudents = studentList.filter((el) => !removedElements.includes(el));
    return activeStudents;
  };

  const removeElement = (id: number) => {
    updateRemovedElements(id);
    const updatedList = getAllStudents();
    setFilteredStudents(updatedList);
  };

  const updateRemovedElements = (id: number) => {
    const studentToRemove = filteredStudents.find((el) => el.id === id);
    if (studentToRemove) {
      removedElements.push(studentToRemove);
    }
  };

  const updateRemovedElement = (items: Student[]) => {
    removedElements.push(...items);
  };

  return (
    <>
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
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
