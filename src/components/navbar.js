import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    buttonText: {
        colorInherit: 'white'
    }
})

const NavBar = () => {
    const classes = useStyles()

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        DreamWave
                    </Typography>
                        <Button>Journal</Button>
                        <Button>Dictionary</Button> 
                        <Button>Analytics</Button>
                        <Button>About</Button>
                        <Button>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar