import { PrimaryButton } from "@components/button/styled";
import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  color: ${(props) => props.theme.colors.white[100]};
  display: flex;
  flex-direction: column;
  font-family: Kanit, sans-serif;
  justify-content: center;
`;

export const HeaderError = styled(Header)`
  align-items: start;
  text-align: center;
`;

export const SearchFieldSet = styled.fieldset`
  align-items: start;
  background-color: ${(props) => props.theme.colors.white[100]};
  border: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;

  & button {
    align-self: center;
    margin: 4px;
    width: -webkit-fill-available;
  }

  @media (min-width: 700px) {
    flex-direction: row;

    & button {
      align-self: center;
      margin: 4px;
      margin-left: 12px;
      width: auto;
    }
  }
`;

export const SearchForm = styled.form`
  justify-self: center;
  max-width: 450px;

  @media (min-width: 700px) {
    max-width: 600px;
  }
`;

export const TableButton = styled(PrimaryButton)`
  height: 32px;
  padding: 0 16px;
`;

export const TableButtonTransparent = styled(TableButton)`
  background-color: transparent;
`;

export const TableSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  width: 300px;

  & thead {
    background-color: ${(props) => props.theme.colors.red[100]};
  }
  & th {
    color: ${(props) => props.theme.colors.white[100]};
  }

  & div:nth-child(1) {
    width: 100%;
  }

  @media (min-width: 400px) {
    width: 400px;
  }

  @media (min-width: 700px) {
    width: 700px;

    & div:nth-child(1) {
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    width: calc(100% - 32px);
  }
`;
