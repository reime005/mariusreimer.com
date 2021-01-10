import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useTheme, lightTheme } from '@reime005/common';
import { darkTheme } from '@reime005/common/src';

interface Props {
  currentPage: number;
  pageCount: number;
}

interface INavButton {
  notAllowed?: boolean;
  theme: any;
}

const NavButton = styled.button<INavButton>`
  cursor: ${props => (props.notAllowed ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  border: none;
  outline: none;
  color: var(--font);
  background-color: inherit;
  padding: 0;
  margin-left: 4px;
  margin-right: 4px;
`;

const Navigation = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  line-height: 1em;

  a:hover {
    text-decoration: none;
  }
`;

const Span = styled.span`
  :hover {
    text-decoration: none;
    box-shadow: 0 1.5px 0 0 var(--primary);
  }
`;

export const Pagination = (props: Props) => {
  const { pageCount, currentPage } = props;
  const { theme } = useTheme();

  let prevPage = props.currentPage - 1;
  let nextPage = props.currentPage + 1;

  if (prevPage < 1) {
    prevPage = 1;
  }

  if (nextPage >= pageCount) {
    nextPage = pageCount;
  }

  return (
    <Navigation>
      <Link style={styled.linkStyle} to={'/blog/1'}>
        <NavButton notAllowed={currentPage === 1}>
          <Span>First</Span>
        </NavButton>
      </Link>

      <Link to={`/blog/${prevPage}`}>
        <NavButton notAllowed={currentPage === 1}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={16}
            style={{
              color:
                theme === 'dark' ? darkTheme.color.font : lightTheme.color.font,
            }}
          />
        </NavButton>
      </Link>

      <Link to={`/blog/${currentPage}`} onClick={() => {}}>
        <NavButton disabled style={{ cursor: 'default' }} onClick={() => {}}>
          {currentPage}
        </NavButton>
      </Link>

      <Link to={`/blog/${nextPage}`}>
        <NavButton notAllowed={currentPage === pageCount}>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={16}
            style={{
              color:
                theme === 'dark' ? darkTheme.color.font : lightTheme.color.font,
            }}
          />
        </NavButton>
      </Link>

      <Link to={`/blog/${pageCount}`}>
        <NavButton notAllowed={currentPage === pageCount}>
          <Span>Last</Span>
        </NavButton>
      </Link>
    </Navigation>
  );
};
