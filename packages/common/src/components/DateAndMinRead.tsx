import React from 'react';
import dateFormat from 'date-fns/format';
import styled from 'styled-components/native';

const SText = styled.Text`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.listItemFont};
  font-weight: 400;
`;

interface Props {
  date?: Date;
  minRead?: number;
}

export const DateAndMinRead = (props: Props) => {
  if (!props.date || !props.minRead) {
    return null;
  }

  return (
    <SText>
      {dateFormat(new Date(props.date), 'MMMM d, yyyy')}&nbsp;-&nbsp;
      {props.minRead} min read
    </SText>
  );
};
