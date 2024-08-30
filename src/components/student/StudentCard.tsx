import React from "react";
import "./studentCard.css";
import { Student } from "../../types";

export const StudentCard: React.FunctionComponent<Student> = (props) => {
  return (
    <div className="studentCard">
      <h2 className="studentName">Name : {props.name}</h2>
      <p className="studentAge">Age :{props.age}</p>
      <p className="studentEmail">Email : {props.email}</p>
      <p className="studentPhone">Phone : {props.phone}</p>
    </div>
  );
};
