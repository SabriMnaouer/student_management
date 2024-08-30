import { Dispatch, SetStateAction } from "react";

export interface Student {
    name : string;
    age : number;
    email : string;
    phone : number
}


export interface SearchProps {
    inputValue : string;
    setInputValue: Dispatch<SetStateAction<string>>
}
