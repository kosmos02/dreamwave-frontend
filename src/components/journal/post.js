import React from 'react'
import {
    Paper, Accordion, AccordionSummary, AccordionDetails,
    Avatar, TextField, Checkbox, FormControlLabel,
    InputLabel, Select, FormControl, Typography, Divider, IconButton, Icon,
    Chip, Grid, Button,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Headshot from '../../images/headhsot.jpeg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TAG, DELETE_TAG } from '../../Redux/types'

function Post() {
    const dispatch = useDispatch()
    const tags = useSelector(state => state.currentTags)
    console.log(tags)

    const [expanded, setExpanded] = useState(false)
    const [tag, addChar] = useState('')

    const expandAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const handleChangeTag = (event) => {
        addChar(event.target.value)
    }

    // useEffect(addTag, [])

    function addTag(tag) {
        dispatch({ type: ADD_TAG, payload: tag })
    }

    function deleteTag(tag) {
        dispatch({ type: DELETE_TAG, payload: tag })
    }

    function makeChips() {
        return (
            tags.map(tag => {
                return (
                    <Chip
                        label={tag}
                        onDelete={() => deleteTag(tag)}
                    />
                )
            })
        )
    }

    return (

        <Accordion id='accordion' expanded={expanded === 'panel1'} onChange={expandAccordion('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="post-accordion-summary"
            >
                <Avatar alt='Alex Gabriel' src={Headshot} />
                <Typography id='post-heading'>Post</Typography>
                {makeChips()}

            </AccordionSummary>
            <AccordionDetails>
                <form id='post-form'>
                    <Grid container justify='space-evenly' spacing={0}>
                        {/* <Grid container justify='space-around'> */}
                        <TextField
                            id='date'
                            className='input'
                            label='DreamDay'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label='Lucid'
                            className='input'
                        />


                        <FormControl className='input' variant='outlined'>
                            <InputLabel htmlFor='type'>Type</InputLabel>
                            <Select
                                native
                                label="Type"
                                inputProps={{
                                    name: 'type',
                                    id: 'type'
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={'postitive'}>Positive</option>
                                <option value={'neutral'}>Neutral</option>
                                <option value={'nightmare'}>Nightmare</option>
                            </Select>

                        </FormControl>
                        {/* </Grid> */}
                        
                        <Grid item>
                            <TextField className='input' id='tag-input' label='Tags' onChange={handleChangeTag} />

                            <IconButton onClick={() => addTag(tag)}>
                                <AddIcon />
                            </IconButton>
                        </Grid>



                        {/* <Divider orientation='vertical' flexItem /> */}
                        <Grid id='post-text' container justify='space-evenly'>
                            <Grid item xs={10}>
                                <TextField variant='outlined' fullWidth />

                            </Grid>
                            <Grid item>
                                <Button color='inherit'>POST</Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </form>


            </AccordionDetails>
        </Accordion>




    )
}

export default Post