import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <HomePage/>
    </ThemeProvider>
  );
}

export default App;
