import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { getCachedCode } from '../utils/getCachedCodes';
import { GitFile, setCachedCodes } from '../utils/setCachedCodes';
import { SyntaxCode } from './SyntaxCode';
import { Table } from './Table';

interface Props {
  id: string;
  overrideLanguage?: string;
}

export const Gist = (props: Props) => {
  const [rawCode, setRawCode] = useState<GitFile | null>(null);
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    if (hasResult) {
      return;
    }

    getCachedCode(props.id).then(_rawCode => {
      if (_rawCode) {
        setHasResult(true);
        setRawCode(_rawCode);
        return;
      }

      fetch(
        `${Platform.OS === 'web' ? '' : 'https://mariusreimer.com'}/gists/${
          props.id
        }.json`,
      ).then(async response => {
        if (response.ok) {
          setHasResult(true);

          const json = await response.json();

          if (json && json.files) {
            const file = json.files[Object.keys(json.files)[0]];

            await setCachedCodes(props.id, {
              ...file,
              id: props.id,
            });

            setRawCode(file);
          }
        }
      });
    });
  });

  if (rawCode && /csv/i.test(rawCode.language)) {
    return <Table csvData={rawCode.content} />;
  } else if (rawCode) {
    return (
      <SyntaxCode
        key={rawCode.id}
        rawCode={rawCode.content}
        language={props.overrideLanguage || rawCode.language.toLowerCase()}
      />
    );
  }

  return null;
};
