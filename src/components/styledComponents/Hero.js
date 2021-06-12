import React from 'react';
import styled from 'styled-components';

const GlobalHero = ({ img, children }) => {
  return (
    <HeroWrapper>
      {children}
      <div className="overlay"></div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  /* background-image: ${(props) => `url(${props.img})`}; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 480px;
  .overLay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.color};
  }
`;

export default GlobalHero;
