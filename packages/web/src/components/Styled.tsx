import styled from 'styled-components';

export const Intro = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 1.5rem;
  padding-left: 3vw;
  padding-right: 3vw;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
  align-items: center;

  h1, h2, h3, h4, h5, img {
    margin-bottom: 0;
    margin-top: 1.5em;
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

export const StyledHeadline = styled.span`
  font-family: 'Khula', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1em;
  letter-spacing: -0.04em;
  margin: 0 !important;
`;
