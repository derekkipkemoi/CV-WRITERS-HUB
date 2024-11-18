import React from 'react';
import { Box, Button, Typography, CardContent, CardActions, Divider, Container } from '@mui/material';
import { ArrowCircleRight, Star } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const BlinkingIcon = styled(ArrowCircleRight)(() => ({
  animation: 'blink 1s infinite',
  '@keyframes blink': {
    '0%': { color: 'white' },
    '50%': { color: 'black' },
    '100%': { color: 'white' },
  },
}));

const services = [
  "Expert CV Writing",
  "Personalized Cover Letter Crafting",
  "LinkedIn Profile Enhancement",
  "Tailored Resume Templates",
  "ATS-Friendly Resume Optimization",
  "Comprehensive User Dashboard & Support"
];

interface HeroSectionProps {
  scrollToPricing: () => void;
}

function HeroSection({ scrollToPricing }: HeroSectionProps) {
  return (
    <Container sx={{ pt: 8, pb: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          borderRadius: '8px',
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1.5 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="left"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            Premier CV & Resume Writing Services
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="left"
            sx={{
              mb: 2,
              fontSize: '1.1rem',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            }}
          >
            Unlock Your Career Potential with Expertly Crafted CVs and Resumes
          </Typography>
          <CardContent sx={{ p: 0 }}>
            {services.map((service) => (
              <Typography
                key={service} // Use 'service' as the key
                variant="h6"
                color="text.secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                  fontSize: '1.1rem',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                  textTransform: 'uppercase',
                  width: '100%',
                }}
              >
                <Star sx={{ color: 'primary.main', mr: 1 }} />
                <span>{service}</span>
              </Typography>
            ))}
            <Divider sx={{ my: 2, bgcolor: 'primary.main', height: 2 }} />
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={scrollToPricing}
              sx={{
                bgcolor: '#ffcc00',
                color: '#000',
                mt: 2,
                fontSize: '1rem',
                borderRadius: 25,
                textTransform: 'uppercase',
                '&:hover': {
                  bgcolor: '#ffb300',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Select Package To Get Started Now
              <BlinkingIcon sx={{ ml: 1 }} />
            </Button>
          </CardActions>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
            mb: { xs: 4, md: 0 },
            pr: { md: 2 },
          }}
        >
          <Box
            component="img"
            src="/assets/our_writer.webp"
            alt="Smiling woman using a laptop in a modern workspace."
            sx={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 2,
              maxHeight: '350px',
              objectFit: 'cover',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
