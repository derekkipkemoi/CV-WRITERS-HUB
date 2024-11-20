'use client';
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
  Divider,
  Container,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { styled } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface PricingOption {
  title: string;
  price: number;
  currency: string;
  orderRevision: number;
  description: string;
  features: string[];
  highlight: boolean;
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Standard CV Writing',
    price: 1500,
    currency: 'KES',
    orderRevision: 1,
    description: 'A professional CV writing service designed to showcase your skills and experience effectively.',
    features: [
      'Custom CV by a professional writer',
      'One revision round',
      'ATS optimization',
      'Download in PDF/DOCX',
      'Professional formatting',
      'User dashboard and support'
    ],
    highlight: false,
  },
  {
    title: 'Premium CV Writing',
    price: 3000,
    currency: 'KES',
    orderRevision: 3,
    description: 'A comprehensive CV and cover letter writing service tailored for career advancement.',
    features: [
      'Bespoke CV by a senior writer',
      'Three revision rounds',
      'ATS optimization',
      'Download in PDF/DOCX',
      'Professional formatting',
      'User dashboard and support',
      'Custom cover letter',
      'Priority support',
      'LinkedIn profile optimization',
    ],
    highlight: true,
  },
  {
    title: 'Executive CV Writing',
    price: 5000,
    currency: 'KES',
    orderRevision: 10,
    description: 'An elite CV writing service for executives, highlighting leadership and strategic vision.',
    features: [
      'Tailored CV by an executive writer',
      'Unlimited revisions',
      'ATS optimization',
      'Download in PDF/DOCX',
      'Professional formatting',
      'User dashboard and support',
      'Custom cover letter',
      'Priority support',
      'LinkedIn profile optimization',
      'Executive biography',
    ],
    highlight: false,
  },
  {
    title: 'Cover Letter Writing',
    price: 500,
    currency: 'KES',
    orderRevision: 1,
    description: 'A professionally crafted cover letter to complement your CV and enhance your job applications.',
    features: [
      'Custom cover letter by a professional writer',
      'One revision round',
      'Tailored to job applications',
      'Professional formatting',
      'User dashboard and support'
    ],
    highlight: false,
  },
  {
    title: 'LinkedIn Profile Optimization',
    price: 1000,
    currency: 'KES',
    orderRevision: 1,
    description: 'Optimize your LinkedIn profile to attract recruiters and showcase your professional brand.',
    features: [
      'LinkedIn profile review and rewrite',
      'SEO optimization',
      'Professional formatting',
      'Profile image recommendations',
      'Custom headline and summary',
      'User dashboard and support'
    ],
    highlight: false,
  },
];

const StyledCard = styled(Card)<{ selected: boolean }>(() => ({
  border: '1px solid #e0e0e0',
  borderRadius: '15px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  marginRight: '5px',
  marginLeft: '5px',
  backgroundColor: 'white',
  '&:hover': {
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.01)',
  },
}));

const PricingCard: React.FC<{ option: PricingOption; selected: boolean; onSelect: () => void }> = ({ option, selected, onSelect }) => {
  const { title, price, currency, description, features, highlight } = option;
  return (
    <StyledCard variant="outlined" selected={selected} onClick={onSelect}>
      <CardContent>
        <Typography variant="h6"
          sx={{ fontWeight: 'bold', mb: 1 }} 
          color={highlight ? 'primary' : 'textPrimary'}>
          {title}
        </Typography>
        <Divider sx={{ my: 1, backgroundColor: 'primary.main', height: '2px' }} />
        <Typography
          variant="h6"
          component="div"
          color="textSecondary"
          sx={{ fontWeight: 'bold', margin: '8px 0' }}
        >
          {currency} {price}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 1 }} // Margin below for spacing
        >
          {description}
        </Typography>
        <ul style={{ paddingLeft: '20px', margin: '16px 0' }}>
          {features.map((feature, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: 'primary.main',
                  fontSize: '1.2rem',
                  marginRight: '8px',
                }}
              />
              <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      <Button
        variant='contained'
        color="primary"
        sx={{
          m: 2,
          borderRadius: '24px',
          textTransform: 'none',
          fontWeight: 'bold',
        }}
      >
        Select
      </Button>
    </StyledCard>
  );
};

const PricingCards: React.FC = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const isMediumScreen = useMediaQuery('(min-width:1000px) and (max-width:1199px)');

  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cardsPerPage = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;
  const maxScrollIndex = Math.max(0, pricingOptions.length - cardsPerPage);

  const handlePrev = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxScrollIndex));
  };

  const handleSelect = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 2,
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        Our Pricing Options
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: '700px',
          mx: 'auto',
          lineHeight: 1.8,
          color: 'text.secondary',
          fontSize: '1.1rem',
          mb: 4,
        }}
      >
        Choose from our range of CV writing services to find the one that suits your career goals best. Each package is tailored to meet your specific needs.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handlePrev} disabled={scrollIndex === 0}  sx={{boxShadow: '2px 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1)', color: 'primary.main', backgroundColor: 'white' }}>
          <ArrowBack />
        </IconButton>
        <Grid container wrap="nowrap" sx={{ overflow: 'hidden' }}>
          {pricingOptions.slice(scrollIndex, scrollIndex + cardsPerPage).map((option, index) => (
            <Grid item key={index} xs={12 / cardsPerPage}>
              <PricingCard
                option={option}
                selected={selectedCard === index + scrollIndex}
                onSelect={() => handleSelect(index + scrollIndex)}
              />
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext} disabled={scrollIndex === maxScrollIndex} sx={{boxShadow: '2px 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1)', color: 'primary.main', backgroundColor: 'white' }}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Container>
  );
};

export default PricingCards;
