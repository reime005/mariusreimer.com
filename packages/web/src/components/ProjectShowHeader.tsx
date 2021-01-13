import React from 'react';
import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

const Link = styled.a`
  font-weight: 500;
  color: ${({ theme }) => theme.color.white} !important;
  line-height: 1.25em;

  :hover,
  &.activeLink {
    box-shadow: 0 1.5px 0 0 ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;

const Wrapper = styled.div<ProjectShowHeaderProps>`
  display: grid;
  align-items: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(300px, min-content);
  min-height: 500px;
  column-gap: 16px;
  width: 100%;
  background-color: var(--backgroundColor1);
  transition: transform 300ms ease-in-out 0s;
  :hover {
    transform: scale(1.015);
  }
  transform: scale(1);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;
  color: #fff;
  -webkit-box-shadow: 0px 0px 3px 1px var(--projectHeaderStroke);
  -moz-box-shadow: 0px 0px 3px 1px var(--projectHeaderStroke);
  box-shadow: 0px 0px 3px 1px var(--projectHeaderStroke);

  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 80px));
  column-gap: 4px;
  align-items: center;
  row-gap: 4px;
  width: 100%;
  margin-top: 16px;
`;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
`;

const Tag = styled.div`
  white-space: nowrap;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.09);
`;

export interface ProjectShowHeaderProps {
  imageSource: any;
  backgroundColor: string;
  right?: boolean;
  bgComponent?: any;
  title: string;
  subTitle?: string;
  description: string;
  link?: {
    text: string;
    to: string;
  };
  tags: string[];
}

const Container = styled.div`
  flex: 1;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 40px;

  a {
    color: #fff;
    font-weight: 600;

    :visited {
      color: inherit;
    }

    :hover {
      box-shadow: 0 2px 0 0 #fff;
      text-decoration: none;
    }
  }
`;

export const ProjectShowHeader = (props: ProjectShowHeaderProps) => {
  const rightElement = (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image loading="lazy" alt={props.title} src={props.imageSource} />
    </div>
  );

  return (
    <Wrapper {...props} style={{ backgroundColor: props.backgroundColor }}>
      {props.right ? null : rightElement}

      <Container>
        <h1>{props.title}</h1>

        {!!props.subTitle && <h4>{props.subTitle}</h4>}

        <p dangerouslySetInnerHTML={{ __html: props.description }} />

        {props.link && props.link.text && props.link.to && (
          <div>
            <Link href={props.link.to}>{props.link.text} ➔</Link>
          </div>
        )}

        <Tags>
          {props.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -1,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.bgComponent}
        </div>
      </Container>

      {props.right ? rightElement : null}
    </Wrapper>
  );
};
