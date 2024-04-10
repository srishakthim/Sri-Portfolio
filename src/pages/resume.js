import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
function Resume() {
    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "12px", p: "20px" }}>
            <Typography variant='h3' component='h3' className='heading'>RESUME</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography className='heading icon title' variant='h6' component='h6'>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.15625 10.6821L13.304 5.82812L25.4517 10.6821L13.304 15.5361L1.15625 10.6821Z" stroke="url(#paint0_linear_157_651)" stroke-width="2.31143" stroke-linejoin="round" />
                            <path d="M25.4492 10.7461V16.0757M6.67578 13.2396V20.4293C6.67578 20.4293 9.45528 23.1643 13.3015 23.1643C17.1483 23.1643 19.9278 20.4293 19.9278 20.4293V13.2396" stroke="url(#paint1_linear_157_651)" stroke-width="2.31143" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_157_651" x1="13.304" y1="5.82812" x2="13.304" y2="15.5361" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9C1B" />
                                    <stop offset="1" stop-color="#EC1B09" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_157_651" x1="16.0625" y1="10.7461" x2="16.0625" y2="23.1643" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9C1B" />
                                    <stop offset="1" stop-color="#EC1B09" />
                                </linearGradient>
                            </defs>
                        </svg>
                        &nbsp;
                        Education</Typography>
                    <Box className='card pink' sx={{ mt: "10px" }}>
                        <Typography component='h6' variant='h6' className='year'>2020 - 2023</Typography>
                        <Typography component='h6' variant='h6' className='role'>Bsc Information Technology</Typography>
                        <Typography component='h6' variant='h6' className='at'>Sri Parasakthi College For Women</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography className='heading icon title' variant='h6' component='h6'>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2283 9.88068V7.56924C10.2283 6.95621 10.4719 6.36829 10.9053 5.93482C11.3388 5.50134 11.9267 5.25781 12.5398 5.25781H17.1626C17.7757 5.25781 18.3636 5.50134 18.7971 5.93482C19.2305 6.36829 19.4741 6.95621 19.4741 7.56924V9.88068M5.60547 16.815L9.24597 17.7245C12.9262 18.6444 16.7762 18.6444 20.4564 17.7245L24.0969 16.815" stroke="url(#paint0_linear_157_646)" stroke-width="2.31143" stroke-linecap="round" />
                            <path d="M5.60547 12.1923C5.60547 11.5793 5.84899 10.9913 6.28247 10.5579C6.71595 10.1244 7.30387 9.88086 7.9169 9.88086H21.7855C22.3985 9.88086 22.9864 10.1244 23.4199 10.5579C23.8534 10.9913 24.0969 11.5793 24.0969 12.1923V21.438C24.0969 22.051 23.8534 22.639 23.4199 23.0724C22.9864 23.5059 22.3985 23.7495 21.7855 23.7495H7.9169C7.30387 23.7495 6.71595 23.5059 6.28247 23.0724C5.84899 22.639 5.60547 22.051 5.60547 21.438V12.1923Z" stroke="url(#paint1_linear_157_646)" stroke-width="2.31143" stroke-linejoin="round" />
                            <path d="M14.8471 15.6571C15.4854 15.6571 16.0028 15.1397 16.0028 14.5014C16.0028 13.8631 15.4854 13.3457 14.8471 13.3457C14.2088 13.3457 13.6914 13.8631 13.6914 14.5014C13.6914 15.1397 14.2088 15.6571 14.8471 15.6571Z" fill="url(#paint2_linear_157_646)" />
                            <defs>
                                <linearGradient id="paint0_linear_157_646" x1="14.8512" y1="5.25781" x2="14.8512" y2="18.4144" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9C1A" />
                                    <stop offset="1" stop-color="#E80505" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_157_646" x1="14.8512" y1="9.88086" x2="14.8512" y2="23.7495" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9C1A" />
                                    <stop offset="1" stop-color="#E80505" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_157_646" x1="14.8471" y1="13.3457" x2="14.8471" y2="15.6571" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9C1A" />
                                    <stop offset="1" stop-color="#E80505" />
                                </linearGradient>
                            </defs>
                        </svg>

                        &nbsp;
                        Experience</Typography>
                    <Box className='card pink' sx={{ mt: "10px" }}>
                        <Typography component='h6' variant='h6' className='year'>2023 - Present</Typography>
                        <Typography component='h6' variant='h6' className='role'>Full Stack Developer</Typography>
                        <Typography component='h6' variant='h6' className='at'>Kite Career</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography className='heading icon title' variant='h6' component='h6'>Work Skills</Typography>
                    <Box sx={{ mt: "10px", display: "flex", flexWrap: "wrap" }}>
                        <Typography className='content chip'>HTML</Typography>
                        <Typography className='content chip'>CSS</Typography>
                        <Typography className='content chip'>Java Script</Typography>
                        <Typography className='content chip'>Bootstrap</Typography>
                        <Typography className='content chip'>ReactJS</Typography>
                        <Typography className='content chip'>Material UI</Typography>
                        <Typography className='content chip'>NodeJS</Typography>
                        <Typography className='content chip'>MongoDB</Typography>
                        <Typography className='content chip'>Git & GitHub</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography className='heading icon title' variant='h6' component='h6'>Soft Skills</Typography>
                    <Box sx={{ mt: "10px", display: "flex", flexWrap: "wrap" }}>
                        <Typography className='content chip'>Team Leadership</Typography>
                        <Typography className='content chip'>Time Management</Typography>
                        <Typography className='content chip'>Flexibility</Typography>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Resume
