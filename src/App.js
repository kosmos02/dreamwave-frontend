import React, { Component } from 'react'
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import NavBar from './components/navbar'
import { Typography, Button, CssBaseline, Grid, Box, Paper, Avatar} from '@material-ui/core';
import theme from './theme';
import Headshot from './images/headhsot.jpeg'


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
          <Box className="title">
            <Typography variant="h1">DreamWave</Typography>
          </Box>

          <Box id="journal-about">
            <Typography id="journal-text" variant='body1'>
              Here you can make a post about the dream you had.
              It includes the date, whether it was a positive dream, neutral, or nightmare,
              if it was a lucid dream (where you have full or partial control), a description,
              and any associated tags you want to keep track of.
              Friends can comment on your dream to help you interpret it!
              The information you put here will be used for analytics.
          </Typography>
          </Box>
          <Paper id='post-box' elevation={3} variant='outline'>
            <Avatar alt='Alex Gabriel' src={Headshot}/>
          </Paper>
          
        </Grid>

      </Router>


    )
  }
}



export default App;
