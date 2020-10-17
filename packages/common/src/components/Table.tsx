import React from 'react';
import { Platform, Text, View } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  csvData: string;
}

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  border-top-width: 1px;
  border-color: ${Platform.OS === 'web' ? 'inherit' : '#999'};
`;

const Header = styled(Row)`
  font-weight: bold;
  border-top-width: 0;
  border-color: ${Platform.OS === 'web' ? 'inherit' : '#999'};
`;

const Cell = styled.View`
  flex: 1;
  font-size: 12px;
  padding: 8px;
  display: flex;
  justify-content: center;
  border-left-width: 1px;
  border-color: ${Platform.OS === 'web' ? 'inherit' : '#999'};
`;

const FirstCell = styled(Cell)`
  border-left-width: 0;
`;

export const Table = (props: Props) => {
  const preparedData = props.csvData.split('\n').map(line => line.split(','));

  if (!preparedData || !preparedData.length) {
    return null;
  }

  return (
    <View
      nativeID="table"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16,
        padding: 16,
      }}
    >
      {preparedData.map((row, rowIndex) => {
        let RowEl = Row;

        if (rowIndex === 0) {
          RowEl = Header;
        }

        return (
          <RowEl key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => {
              let CellEl = Cell;

              if (cellIndex === 0) {
                CellEl = FirstCell;
              }

              return (
                <CellEl key={`cell-${rowIndex}-${cellIndex}`}>
                  <Text
                    nativeID="tableText"
                    style={{
                      fontFamily: 'Lato',
                      flex: 1,
                      fontSize: 16,
                      fontWeight:
                        rowIndex === 0 || cellIndex === 0 ? 'bold' : 'normal',
                    }}
                  >
                    {cell}
                  </Text>
                </CellEl>
              );
            })}
          </RowEl>
        );
      })}
    </View>
  );
};
