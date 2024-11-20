"use client"
import React, { useRef } from 'react';
import FAQSection from '@/components/home/faq';
import FeatureSection from '@/components/home/features';
import Footer from '@/components/home/footer';
import  Header  from '@/components/home/header';
import  HeroSection  from '@/components/home/hero-section';
import  PricingCards  from '@/components/home/pricing';
import ReviewCarousel from '@/components/home/review-carousel';
import { Box } from '@mui/material';

function Page(): React.JSX.Element {  // Declared as function declaration and added return type
  const pricingRef = useRef<HTMLDivElement | null>(null);

  const scrollToPricing = (): void => { // Added return type for the scrollToPricing function
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <Header />
      <Box sx={{ backgroundColor: 'primary.main', textAlign: 'center' }}>
        <HeroSection scrollToPricing={scrollToPricing} />
      </Box>
      <Box sx={{ backgroundColor: '#ffff', textAlign: 'center' }}>
        <ReviewCarousel />
      </Box>
      <Box ref={pricingRef} sx={{ backgroundColor: '#e0f7fa', textAlign: 'center' }}>
        <PricingCards />
      </Box>
      <Box sx={{ backgroundColor: '#ffff', textAlign: 'center' }}>
        <FeatureSection />
      </Box>
      <Box sx={{ backgroundColor: '#e0f7fa', textAlign: 'center' }}>
        <FAQSection scrollToPricing={scrollToPricing} />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default Page;
