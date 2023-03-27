import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "black"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Appbar;