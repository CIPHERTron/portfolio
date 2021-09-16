import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  width: 50%;
  margin: 14px auto;
  background-color: #38234a;
  padding: 14px 24px 8px;
  border-radius: 5px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;

  .heading-link {
    text-decoration: none;
  }

  .heading {
    margin: 0;
    margin-left: 14px;
    color: #fff;

    &:hover {
      color: var(--text-color);
    }

    @media (max-width: 769px) {
      font-size: 16px;
    }
  }
`;

export const Description = styled.p`
  margin: 0;
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

export const Date = styled.p`
  margin: 6px auto 0;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  color: #000;
  font-weight: 800;
  text-align: center;
  width: fit-content;
  height: fit-content;
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 769px) {
    height: 25px;
  }
`;
