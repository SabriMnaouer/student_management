import React from "react";
import "./studentCard.css";
import { StudentProps } from "../../types";
import { TiDelete } from "react-icons/ti";

export const StudentCard: React.FunctionComponent<StudentProps> = (props) => {
  const deleteIcon = () => {
    props.removeElement(props.id);
  };
  return (
    <div className="studentCard">
      <div className="cardHeader">
        <h2 className="studentName">Name {props.name}</h2>
        <TiDelete size={30} cursor={"pointer"} onClick={deleteIcon} color="red" />

      </div>
      <p className="studentAge">Age{props.age}</p>
      <p className="studentEmail">Email{props.email}</p>
      <p className="studentPhone">Phone{props.phone}</p>
    </div>
  );
};
