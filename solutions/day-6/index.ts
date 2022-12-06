import { readFileSync } from "fs";

const text: string = readFileSync("inputs/day-6.txt", "utf-8");

const characters = text.split("");

console.log("The answer of part 1 is %s", detectPacket(characters, 4));
console.log("The answer of part 2 is %s", detectPacket(characters, 14));

function detectPacket (array: Array<string>, countOfSameCharacter: number): number {
  let characterIndex = -1;
  let currentIndex = countOfSameCharacter;

  while (
    characterIndex === -1 && currentIndex < array.length
  ) {
    const ok = Array.from(
      new Set(
        array.slice(currentIndex - countOfSameCharacter, currentIndex),
      ),
    ).length === countOfSameCharacter;

    if (ok) {
      characterIndex = currentIndex;
    } else {
      currentIndex++;
    }
  }

  return currentIndex;
}
