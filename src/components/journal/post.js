import React from 'react'
import {
    Paper, Accordion, AccordionSummary, AccordionDetails,
    Avatar, TextField, Checkbox, FormControlLabel,
    InputLabel, Select, FormControl, Typography, Divider, IconButton, Icon,
    Chip, Grid, Button,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Headshot from '../../images/headshot.jpeg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TAG, DELETE_TAG } from '../../Redux/types'
import { ADD_DREAMS, ADD_DREAM } from '../../Redux/types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    chips: {
        background : 'linear-gradient(93deg, rgba(25,189,232,1) 0%, rgba(10,238,252,1) 100%)'
    }
})

function Post() {
    const classes = useStyles()
    const baseURL = 'http://localhost:4000'

    const dispatch = useDispatch()
    const tags = useSelector(state => state.currentTags)
    // const dreamlog = useSelector(state => state.dreams)

    const [expanded, setExpanded] = useState(false)
    const [tag, setCharTag] = useState('')
    let [postTextField, setCharTextField] = useState('')
    const [typeSelect, setTypeSelect] = useState('')
    const [datePicker, setDatePicker] = useState('')
    const [checked, setChecked] = useState(false)

    const expandAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const handleChangeTag = (event) => {
        setCharTag(event.target.value)
    }

    const handleChangePostField = (event) => {
        setCharTextField(event.target.value)
    }

    const handleChangeTypeSelect = (event) => {
        setTypeSelect(event.target.value)
    }

    const handleChangeDatePicker = (event) => {
        setDatePicker(event.target.value)
    }

    const handleChangeCheckbox = (event) => {
        setChecked(event.target.checked)
    }
    

    // useEffect(() => {
    //     fetch(`${baseURL}/dreams`)
    //         .then(response => response.json())
    //         .then(dreams => {
    //             dispatch({ type: ADD_DREAMS, payload: dreams})
    //         })
    // }, [])

    function addTag(tag ) {
        if (tags.length < 6){
            dispatch({ type: ADD_TAG, payload: tag })
        }     
    }

    function deleteTag(tag) {
        dispatch({ type: DELETE_TAG, payload: tag })
    }

    function makeChips() {
        return (
            tags.map(tag => {
                return (
                    <Chip
                        className={classes.chips}
                        label={tag}
                        onDelete={() => deleteTag(tag)}
                    />
                )
            })
        )
    }

    const postDream = {
        date: datePicker,
        lucid: checked,
        type: typeSelect,
        tagsarray: tags,
        details: postTextField
    }

    function postClick(){
        fetch(`${baseURL}/dreams`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postDream)
        })
            .then(response => response.json())
            dispatch({ type: ADD_DREAM, payload: postDream})
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
                            onChange={handleChangeDatePicker}
                        />


                        <FormControlLabel
                            control={
                                <Checkbox onChange={handleChangeCheckbox} />
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
                                value={typeSelect}
                                onChange={handleChangeTypeSelect}
                            >
                                <option aria-label="None" value="" />
                                <option value={'positive'}>Positive</option>
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
                                <TextField variant='outlined' fullWidth onChange={handleChangePostField} />

                            </Grid>
                            <Grid item>
                                <Button 
                                    color='inherit'
                                    onClick={() => postClick()}
                                >
                                POST
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </form>


            </AccordionDetails>
        </Accordion>




    )
}

export default Post