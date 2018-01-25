'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const normalizeHand = hand => {
  if (typeof hand !== 'string')
    return ''; // will be treated as invalid input

  return hand.toLowerCase().trim();  
}

const isHandValid = hand => {
  // must be one of rock, paper, scissors
  return (hand === 'rock' 
    || hand === 'paper' 
    || hand === 'scissors');
};

const hand1Wins = (hand1, hand2) => {
  // could be further simplified using a map of what-beats-what
  // and a single conditional
  if (hand1 === 'rock' && hand2 === 'scissors') return true;
  if (hand1 === 'paper' && hand2 === 'rock') return true;
  if (hand1 === 'scissors' && hand2 === 'paper') return true;

  return false;
};

const rockPaperScissors = (hand1, hand2) => {
  // normalize case and whitespace
  const normalHand1 = normalizeHand(hand1);
  const normalHand2 = normalizeHand(hand2);

  // make sure that both hands are valid
  if (!isHandValid(normalHand1) || !isHandValid(normalHand2)) {
    return 'Hand must be rock, paper, or scissors.  Try again.';
  }

  // check for a tie.
  if (normalHand1 === normalHand2) {
    return "It's a tie!";
  }

  // determine if hand 1 wins.
  if (hand1Wins(normalHand1, normalHand2)) {
    return 'Hand one wins!';
  }

  // if it wasn't a tie and hand1 didn't win, then hand2 must win
  return 'Hand two wins!';
}

const getPrompt = () => {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests
if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should handle invalid input', () => {
      assert.equal(rockPaperScissors('rooock', 'paper'), "Hand must be rock, paper, or scissors.  Try again.");
      assert.equal(rockPaperScissors('rock', 'papeeer'), "Hand must be rock, paper, or scissors.  Try again.");
      assert.equal(rockPaperScissors('rooock', 'papeeer'), "Hand must be rock, paper, or scissors.  Try again.");
      assert.equal(rockPaperScissors('rock', 2), "Hand must be rock, paper, or scissors.  Try again.");
      assert.equal(rockPaperScissors(null, 2), "Hand must be rock, paper, or scissors.  Try again.");
    });
  });
} else {

  getPrompt();

}
