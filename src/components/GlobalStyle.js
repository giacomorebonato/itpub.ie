import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway', sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Raleway");
  }

  body {
    font-family: 'Raleway';
  }
`

export { GlobalStyle }
