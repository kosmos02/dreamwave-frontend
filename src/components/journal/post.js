import React from 'react'
import { Paper, Accordion, AccordionSummary, AccordionDetails,
Avatar, TextField, Checkbox, FormControlLabel, 
InputLabel, Select, FormControl } from '@material-ui/core'
import Headshot from '../../images/headhsot.jpeg'

function Post() {
    return (
        <Paper id='post-box' elevation={3} variant='outline'>
            <Avatar alt='Alex Gabriel' src={Headshot} />
            <form id='post-form'>
                <TextField
                    id='date'
                    label='DreamDay'
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControlLabel
                control={
                    <Checkbox/>
                }
                label='Lucid'
                />
                <FormControl variant='outlined'>
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
            </form>
        </Paper>

    )
}

export default Post