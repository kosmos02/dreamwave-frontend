import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './theme'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const count = (state=0, action) => {
  switch(action.type){
    default:
      return state
}
   
}

const postAccordion = (state= false, action) => {
  switch(action.type){
    default:
      return state
  }
}

const currentTags = (state=[], action) => {
  switch(action.type){
    case "ADD_TAG":
      state= [...state, action.payload]
      return state
    case "DELETE_TAG":
      // state = [...state.filter(tag => tag !== action.payload)]
      
      return state.filter(tag => tag !== action.payload)
        
    default:
      return state
  }
}

const characters = (state= [], action) => {
  switch(action.type){
    case "SET_CHARACTERS":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  count,
  characters,
  currentTags,
})

const store = createStore(rootReducer)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
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
