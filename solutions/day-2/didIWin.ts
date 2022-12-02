export type OpponentMove = "A" |"B" | "C" // Rock, paper, Scissor
export type MyMove = "X" | "Y" | "Z" // Rock, paper, Scissor

const matchResultsOpponentPointOfView: { [key: string]: { [key: string]:number } } = {
  A: {
    X: 1,
    Y: 0,
    Z: 2,
  },
  B: {
    X: 2,
    Y: 1,
    Z: 0,
  },
  C: {
    X: 0,
    Y: 2,
    Z: 1,
  },
};

export function calculateScoreForThisRound (opponentMove: OpponentMove, myMove: MyMove): { myScore: number, opponentScore: number} {
  const opponentScore = matchResultsOpponentPointOfView[opponentMove][myMove] * 3;

  let myScore = 3;
  if (opponentScore === 6) {
    myScore = 0;
  }
  if (opponentScore === 0) {
    myScore = 6;
  }

  return {
    myScore: getMyMoveScore(myMove) + myScore,
    opponentScore: getOpponentMoveScore(opponentMove) + opponentScore,
  };
}

function getOpponentMoveScore (move: OpponentMove): number {
  switch (move) {
  case "A":
    return 1;
  case "B":
    return 2;
  case "C":
    return 3;
  }
}

function getMyMoveScore (move: MyMove): number {
  switch (move) {
  case "X":
    return 1;
  case "Y":
    return 2;
  case "Z":
    return 3;
  }
}
