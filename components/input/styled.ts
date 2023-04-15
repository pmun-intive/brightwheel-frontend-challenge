import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  margin: 0;

  label {
    color: ${(props) => props.theme.colors.black[100]};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    left: 4px;
    padding: 0 5px;
    position: absolute;
    pointer-events: none;
    transform: translateY(-50%);
    transition: 0.2s;
    top: 50%;
  }
  input {
    border: 0;
    background: transparent;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.black[200]};
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    height: 56px;
    outline: 0;
    padding: 16px 0 0 8px;
    width: 100%;
  }
  & input:focus ~ label,
  & input:not(:placeholder-shown) ~ label {
    transform: translateY(0px);
    top: 6px;
    font-size: 14px;
  }
`;
