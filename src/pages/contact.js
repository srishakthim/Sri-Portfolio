import { Box, Button, FormLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
function Contact() {
    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "12px", p: "20px" }}>
            <Typography variant='h3' component='h3' className='heading'>CONTACT</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box className='card pink' sx={{ mt: "10px" }}>
                        <Typography className='heading icon title' variant='h6' component='h6'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C21.9995 9.348 20.9457 6.80477 19.0705 4.92952C17.1952 3.05427 14.652 2.00053 12 2V4C13.5821 4.00036 15.1286 4.46964 16.4441 5.34854C17.7596 6.22744 18.7851 7.47653 19.391 8.938C19.7931 9.90877 20.0001 10.9492 20 12H22ZM2 10V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H8C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5V9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10H6C6 12.1217 6.84285 14.1566 8.34315 15.6569C9.84344 17.1571 11.8783 18 14 18V16C14 15.7348 14.1054 15.4804 14.2929 15.2929C14.4804 15.1054 14.7348 15 15 15H19C19.2652 15 19.5196 15.1054 19.7071 15.2929C19.8946 15.4804 20 15.7348 20 16V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H14C7.373 22 2 16.627 2 10Z" fill="url(#paint0_linear_108_560)" />
                                <path d="M17.543 9.704C17.8449 10.4318 18.0002 11.2121 18 12H16.2C16.2001 11.4484 16.0916 10.9022 15.8806 10.3926C15.6695 9.88295 15.3602 9.41989 14.9701 9.02986C14.5801 8.63983 14.1171 8.33046 13.6074 8.11944C13.0978 7.90841 12.5516 7.79987 12 7.8V6C13.1867 6.00006 14.3466 6.352 15.3333 7.0113C16.3199 7.6706 17.0889 8.60767 17.543 9.704Z" fill="url(#paint1_linear_108_560)" />
                                <defs>
                                    <linearGradient id="paint0_linear_108_560" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9A1A" />
                                        <stop offset="1" stop-color="#E80505" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_108_560" x1="15" y1="6" x2="15" y2="12" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9A1A" />
                                        <stop offset="1" stop-color="#E80505" />
                                    </linearGradient>
                                </defs>
                            </svg> &nbsp;  Phone :</Typography>
                        <Typography variant='p' component='p' className='content'>&ensp; &ensp; &ensp; +91 9791851810</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='card blue'>
                        <Typography className='heading icon title' variant='h6' component='h6'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7078 13.0953C11.0478 13.0953 10.5078 12.5553 10.5078 11.8953C10.5078 11.2353 11.0478 10.6953 11.7078 10.6953C12.3678 10.6953 12.9078 11.2353 12.9078 11.8953C12.9078 12.5553 12.3678 13.0953 11.7078 13.0953Z" fill="url(#paint0_linear_108_564)" />
                            <path d="M12 17.25C13.3924 17.25 14.7277 16.6969 15.7123 15.7123C16.6969 14.7277 17.25 13.3924 17.25 12C17.25 10.6076 16.6969 9.27226 15.7123 8.28769C14.7277 7.30312 13.3924 6.75 12 6.75C10.6076 6.75 9.27226 7.30312 8.28769 8.28769C7.30312 9.27226 6.75 10.6076 6.75 12C6.75 13.3924 7.30312 14.7277 8.28769 15.7123C9.27226 16.6969 10.6076 17.25 12 17.25ZM12 8.625C13.8375 8.6475 15.33 10.185 15.33 12.0375V12.645C15.33 13.3125 14.7825 13.86 14.115 13.86C13.6575 13.86 13.26 13.605 13.05 13.23C12.705 13.575 12.225 13.7925 11.7 13.7925C10.65 13.7925 9.795 12.9375 9.795 11.8875C9.795 10.8375 10.65 9.9825 11.7 9.9825C12.1575 9.9825 12.57 10.1475 12.9 10.41V10.3425C12.9 10.1475 13.0725 9.99 13.2675 9.99C13.4625 9.99 13.62 10.1475 13.62 10.3425V12.6525C13.62 12.7858 13.6729 12.9136 13.7672 13.0078C13.8614 13.1021 13.9892 13.155 14.1225 13.155C14.2558 13.155 14.3836 13.1021 14.4778 13.0078C14.5721 12.9136 14.625 12.7858 14.625 12.6525V12.045C14.625 10.5675 13.44 9.3525 11.9925 9.33C11.2725 9.33 10.59 9.6 10.08 10.1025C9.57 10.605 9.285 11.28 9.285 12C9.285 13.47 10.485 14.67 11.955 14.67C12.0485 14.67 12.1381 14.7071 12.2043 14.7732C12.2704 14.8394 12.3075 14.929 12.3075 15.0225C12.3075 15.116 12.2704 15.2056 12.2043 15.2718C12.1381 15.3379 12.0485 15.375 11.955 15.375C10.095 15.375 8.58 13.86 8.58 12C8.58 11.0925 8.9325 10.2375 9.585 9.6C10.23 8.955 11.0925 8.61 12 8.625Z" fill="url(#paint1_linear_108_564)" />
                            <path d="M0.750002 5.2575C0.750002 4.4235 1.4235 3.75 2.2575 3.75H21.75C22.5818 3.75 23.25 4.428 23.25 5.2575V18.75C23.25 19.5817 22.572 20.25 21.7425 20.25H2.2575C2.05945 20.2503 1.86329 20.2115 1.68026 20.1359C1.49722 20.0602 1.33092 19.9492 1.19088 19.8091C1.05083 19.6691 0.939804 19.5028 0.86415 19.3197C0.788496 19.1367 0.749705 18.9406 0.750002 18.7425V5.2575ZM2.25 5.25375V5.6265L7.0125 8.661C6.73101 9.07989 6.5037 9.53274 6.336 10.0087L2.25 7.40475V17.01L6.465 14.3243C6.65955 14.7872 6.91153 15.2239 7.215 15.624L2.31 18.75H21.7013L16.7835 15.6202C17.0871 15.2197 17.3391 14.7825 17.5335 14.319L21.75 17.0033V7.41L17.661 10.0125C17.4938 9.53632 17.267 9.08322 16.986 8.664L21.75 5.63325V5.25225L21.747 5.25H2.25375L2.2515 5.2515L2.25075 5.253L2.25 5.25375Z" fill="url(#paint2_linear_108_564)" />
                            <defs>
                                <linearGradient id="paint0_linear_108_564" x1="11.7078" y1="10.6953" x2="11.7078" y2="13.0953" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF961A" />
                                    <stop offset="1" stop-color="#EC1908" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_108_564" x1="12" y1="6.75" x2="12" y2="17.25" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF961A" />
                                    <stop offset="1" stop-color="#EC1908" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_108_564" x1="12" y1="3.75" x2="12" y2="20.25" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF961A" />
                                    <stop offset="1" stop-color="#EC1908" />
                                </linearGradient>
                            </defs>
                        </svg>  &nbsp; Email :</Typography>
                        <Typography variant='p' component='p' className='content'>&ensp; &ensp; &ensp; srishakthimoorthy235@gmail.com</Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} >
                    <Box className='card blue' sx={{ p: 4 }}>
                        <Typography variant='p' component='p' className='content' sx={{ mb: "15px" }}>
                        I am eager to engage in conversations about fresh projects, potential ventures in the tech realm, collaboration opportunities, and particularly mentoring initiatives.
                        </Typography>
                        <FormLabel>Name</FormLabel>
                        <TextField variant='standard' size='small' fullWidth sx={{ mb: "15px" }} />
                        <FormLabel>Email</FormLabel>
                        <TextField variant='standard' size='small' fullWidth sx={{ mb: "15px" }} />
                        <FormLabel>Message</FormLabel>
                        <TextField variant='standard' size='small' fullWidth sx={{ mb: "15px" }} />
                        <Button className='primaryButton' variant='contained' disableElevation> Submit</Button>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Contact
