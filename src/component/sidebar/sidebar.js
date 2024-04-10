import { Avatar, Box, Button, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import SriResume from '../../assets/pdf/SriShakthi_Resume.pdf';
// import Profile from '../../assets/image/sri.jpg';
function SideBar() {
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: 'center' }}>
            {/* <Avatar variant="rounded" sx={{ width: { xs: "150px", sm: "200px", md: "150px" }, height: { xs: "150px", sm: "200px", md: "150px" }, borderRadius: "50%", backgroundImage: "linear-gradient(#1e746c 95.92%, #E80505 108.2%)", border: "3px solid transparent", position: "absolute" }} src={Profile} /> */}
            <Box className='smallDevice sm' sx={{ backgroundColor: "#FFF", width: "100%", height: { xs: "75vh", sm: "100vh", md: "75vh" }, borderRadius: "12px", pt: '20%', textAlign: "center", mt: { xs: "23%", sm: "10%", md: "30%", lg: "25%" } }}>
                <Typography className='heading name' variant='h5' component='h5'>Sri Shakthi</Typography>
                <Typography className='content year' variant='h6' sx={{ mb: "10px" }} component='h6'>Full Stack Developer</Typography>
                <Box sx={{ justifyContent: "space-around", display: "flex", mx: { xs: "10px", md: "20px" } }}>
                    <a href='https://www.linkedin.com/in/srishakthim/' target='_blank' rel="noreferrer">

                        <IconButton className='socialIcons' sx={{ p: { xs: "20px", md: "10px" } }}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.929688" y="0.671875" width="19.8445" height="19.8453" rx="8.26855" fill="#F2F7FC" />
                                <path d="M5.88945 4.80688C5.88923 5.24547 5.71479 5.66601 5.40451 5.97599C5.09422 6.28596 4.67351 6.45998 4.23491 6.45976C3.79632 6.45954 3.37578 6.2851 3.06581 5.97482C2.75583 5.66453 2.58181 5.24382 2.58203 4.80523C2.58225 4.36664 2.75669 3.9461 3.06698 3.63612C3.37726 3.32614 3.79798 3.15212 4.23657 3.15234C4.67516 3.15256 5.0957 3.327 5.40568 3.63729C5.71565 3.94757 5.88967 4.36829 5.88945 4.80688ZM5.93906 7.68434H2.63164V18.0366H5.93906V7.68434ZM11.1648 7.68434H7.8739V18.0366H11.1317V12.6041C11.1317 9.57783 15.0758 9.2967 15.0758 12.6041V18.0366H18.3419V11.4796C18.3419 6.3779 12.5043 6.56808 11.1317 9.07345L11.1648 7.68434Z" fill="#0077B5" />
                            </svg>

                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/mvsree_ui/' target='_blank' rel="noreferrer">
                        <IconButton className='socialIcons' sx={{ p: { xs: "20px", md: "10px" } }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_43_105)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V6ZM5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7C19 7.26522 18.8946 7.51957 18.7071 7.70711C18.5196 7.89464 18.2652 8 18 8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7ZM9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z" fill="#FF9C1A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_43_105">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </IconButton>
                    </a>
                    <a href='https://github.com/srishakthim' target='_blank' rel="noreferrer">

                        <IconButton className='socialIcons' sx={{ p: { xs: "20px", md: "10px" } }}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2725 2.32617C5.70408 2.32617 2.00391 6.02635 2.00391 10.5947C2.00291 12.3304 2.54847 14.0224 3.5632 15.4305C4.57793 16.8387 6.01029 17.8916 7.65711 18.4399C8.07054 18.5119 8.22599 18.2638 8.22599 18.0463C8.22599 17.8504 8.21524 17.1996 8.21524 16.5067C6.13818 16.8896 5.60073 16.0007 5.43536 15.5352C5.34192 15.297 4.93924 14.5636 4.58783 14.3668C4.29843 14.2122 3.885 13.8294 4.57708 13.8195C5.22864 13.8087 5.69333 14.4189 5.84878 14.667C6.59295 15.9172 7.78114 15.5658 8.25658 15.3491C8.32935 14.8117 8.54598 14.4503 8.78412 14.2436C6.94437 14.0369 5.02193 13.3233 5.02193 10.1606C5.02193 9.261 5.34192 8.51766 5.86945 7.93804C5.78677 7.73132 5.49737 6.8838 5.95214 5.74687C5.95214 5.74687 6.64422 5.53023 8.22599 6.59522C8.8991 6.4084 9.59457 6.31438 10.2931 6.31575C10.996 6.31575 11.6988 6.40835 12.3603 6.5944C13.942 5.51949 14.6341 5.7477 14.6341 5.7477C15.0889 6.88462 14.7995 7.73215 14.7168 7.93886C15.2435 8.51766 15.5643 9.25108 15.5643 10.1606C15.5643 13.3341 13.632 14.0369 11.7914 14.2436C12.0915 14.5016 12.3503 14.9977 12.3503 15.7733C12.3503 16.8788 12.3396 17.7677 12.3396 18.0472C12.3396 18.2638 12.495 18.5218 12.9085 18.4391C14.5496 17.8848 15.9757 16.8298 16.9859 15.4227C17.9962 14.0155 18.5398 12.327 18.5402 10.5947C18.5402 6.02635 14.84 2.32617 10.2716 2.32617H10.2725Z" fill="#0B0909" />
                            </svg>

                        </IconButton>
                    </a>
                </Box>
                <Box className='contactdetails'>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="24" height="24" rx="8.26855" fill="#F2F7FC" />
                            <path d="M16 2.5H8C7.46957 2.5 6.96086 2.71071 6.58579 3.08579C6.21071 3.46086 6 3.96957 6 4.5V20.5C6 21.0304 6.21071 21.5391 6.58579 21.9142C6.96086 22.2893 7.46957 22.5 8 22.5H16C16.5304 22.5 17.0391 22.2893 17.4142 21.9142C17.7893 21.5391 18 21.0304 18 20.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5ZM13 21.5H11V20.5H13V21.5ZM16 19.5H8V5.5H16V19.5Z" fill="url(#paint0_linear_104_299)" />
                            <defs>
                                <linearGradient id="paint0_linear_104_299" x1="12" y1="2.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF9A1A" />
                                    <stop offset="1" stop-color="#EC1C09" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <Box sx={{ textAlign: "left", pl: "15px" }}>
                            <Typography className='contactHeading' variant='h6' component='h6'>Phone</Typography>
                            <Typography className='contactDescription content' variant='h6' component='h6'>+91 9791851810</Typography>
                        </Box>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="21.36" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC" />
                            <path d="M2.97 6.65L12 1L21.03 6.65C21.61 7 22 7.63 22 8.36V18.36C22 19.46 21.1 20.36 20 20.36H4C2.9 20.36 2 19.46 2 18.36V8.36C2 7.63 2.39 7 2.97 6.65ZM4 18.36H20V10.36L12 15.36L4 10.36V18.36ZM12 13.36L20 8.36L12 3.36L4 8.36L12 13.36Z" fill="#FF9C1B" />
                        </svg>

                        <Box sx={{ textAlign: "left", pl: "15px" }}>
                            <Typography className='contactHeading' variant='h6' component='h6'>Email</Typography>
                            <Typography className='contactDescription content' variant='h6' component='h6'>srishakthimoorthy235@gmail.com</Typography>
                        </Box>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="23.5" height="23.499" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC" />
                            <path d="M12.25 2C15.9766 2 19 4.87766 19 8.42188C19 12.5 14.5 18.9627 12.8477 21.1948C12.7791 21.2891 12.6892 21.3657 12.5853 21.4186C12.4814 21.4715 12.3665 21.499 12.25 21.499C12.1335 21.499 12.0186 21.4715 11.9147 21.4186C11.8108 21.3657 11.7209 21.2891 11.6523 21.1948C10 18.9636 5.5 12.5033 5.5 8.42188C5.5 4.87766 8.52344 2 12.25 2Z" stroke="#E80505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.25 11.0154C11.0332 11.0154 10.0469 10.0291 10.0469 8.81241C10.0469 7.59571 11.0332 6.60938 12.25 6.60938C13.4668 6.60938 14.4531 7.59571 14.4531 8.81241C14.4531 10.0291 13.4668 11.0154 12.25 11.0154Z" stroke="#E80505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <Box sx={{ textAlign: "left", pl: "15px" }}>
                            <Typography className='contactHeading' variant='h6' component='h6'>Location</Typography>
                            <Typography className='contactDescription content' variant='h6' component='h6'>Vavanagaram, Tenkasi.</Typography>
                        </Box>
                    </Box>
                    <a href={SriResume} download="SriResume" target='_blank' rel="noreferrer">
                        <Button variant='contained' className='primaryButton content' disableElevation> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z" fill="#F2F7FC" />
                        </svg> &ensp; Download Resume</Button>
                    </a>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar
