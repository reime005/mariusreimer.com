import styled from 'styled-components';

export const Intro = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 32px;
  padding-left: 10vw;
  padding-right: 10vw;
  font-size: 18px;
  line-height: 1.55em;
  width: 100%;
  margin-bottom: 24px;

  h1 {
    margin-bottom: 1.5em;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  a {
    font-weight: 500;

    color: ${({ theme }) => theme.color.link};
    text-decoration: none;
    :hover {
      text-decoration: none;
      box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.link};
    }
    :visited {
      color: ${({ theme }) => theme.color.link};
    }
  }
`;

export const StyledHeadline = styled.h1`
  font-size: 3em;
  margin: 0 !important;
`;
