import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  margin: 2% auto;

  .icon-link {
    color: #fff;
    text-decoration: none;
    padding: 10px auto;
    margin-right: 10px;

    &:hover {
      color: var(--text-color-bright);
    }

    @media (max-width: 769px) {
      justify-content: center;
    }
  }
`;
