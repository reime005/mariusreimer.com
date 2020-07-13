import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Paragraph = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-size: 18px;
  line-height: 26px;
  font-weight: normal;
  font-family: 'Lato';
`;

export const Quote = styled(Paragraph)`
  font-weight: 300;
  font-size: 21px;
  margin: 0;
  color: ${({ theme }) => theme.color.grey};
  font-style: italic;
  font-family: 'Lato';
`;

export const Cite = styled(Quote)`
  font-size: 16px;
  margin-top: 8px;
`;

export const Caption = styled.Text`
  color: ${({ theme }) => theme.color.grey};
  font-size: 13px;
  margin-top: 8px;
`;

export const Code = styled(Paragraph)`
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 2px;
  font-size: 14px;
  font-family: ${_ => (Platform.OS === 'ios' ? 'Menlo' : 'monospace')};
  background-color: ${({ theme }) => theme.color.inlineCodeBG};
  color: ${({ theme }) => theme.color.inlineCodeFont};
`;

export const H1 = styled.Text`
  color: ${({ theme }) => theme.color.headLine};
  font-weight: 900;
  font-family: 'Lato';
  font-size: 34px;
  margin: 0;
`;

export const SubH1 = styled(H1)`
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 32px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.listItemFont};
`;
