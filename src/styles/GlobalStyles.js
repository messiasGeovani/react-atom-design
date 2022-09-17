import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #5138ED;
    --primary-hover: #5d4adb;
    --primary-active: #7364d6;

    --success: #30AB42;
    --success-hover: #4abf5a;
    --success-active: #60c46d;
    
    --secondary: #3521B5;
    --tertiary: #DCE0FE;

    --danger: red;
  }
`;
