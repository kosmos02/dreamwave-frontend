import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_DREAMS } from '../../Redux/types'
import { Grid, Paper, Box, Typography, Chip } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Headshot from '../../images/headshot.jpeg'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    positive: {
        background: 'linear-gradient(93deg, rgba(25,232,188,1) 0%, rgba(39,227,80,1) 100%)'
    },
    neutral: {
        background: 'linear-gradient(93deg, rgba(232,202,25,1) 0%, rgba(236,249,30,1) 100%)'
    },
    nightmare: {
        background: 'linear-gradient(93deg, rgba(232,49,25,1) 0%, rgba(243,30,249,1) 100%)'
    },
    chips: {
        background : 'linear-gradient(93deg, rgba(25,189,232,1) 0%, rgba(10,238,252,1) 100%)'
    }
})


function Entries(){
    const baseURL = 'http://localhost:4000'
    const dreamlog = useSelector(state => state.dreams)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`${baseURL}/dreams`)
            .then(response => response.json())
            .then(dreams => {
                dispatch({ type: ADD_DREAMS, payload: dreams})
            })
    }, [])

    const classes = useStyles()

    const dreamColor = (dream) => {
        switch (dream.type) {
            case 'positive':
                return classes.positive
            case 'neutral':
                return classes.neutral
            case 'nightmare':
                return classes.nightmare
            default:
                return null
        }
    }


    const displayDreams = () => {
        console.log(dreamlog)
        return (
            dreamlog.map(dream => {
                return(
                    <Card variant='elevation' className={[dreamColor(dream), 'dream']}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label='profile' src={Headshot}/>
                            }
                            
                            title={dream.date}
                            subheader={dream.lucid === true ? 'Lucid' : null}
                            action={
                                <IconButton aria-label='delete'>
                                    <DeleteIcon fontSize='small'/>
                                </IconButton>
                            }
                        />
    
                        <CardContent>
                            <Typography>
                                {dream.details}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            {dream.tagsarray.map(tag => (
                                <Chip className={classes.chips} label={tag}/>
                            ))}
                        </CardActions>
                    </Card>
                )
            })
        )
    }

    return(
        <Grid>
            <Grid id='legend'>
                <Chip className={classes.positive} label='Positive'/>
                <Chip className={classes.neutral} label='Neutral'/>
                <Chip className={classes.nightmare} label='Nightmare'/>
            </Grid>
            {displayDreams()}
        </Grid>
    )
}

export default Entries