import htmlparser from 'htmlparser2-without-node-native';

interface Props {
  rawHTML: string;
}

export const calculateMinutesToRead = (
  props: Props,
): Promise<number | null> => {
  return new Promise(res => {
    const handler = new htmlparser.DomHandler(function (err, dom) {
      let min: number | null = null;
      if (!dom) {
        res(min);
        return;
      }

      let wordCount = 0;

      const rec = root => {
        root.forEach(node => {
          if (node && typeof node.data === 'string') {
            const words = node.data
              .split(' ')
              .filter(w => /\w/.test(w) && w.length > 1);
            wordCount += words.length;
          }

          if (node.children) {
            rec(node.children);
          }
        });
      };

      rec(dom);

      let minutes = wordCount / 250;
      const n = Number(minutes.toFixed(2));
      res(Math.ceil(n));
    });
    const parser = new htmlparser.Parser(handler);
    parser.write(props.rawHTML);
    parser.done();
  });
};
