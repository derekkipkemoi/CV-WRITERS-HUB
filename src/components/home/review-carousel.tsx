"use client"
import React from 'react';
import { Card, CardContent, Container, Divider, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const reviews = [
  { name: "Peter Njoroge", review: "Very professional team! They offered valuable suggestions for improving my CV.", rating: "⭐⭐⭐⭐" },
  { name: "Cynthia Wambui", review: "I'm impressed with how quickly they worked on my CV. Highly recommend!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Brian Mwangi", review: "The quality of writing is excellent, and the design is eye-catching.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Joyce Muthoni", review: "Good service overall. My CV looks good, but could use more details.", rating: "⭐⭐⭐⭐" },
  { name: "Ali Rahman", review: "Very happy with my CV. It's concise and effectively highlights my skills.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Leila Hassan", review: "The service exceeded my expectations. My CV now looks very professional.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Michael Ochieng", review: "Great value! I received a quality CV that Im proud to share.", rating: "⭐⭐⭐⭐" },
  { name: "Nadia Kamau", review: "Impressive service! My CV has opened doors for new job opportunities.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Diana Wanjiru", review: "Friendly staff and quick turnaround. My CV looks fantastic now.", rating: "⭐⭐⭐⭐" },
  { name: "Julius Mwenda", review: "Highly satisfied with the service. I would recommend it to anyone.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Fiona Adhiambo", review: "The CV writing service is worth every cent! I'm very pleased.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Robert Gichuki", review: "The writer was attentive to my needs. I love my new CV!", rating: "⭐⭐⭐⭐" },
  { name: "Zainab Khalid", review: "Very impressed with the turnaround time. My CV is perfect now!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Esther Nyakundi", review: "Good overall experience. I appreciated the clear communication throughout.", rating: "⭐⭐⭐⭐" },
  { name: "Frankline Njeru", review: "The resume they created for me is outstanding! Great service.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Vera Chebet", review: "Quick and efficient service. My CV has definitely improved.", rating: "⭐⭐⭐⭐" },
  { name: "Emmanuel Kiragu", review: "The CV looks very polished. Im confident it will help my job search.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Pamela Nduku", review: "The service was quick, and Im pleased with my new CV. Thank you!", rating: "⭐⭐⭐⭐" },
  { name: "Samira Abdalla", review: "Fantastic job! Im receiving more responses from employers since I updated my CV.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Charles Otieno", review: "Professional and friendly team. They did an excellent job on my CV.", rating: "⭐⭐⭐⭐" },
  { name: "Nia Karanja", review: "Highly recommend! They know how to present your skills effectively.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Jasmin Wambui", review: "Great experience from start to finish. My CV is just what I needed.", rating: "⭐⭐⭐⭐" },
  { name: "Wanjiru Njeri", review: "This CV writing service was outstanding! My resume looks professional and polished.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Kibet Kipkoech", review: "Fast delivery and exceptional customer service. Highly recommended for anyone needing a CV.", rating: "⭐⭐⭐⭐" },
  { name: "Akinyi Abigael", review: "Great quality! The CV they provided helped me land several interviews.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Juma Mwinyi", review: "Not exactly what I expected, but decent for the price I paid.", rating: "⭐⭐⭐" },
  { name: "Muthoni Wambui", review: "Fantastic experience! My CV stands out now. Highly recommend their service.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Ochieng Otieno", review: "Average service, but the final product was better than I anticipated.", rating: "⭐⭐⭐" },
  { name: "Amani Akinyi", review: "Simply the best! Very satisfied with my new CV. Worth every penny.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Nyaboke Adhiambo", review: "Good service, but it took longer than expected to receive my CV.", rating: "⭐⭐⭐⭐" },
  { name: "Kamau Njuguna", review: "Excellent service and great value for money. I'm very happy with the result.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Ruth Mwikali", review: "The writer understood my needs perfectly and delivered a top-notch CV.", rating: "⭐⭐⭐⭐⭐" },
  { name: "David Omondi", review: "Very professional service. I received my CV in a timely manner.", rating: "⭐⭐⭐⭐" },
  { name: "Adhiambo Amani", review: "The revisions were handled well, and I'm pleased with the final version.", rating: "⭐⭐⭐⭐" },
  { name: "Abdi Farah", review: "My CV was transformed! I got interviews after sending it out.", rating: "⭐⭐⭐⭐⭐" },
  { name: "Grace Kezia", review: "They captured my experience and skills beautifully in the CV. Great job!", rating: "⭐⭐⭐⭐⭐" }
];


// Arrow components
interface ArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (

  <div
    className="custom-arrow next"
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onClick?.();
    }}
    role="button"
    tabIndex={0}
    aria-label="Next slide"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'primary.main',
      cursor: 'pointer',
    }}
  >
    <ArrowForward sx={{ color: 'primary.main' }} />
  </div>
);



const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="custom-arrow prev"
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onClick?.();
    }}
    role="button"
    tabIndex={0}
    aria-label="Previous slide"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'primary.main',
      cursor: 'pointer',
    }}
  >
    <ArrowBack sx={{ color: 'primary.main' }} />
  </div>
);

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const ReviewCarousel: React.FC = () => (
  <Container sx={{ paddingTop: 8, paddingBottom:8 }}>
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
      Clients Testimonials
    </Typography>
    <Typography
      variant="body1"
      component="p"
      gutterBottom
      align="center"
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        lineHeight: 1.6,
        color: 'text.secondary',
        fontSize: '1.1rem',
        padding: '0 16px',
        paddingBottom: 2,
      }}
    >
      Our clients appreciate our dedication to crafting exceptional resumes that help them achieve their career goals. Here&apos;s what they have to say about our services
    </Typography>

    <div className="review-carousel">
      <Slider
        {
        ...settings
        }
      >
        {reviews.map((review, index) => (
          <div key={index}>
            <Card
              className="review-card"
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                minHeight: "150px",
                backgroundColor: '#f9f9f9', // Light background color
                transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition for hover effects
                '&:hover': {
                  transform: 'scale(1.02)', // Slight zoom effect on hover
                  boxShadow: 6, // Increase shadow on hover
                },
                padding: 2, // Padding inside the card
                border: '1px solid #e0e0e0', // Subtle border
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mb: 1 }} // Bold font with margin below
                >
                  {review.name}
                </Typography>
                <Divider sx={{ margin: '10px 0', backgroundColor: 'primary.main', height: '2px' }} />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 1 }} // Margin below for spacing
                >
                  {review.review}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: '500', color: 'primary.main' }} // Make rating stand out
                >
                  {review.rating}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  </Container>
);

export default ReviewCarousel;