import React, { Component } from 'react'
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import NavBar from './components/navbar'
import { Button, CssBaseline, Grid, Box, } from '@material-ui/core';
// import theme from './theme';
import Journal from './components/journal/journal'


class App extends Component {

  render() {
    return (
      <Router>
        <CssBaseline />
        <NavBar />
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Journal />

          
        </Grid>

      </Router>


    )
  }
}



export default App;
