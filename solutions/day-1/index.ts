import { readFileSync } from "fs";

const text: string = readFileSync("inputs/day-1.txt", "utf-8");

const arrayText = text.split("\n");

let biggestCalorieSum = 0;
const sums : Array<number> = [];
let currentSum = 0;
let currentIndex = 0;

for (let i = 0; i < arrayText.length; i++) {
  const current = parseInt(arrayText[i]);

  if (Number.isNaN(current)) {
    if (currentSum > biggestCalorieSum) {
      biggestCalorieSum = currentSum;
    }

    currentSum = 0;
    currentIndex++;
    sums[currentIndex] = 0;
  } else {
    sums[currentIndex] += current;
    currentSum += current;
  }
}

console.log("The answer is of part 1 is %s", biggestCalorieSum);

const sortedSums = sums
  .sort((a, b) => b - a)
  .filter((n) => !Number.isNaN(n));

console.log("The answer is of part 2 is %s", sortedSums.at(0)! + sortedSums.at(1)! + sortedSums.at(2)!);
