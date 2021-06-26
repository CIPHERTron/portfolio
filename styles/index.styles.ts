import styled from '@emotion/styled';
// import BackgroundImage from "./images/background-pattern.jpg";

export const StyledDesignPlus = styled.section`
  background: #fff url('/images/bg5.jpg');
  padding: 40px 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 512px;
  width: auto;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: -8px -8px 12px 0 #bebebe, 12px 12px 16px #ffffff;

  @media (max-width: 1140px) {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.div`
  width: 60%;

  p:nth-of-type(2) {
    margin-bottom: none;
  }

  h2 {
    font-size: 1.75em;
    font-weight: 1000 !important;
    color: #000;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 2.75em;
    }
  }

  p {
    color: #000;
    font-size: 22px;
  }

  @media (max-width: 1254px) {
    width: 100%;

    p {
      font-size: 20px;
    }
    .text {
      margin-right: 5%;
    }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 18px;
      text-align: justify;
    }
  }
`;
