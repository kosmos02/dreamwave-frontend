
import Title from '../journal/title'
import { Box, Typography } from '@material-ui/core'


function About(){
    

    return(
        <>

            <Title/>
            <Box>
                <Typography>
                    Dreamwave is a web-app where you can journal your dreams. There is a dictionary section where you can look up and try to interpret the meaning of dreams. Coming soon will be an analytics section that will digest the data of your dreams and hopefully shed some light on some patterns.
                </Typography>
            </Box>
        </>
    )
}

export default About