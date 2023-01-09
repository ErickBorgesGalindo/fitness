import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroBtnWrapper, 
  ArrowFoward, 
  ArrowRight,
  HeroH1,
  HeroP,
  HeroContent } from './HeroSectionElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>

      <HeroContent>
        <HeroH1>Comienza una nueva vida hoy</HeroH1>
        <HeroP>
          Entrena en el mejor gimnasio de la ciudad, siempre adaptado a tus necesidades 
        </HeroP>

        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} OnMouseLeave={onHover} primary="true" dark="true">
            ¡ Comencemos ! {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;