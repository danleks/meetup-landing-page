import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #016CC7;
    --red: #DD5138;
    --lightBlack: #404142;
    --midBlack: #3A3A3A;
    --black: #2A2A2A;
    --yellow: #FCD93B;
    --white: #F9F9F9;
    --grey: #E5E5E5;
    --lightGrey: #f6f6f6;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    letter-spacing: .8px;
  }


  button, .button {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--red);
    color: var(--white);
    border: 0;
    padding: 1.5rem 4rem;
    border-radius: 4px;
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
      color: var(--black);
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  section {
    padding: 4rem 1rem 8rem;

    @media (min-width: 992px) {
      padding: 8rem 0 0 0;
    }
  }
  
  .center {
    text-align: center;
  }
  
  ul {
    padding: 0;
  }
`;

export default GlobalStyles;