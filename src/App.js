import React, { Component } from 'react'
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import NavBar from './components/navbar'
import { Typography, Button, CssBaseline, Grid, } from '@material-ui/core';


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
          <div className="title">
            <Typography variant="h1">DreamWave</Typography>
          </div>

          <div id="journal-about">
            <Typography id="journal-text" variant='body1'>
              Here you can make a post about the dream you had.
              It includes the date, whether it was a positive dream, neutral, or nightmare,
              if it was a lucid dream (where you have full or partial control), a description,
              and any associated tags you want to keep track of.
              Friends can comment on your dream to help you interpret it!
              The information you put here will be used for analytics.
          </Typography>
          </div>
        </Grid>

      </Router>


    )
  }
}



export default App;
