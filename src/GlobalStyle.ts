import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*::before,
*::before {
  box-sizing: inherit;
}
 ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

body {
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-style: 400;
  font-size: 14px;
}

#root {
  width: 100%;
  height: 100%;
  max-width: 1406px;
  margin: 0 auto;
  padding: 0 20px;
}
`;

export default GlobalStyle;
