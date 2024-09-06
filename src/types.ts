import { Dispatch, SetStateAction } from "react";

export interface Student {
    id : number;
    name : string;
    age : number;
    email : string;
    phone : number
}

export interface StudentProps {
    id : number;
    name : string;
    age : number;
    email : string;
    phone : number
    removeElement : (id:number)=> void;
}

export interface SearchProps {
    inputValue : string;
    setInputValue: Dispatch<SetStateAction<string>>
    searchForElement : () => void;
    studentList : Student[];
    setFilteredStudent : Dispatch<SetStateAction<Student[]>>;
    removedElements : Student[];
    updateRemovedElement : (items:Student[])=>void; 
}
