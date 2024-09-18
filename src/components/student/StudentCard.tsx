import React from "react";
import "./studentCard.css";
import { StudentProps } from "../../types";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export const StudentCard: React.FunctionComponent<StudentProps> = (props) => {
  const navigate = useNavigate();

  const handleDeleteIconClick = () => {
    props.removeElement(props.id);
  };
  const handleCardClick = () => {
    const { id, name, age, phone, email } = props;
    navigate('/student', { state: { student: { id, name, age, phone, email } } });
  };

  return (
    <div className="studentCard" onClick={handleCardClick}>
      <div className="cardHeader">
        <h2 className="studentName">Name: {props.name}</h2>
        <TiDelete size={30} cursor="pointer" onClick={handleDeleteIconClick} color="red" />
      </div>
      <p className="studentAge">Age: {props.age}</p>
      <p className="studentEmail">Email: {props.email}</p>
      <p className="studentPhone">Phone: {props.phone}</p>
    </div>
  );
};
