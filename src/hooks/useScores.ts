import { useState, useEffect } from 'react';

export type ScoresProp = {
  player1: number;
  player2: number;
};

const useScores = () => {
  // Load scores from local storage or set to default values.
  const initialScores: ScoresProp = JSON.parse(localStorage.getItem('scores') || '{"player1": 0, "player2": 0}');

  const [scores, setScores] = useState<ScoresProp>(initialScores);

  useEffect(() => {
    // Whenever scores change, update local storage.
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  const incrementPlayerScore = (player: 'player1' | 'player2') => {
    setScores((prevScores) => ({
      ...prevScores,
      [player]: prevScores[player] + 1
    }));
  };

  const resetScores = () => {
    setScores({ player1: 0, player2: 0 });
  };

  return {
    scores,
    incrementPlayerScore,
    resetScores
  };
};

export default useScores;
