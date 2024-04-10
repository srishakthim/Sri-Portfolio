import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Home() {
    return (
        <Box sx={{ backgroundColor: "#FFF", borderRadius: "12px", p: "20px" }}>
            <Typography variant='h3' component='h3' className='heading'>ABOUT ME</Typography>
            <Typography variant='p' component='p' className='content' sx={{ textAlign: "justify", py: "10px" }}>    
            Greetings! I'm excited to introduce you to my portfolio. As a dedicated <b>full-stack developer</b>, I possess a fervent enthusiasm for delving into the most recent advancements in technology. My voyage through the realm of web development has been both thrilling and fulfilling, driving me to consistently elevate my skills and adapt to the latest trends shaping the industry.
            </Typography>
            <Typography variant='h5' component='h5' className='heading title' sx={{ py: "10px" }}>What I do!</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} >
                    <Box className='card pink'>
                        <Typography className='heading icon title card-title' variant='h6' component='h6'>  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#FF9C1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 10V12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12V10M14 10L17 14M14 14L17 10" stroke="#FF9C1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>&nbsp;   UI/UX Designer</Typography>
                        <Typography variant='p' component='p' className='content'>    
                        As a UI/UX designer, I'm constantly drawn to the dynamic possibilities of creating engaging and user-centric experiences. I'm passionate about exploring new projects that push the boundaries of design, seeking innovative ways to craft intuitive and visually appealing interfaces that prioritize user satisfaction and accessibility.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='card blue'>
                        <Typography className='heading icon title card-title' variant='h6' component='h6'> <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z" fill="#E80505" />
                        </svg> &nbsp; Frontend Development</Typography>
                        <Typography variant='p' component='p' className='content'>
                        As a developer, I find myself most captivated by the power and flexibility of frontend development. I'm always eager to dive into new projects and discover innovative ways to create fast, scalable, and user-friendly applications
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className='card blue'>
                        <Typography className='heading icon title card-title' variant='h6' component='h6'> <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8881 0L13.8481 0.4L10.1081 18L8.14812 17.6L11.8881 0ZM18.5881 9L14.9981 5.41V2.58L21.4181 9L14.9981 15.41V12.58L18.5881 9ZM0.578125 9L6.99813 2.58V5.41L3.40812 9L6.99813 12.58V15.41L0.578125 9Z" fill="#E80505" />
                        </svg> &nbsp; Backend Development</Typography>
                        <Typography variant='p' component='p' className='content'>
                        I am constantly enthusiastic about exploring fresh projects that harness the power of ExpressJS/NodeJS. My goal is to uncover inventive approaches to develop swift and efficient REST APIs catering to various applications.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Home
