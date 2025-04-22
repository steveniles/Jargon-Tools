export function calculate(input: string) {
  const frequencies: { [character: string]: number } = {};

  for (const character of input) {
    frequencies[character] = (frequencies[character] ?? 0) + 1;
  }

  const entries = Object.entries(frequencies);

  //sort by frequency (highest first), then by character (alphabetically)
  entries.sort(
    (
      [firstCharacter, firstCharacterFrequency],
      [secondCharacter, secondCharacterFrequency],
    ) =>
      secondCharacterFrequency - firstCharacterFrequency ||
      firstCharacter.localeCompare(secondCharacter),
  );

  return entries;
}
