import React from 'react'
import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    buttonText: {
        color: 'white'
    }
})

const NavBar = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        DreamWave
                    </Typography>
                    <Button className={classes.buttonText} >Journal</Button>
                    <Button className={classes.buttonText}>Dictionary</Button>
                    <Button className={classes.buttonText}>Analytics</Button>
                    <Button className={classes.buttonText}>About</Button>
                    <Button 
                        className={classes.buttonText} 
                        aria-controls="simple-menu" 
                        aria-haspopup='true' 
                        onClick={handleClick}>Account</Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar