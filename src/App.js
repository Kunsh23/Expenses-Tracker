import './App.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpences'; 
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Components/Context/GlobalState';
import { lightTheme, darkTheme, GlobalStyles } from './Components/Theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <GlobalProvider>
            <Header />
            <button className='theme_btn' onClick={toggleTheme}>Toggle Theme</button>
            <div className='container'>
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div>
          </GlobalProvider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
