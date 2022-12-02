import { readFileSync } from "fs";

import { calculateScoreForThisRound, MyMove, OpponentMove } from "./didIWin";

const text: string = readFileSync("inputs/day-2.txt", "utf-8");

const arrayText = text.split("\n");

let myScoreSum = 0;

for (let i = 0; i < arrayText.length; i++) {
  const [opponent,, me] = arrayText[i].trim().split("");

  const { myScore } = calculateScoreForThisRound(castToOpponentMove(opponent), castToMyMove(me));
  myScoreSum += myScore;
}

function castToOpponentMove (opponentMoveString: string): OpponentMove {
  if (["A", "B", "C"].includes(opponentMoveString)) {
    return opponentMoveString as OpponentMove;
  }

  throw new Error("Opponent move is incorrect");
}

function castToMyMove (opponentMoveString: string): MyMove {
  if (["X", "Y", "Z"].includes(opponentMoveString)) {
    return opponentMoveString as MyMove;
  }

  throw new Error("My move is incorrect");
}

console.log("The answer of part 1 is %s", myScoreSum);
