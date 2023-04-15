import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

  body {
    font-family: Roboto, sans-serif;
  }

  #__next {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 15% 25% 60%;
    gap: 0px 0px;
    grid-template-areas:
      "."
      "."
      ".";
    height: 100%;

    @media (min-width: 700px) {
      grid-template-rows: 15% 15% 1fr;
    }
  }

  body {
    background: #0693e3;
  }
`;
