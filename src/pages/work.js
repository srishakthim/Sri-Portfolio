import { Box, Divider, Grid, Typography } from '@mui/material';
import Interior from '../assets/image/wire.png';
import Music from '../assets/image/music.png';
import Food from '../assets/image/BlueTheme.png';
import Portfolio from '../assets/image/SriPortfolio.png';
import React from 'react';
function Work() {
    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "12px", p: "20px" }}>
            <Typography variant='h3' component='h3' className='heading' sx={{ mb: "20px" }}>PORTFOLIO <Divider /></Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box>
                            <img style={{ borderRadius: "12px" }} height='30%' width='100%' alt='interior' src={Interior} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Static Web Design</Typography>
                                <Typography variant='p' component='p' className='content role'>Interior Design App</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box >
                            <img style={{ borderRadius: "12px" }} width='100%' alt='music' src={Music} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Static Web Design</Typography>
                                <Typography variant='p' component='p' className='content role'>Music App Design</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box >
                            <img style={{ borderRadius: "12px" }} width='100%' alt='food' src={Food} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Dynamic Website</Typography>
                                <Typography variant='p' component='p' className='content role'>Chat App</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Box >
                            <img style={{ borderRadius: "12px" }} width='100%' alt='Portfolio' src={Portfolio} />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography className='year heading' variant='h6' component='h6'>Dynamic Website</Typography>
                                <Typography variant='p' component='p' className='content role'>My Portfolio</Typography>
                            </Box>
                            {/* <Button variant='contained' className='primaryButton'>Live Demo</Button> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Work
