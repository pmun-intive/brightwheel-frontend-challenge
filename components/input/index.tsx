import { Dispatch, FC, SetStateAction, useState } from "react";
import { InputGroup } from "./styled";

// border radius do fieldset é de 8px
interface InputProps {
  label: string;
  id: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

/**
 * @component
 * @name Input
 * @description Input field with a label attached to it.
 * @namespace components components/input
 * @param {string} id - Sets the id for the input
 * @param {string} label - Sets the label description
 * @param {string} value - Is the value inside the input
 * @param {Dispatch<SetStateAction<string>>} setValue - Changes the value field when triggered by onChange
 */

const Input: FC<InputProps> = ({ id, label, value, setValue }) => {
  return (
    <InputGroup>
      <input
        type="text"
        id={id}
        onChange={(event) => {
          event.preventDefault();
          setValue(event.target.value);
        }}
        placeholder=" "
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </InputGroup>
  );
};

export default Input;
