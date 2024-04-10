import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={false} position="static" sx={{ color: "#000", backgroundColor: "#F2F5F9", minHeight: "100px", justifyContent: 'center' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sri <span className ='brand'>Shakthi</span>
                    </Typography>
                    <Button onClick={() => window.location = 'mailto:srishakthimoorthy235@gmail.com?subject=Job Offer: [Job Title] Position at [Company Name]&body=Hii Sri,'} variant='contained' className='primaryButton content' disableElevation>Hire</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}