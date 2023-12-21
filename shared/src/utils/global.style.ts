'use client';
import { createGlobalStyle } from 'styled-components';
export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620'
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1'
};

export const GlobalStyle = createGlobalStyle`
html {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  scroll-behavior: smooth;
  box-sizing: border-box;
}
body {
  font-family: inherit;
  line-height: inherit;
  margin: 0
}
h1,
h2,
p,
pre {
  margin: 0;
}
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}
h1,
h2 {
  font-size: inherit;
  font-weight: inherit;
}
`;
