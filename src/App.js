import React, { Component } from 'react'
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { Route } from 'react-router-dom'
import NavBar from './components/navbar'
import { Button, CssBaseline, Grid, Box, } from '@material-ui/core';
// import theme from './theme';
import Journal from './components/journal/journal'
// import Dictionary from './components/dictionary/dictionary'
// import Analytics from './components/analytics/analytics'
import About from './components/about/about'


class App extends Component {

  render() {
    return (
      <>
        <CssBaseline />
        <NavBar />
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Route
            exact
            path='/'
            render={(routerProps) => <Journal {...routerProps} />}
            />
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path='/about' component={About} />} */}
          

          
        </Grid>

      </>
    )
  }
}



export default App;
