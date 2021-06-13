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

// const StyledHero = styled.header`
//   min-height: 60vh;
//   background: url(${(props) => props.img}) center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default StyledHero;

const HeroWrapper = styled.section`
  /* min-height: 60vh; */
  background: url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
`;

export default GlobalHero;
