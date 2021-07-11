import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 0.5fr;
  width: 50%;
  margin: 14px auto;
  background-color: #38234a;
  padding: 14px 24px;
  border-radius: 5px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

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
  }
`;

export const Description = styled.p`
  margin: 0;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;
