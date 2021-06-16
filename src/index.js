import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './theme'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      
    </Provider>
    {/* <ThemeProvider theme={theme}> */}
      
    {/* </ThemeProvider> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
