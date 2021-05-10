import React from 'react'
import Title from './title'
import Explanation from './explanation'
import Post from './post'
import Entries from './entries'
import { Grid } from '@material-ui/core'

function Journal() {

    return (
        <>
            <Title />
            <Explanation />
            <Post/>
            <Entries/>
        </>

    )
}

export default Journal