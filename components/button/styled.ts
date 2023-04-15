import styled from "styled-components";

/**
 * @component
 * @name Button
 * @description Creates the version for the primary button.
 * @namespace components components/button/styled
 */
export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.red[100]};
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white[100]};
  font-size: 1rem;
  height: 50px;
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
`;
