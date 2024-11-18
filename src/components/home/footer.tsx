import React from 'react';
import { Box, Container, Grid, Typography, Link, Avatar } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'primary.main' }}>
      <Container>
        {/* Payment Methods Section */}
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: 'white', mb: 1, textAlign: 'center' }}>
              We accept the following payment methods:
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"  // Center the content horizontally
              sx={{ mb: 2 }}
            >
              {/* Payment Method Icons */}
              <Avatar
                src="/assets/master.png"
                alt="M-Pesa"
                sx={{ width: 66, height: 56, marginRight: 2 }} // Consistent width and height
              />
              <Avatar
                src="/assets/visa.png"
                alt="Credit Card"
                sx={{ width: 66, height: 56, marginRight: 2 }} // Consistent width and height
              />
              <Avatar
                src="/assets/paypal.png"
                alt="PayPal"
                sx={{ width: 66, height: 56, marginRight: 2 }} // Consistent width and height
              />
              <Avatar
                src="/assets/mpesa.png"
                alt="M-Pesa"
                sx={{ width: 66, height: 56, marginRight: 2 }} // Resize to match others
              />
            </Box>
          </Grid>
          {/* Links Section */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Link href="/privacy-policy" color="white" variant="body2" sx={{ mb: 1, display: 'inline-block', paddingRight: 3 }}>
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" color="white" variant="body2" sx={{ mb: 1, display: 'inline-block' }}>
              Terms and Conditions
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
