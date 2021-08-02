import styled from '@emotion/styled';

export const StyledHomeHeading = styled.div`
  height: fit-content;
  padding: 64px;

  @media (min-width: 1024px) {
    .header-container {
      max-width: 70%;
    }
    .description {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1336px) {
    .header-container {
      max-width: 80%;
    }
  }
`;

export const StyledPageHeading = styled.div`
  text-align: center;
  &.page h1 {
    max-width: 80%;
    text-align: center;
    margin: 0 auto 1rem;
  }
  .about-header {
    font-size: 1.75em;
    text-align: center;
    margin: 1.5em 0;
  }

  @media (max-width: 769px) {
    &.page h1 {
      font-size: 2.2em;
    }
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const LandingHeading = styled.h3`
  color: #5f939a;
  font-size: 24px;

  @media (max-width: 769px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const LandingAbout = styled.h1`
  font-size: 64px;
  @media (max-width: 769px) {
    font-size: 32px;
  }
`;

export const LandingLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  .buttons {
    display: flex;
    justify-content: flex-start;
  }

  .buttons a:nth-of-type(1) {
    margin-right: 5px;
  }

  .buttons>a {
    text-decoration: none;
  }

  .inline {
    font-size: 48px;
  }

  @media (max-width: 1400px) {
    .inline {
      font-size: 38px;
    }
  @media (max-width: 1200px) {
    .inline {
      font-size: 32px;
      text-align: center;
    }
  }
  @media (max-width: 769px) {
    .buttons {
      justify-content: center;
    }
  }
  @media (max-width: 550px) {
    .inline {
      font-size: 16px;
    }

    .buttons {
      justify-content: center;
    }
  }
  @media (max-width: 320px) {
    .inline {
      font-size: 14px;
    }

    .buttons {
      justify-content: center;
    }
  }
`;

export const LandingRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Illustration = styled.img`
  // @keyframes floating {
  //   from {
  //     transform: translateY(10px);
  //   }
  //   to {
  //     transform: translateY(-10px);
  //   }
  // }
  height: 512px;
  width: auto;
  object-fit: fill;
  margin-right: 0.2em;
  z-index: 1;
  // animation: floating cubic-bezier(0.55, 0.03, 0.43, 0.98) 3s infinite alternate;

  @media (max-width: 759px) {
    width: 100%;
    height: auto;
    margin-top: 32px;
  }
`;
