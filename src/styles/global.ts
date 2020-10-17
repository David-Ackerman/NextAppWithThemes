import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
    font: 400 18px 'Nunito', sans-serif;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Nunito', sans-serif;
    color: var(--text);

    transition: color .2s ease-out;
  }
  ul {
    list-style: none;
  }

  :root {
    ${props => {
      const theme = props.theme;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}

  }
`;
