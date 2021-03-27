import React from 'react'
import { Box, Typography } from '@material-ui/core'

function Explanation() {
    return (
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
    )
}

export default Explanation