import styled from 'styled-components';

export const Intro = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 32px;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 18px;
  line-height: 1.55em;
  width: 100%;
  margin-bottom: 24px;
  justify-content: space-around;
  align-items: center;

  h1 {
    margin-bottom: 1em;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  a {
    font-weight: 500;

    color: var(--link);
    text-decoration: none;
    :hover {
      text-decoration: none;
      box-shadow: 0 2px 0 0 var(--link);
    }
    :visited {
      color: var(--link);
    }
  }

  @media screen and (max-width: 570px) {
    flex-direction: column !important;
  }
`;

export const StyledHeadline = styled.h1`
  font-size: 2.5rem;
  margin: 0 !important;
`;
