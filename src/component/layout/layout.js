import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import SideBar from '../sidebar/sidebar';
import MyNavigation from '../navbar/navigation';
import NavBar from '../navbar/navbar';
import Home from '../../pages/home';
import { Route, Routes } from 'react-router-dom';
import Resume from '../../pages/resume';
import Work from '../../pages/work';
import Contact from '../../pages/contact';
import MatrixParallax from 'react-matrix-parallax';
function Layout() {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4} sx={{ mt: "10px" }}>
                            <SideBar />
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <Box sx={{ alignItems: "flex-end", display: "flex", flexDirection: "column", mb: "10px", position: { xs: "sticky", md: "static" }, top: "10px", zIndex: 9999 }}>
                                <MyNavigation />
                            </Box>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/resume' element={<Resume />} />
                                <Route path='/works' element={<Work />} />
                                <Route path='/contact' element={<Contact />} />
                                <Route path='/*' element={<MatrixParallax color="#00AA00" backgroundColor="rgba(0,0,0,1)">
                                    <div style={{ fontSize: "1.7rem" }}>
                                        <h2>404</h2>
                                        <h5 style={{ maxWidth: "100vw" }}>Page Not Found</h5>
                                    </div>
                                </MatrixParallax>} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Layout
