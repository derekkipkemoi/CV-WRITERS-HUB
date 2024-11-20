import React from 'react';
import { Box, Button, Typography, AppBar, Toolbar } from '@mui/material';

function Header(): React.JSX.Element { // Changed to function declaration with return type
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <img
          src="/assets/cv.png" // Replace with your logo's path
          alt="Logo"
          style={{ height: '40px', marginRight: '16px' }} // Adjust height and margin as needed
        />
        <Typography variant="h6" sx={{ flexGrow: 1, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
          CV WRITERS HUB
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              mr: 2,
              padding: '8px 16px',  // Adjust padding as needed
              borderColor: 'white',  // Set border color to white or another color
              color: 'white',        // Set text color to match the border
              '&:hover': {
                borderColor: 'white',  // Border color on hover
                backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Optional: Light hover effect
              }
            }}
          >
            Log in
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
