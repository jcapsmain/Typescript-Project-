export const filterLongWords = (words: string[]): string[] => {
  const longWords = words.filter(word => word.length > 5);
  return longWords;
};
