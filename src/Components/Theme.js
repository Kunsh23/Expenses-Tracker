import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f7f7f7',
  text: '#000000',
  moneyText: '#000000',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  buttonBackground: '#9c88ff',
  buttonTextColor: '#fff',
  moneyPlusColor: '#2ecc71',
  moneyMinusColor: '#c0392b',
  listBackgroundColor: '#fff',
  listBoxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
  deleteBtnBackground: '#e74c3c',
  deleteBtnColor: '#fff',
};

export const darkTheme = {
  background: '#333333',
  text: '#ffffff',
  moneyTextColor: '#000000',
  boxShadow: '0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24)',
  buttonBackground: '#9c88ff',
  buttonTextColor: '#fff',
  moneyPlusColor: '#2ecc71',
  moneyMinusColor: '#c0392b',
  listBackgroundColor: '#333',
  listBoxShadow: '0 1px 3px rgba(255, 255, 255, 0.12)',
  deleteBtnBackground: '#e74c3c',
  deleteBtnColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --box-shadow: ${(props) => props.theme.boxShadow};
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;
