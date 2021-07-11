import styled from '@emotion/styled';

export const OutlinedButton = styled.button`
  padding: 10px 7px;
  border: 0.1em solid #ffffff;
  background: inherit;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  font-family: 'Manrope';

  :hover {
     color: #000000;
     background-color: #ffffff;
  }

  @media all and (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px auto 30px;

  a {
    text-decoration: none;
  }
`;

export const SolidButton = styled.button``;
