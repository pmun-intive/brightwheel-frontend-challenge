import { Dispatch, FC, SetStateAction, useState } from "react";
import { InputGroup } from "./styled";

// border radius do fieldset é de 8px
interface InputProps {
  label: string;
  id: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
const Input: FC<InputProps> = ({ id, label, value, setValue }) => {
  return (
    <InputGroup>
      <input
        type="text"
        id={id}
        onChange={(event) => setValue(event.target.value)}
        placeholder=" "
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </InputGroup>
  );
};

export default Input;
