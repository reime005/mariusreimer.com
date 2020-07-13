export const removeDuplicateOccurencies = (
  input: string,
  duplicateChar: string,
): string => {
  let final = '';

  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      final = input[0];
      continue;
    }

    if (i > 0 && input[i] === duplicateChar && input[i - 1] === duplicateChar) {
      continue;
    }

    final += input[i];
  }

  return final;
};
