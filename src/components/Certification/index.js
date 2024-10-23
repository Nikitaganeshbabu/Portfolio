import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; // Import react-slick for the image slider
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #fff; /* Change text color to white */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: left;
  max-width: 600px;
  color: #fff; /* Change text color to white */
  @media (max-width: 768px) {
    margin-top: 16px;
    font-size: 16px;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 28px;
`;
const ImageWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Align everything in the center */
  width: 100%;
  max-width: 300px; /* Same as the image width */
`;

const BadgeDesc = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center; /* Center-align the description */
  color: #fff; /* Change text color to white */
  width: 100%; /* Take the full width of the container */
  word-wrap: break-word; /* Ensure long text breaks into the next line */
`;

const BadgeImage = styled.img`
  width: 100%;
  max-width: 300px;  /* Ensure the image width matches the container */
  height: auto; /* Maintain aspect ratio */
  object-fit: ${(props) => (props.isFit ? 'contain' : 'cover')}; /* Use 'contain' for image ID 2 */
  border-radius: 12px;
`;

// Sample images with descriptions
const images = [
  {
    id: 1,
    src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4ea5c.appspot.com/o/GuviCertification - 5624Y7AJSr817V688l.png?alt=media&token=104c7631-e482-4e71-b7f7-596f294eb44b',
    alt: 'Certification 1',
    description: '   Certified in GenAI from Guvi'
  },
  {
    id: 2,
    src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4ea5c.appspot.com/o/Screenshot 2024-10-20 at 9.24.58 PM.png?alt=media&token=457c8e24-39c1-491f-b336-9b11fa16d6f1',
    alt: 'Certification 2',
    description: 'Certified AWS Cloud Practitioner \n 22b10b156ea0429baa1894870b6e1e88'
  },
  {
    id: 3,
    src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-4ea5c.appspot.com/o/Screenshot 2024-10-21 at 8.28.19 AM.png?alt=media&token=6a98d316-fe68-48c3-9a80-e2d949cd1970',
    alt: 'Certification 3',
    description: 'Certified in java - DSA & algorithms from Infosys springboard.'
  }
  // Add more images and descriptions as needed
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Certification = () => {
  return (
    <Container>
      <Wrapper>
        <Title>My Certifications & Badges</Title>
        <Desc>Here are some of my achievements and recognitions.</Desc>
        <SliderWrapper>
          <Slider {...settings}>
            {images.map((image) => (
              <ImageWrapper key={image.id}>
                <BadgeImage src={image.src} alt={image.alt} />
                <BadgeDesc>{image.description}</BadgeDesc>
              </ImageWrapper>
            ))}
          </Slider>
        </SliderWrapper>
      </Wrapper>
    </Container>
  );
};

export default Certification;
