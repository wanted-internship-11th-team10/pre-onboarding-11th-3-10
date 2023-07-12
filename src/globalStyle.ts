import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
      max-width: 500px;
      margin: 30px auto;
    }

`;

export default GlobalStyle;
