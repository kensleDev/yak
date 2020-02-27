export const firstToUpper = (input: string) => {
  const firstLetter = input.substring(0, 1);
  const restOfWord = input.substring(1);

  return firstLetter.toUpperCase() + restOfWord;
};
