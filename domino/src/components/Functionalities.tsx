import React from "react";

interface FunctionalitiesProps {
  dominoes: [number, number][];
  setDominoes: React.Dispatch<React.SetStateAction<[number, number][]>>;
  defaultDominoes: [number, number][];
}
type DominoType = [number, number];

const Functionalities: React.FC<FunctionalitiesProps> = ({
  dominoes,
  setDominoes,
  defaultDominoes,
}) => {
  const handleShuffle = () => {
    const shuffled = [...dominoes].sort(() => Math.random() - 0.5);
    setDominoes(shuffled);
  };

  const handleSortAsc = () => {
    const sorted = [...dominoes].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    setDominoes(sorted);
  };

  const handleSortDesc = () => {
    const sorted = [...dominoes].sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
    setDominoes(sorted);
  };

  const handleFlipCards = () => {
    const flipped = dominoes.map(([a, b]) => [b, a] as [number, number]);
    setDominoes(flipped);
  };

  const handleRemoveDuplicate = () => {
    const sortedDominoes = [...dominoes].sort(
      (a, b) => a[0] + a[1] - (b[0] + b[1])
    );

    const duplicates: DominoType[] = [];

    for (let i = 0; i < sortedDominoes.length - 1; i++) {
      const currentDomino = sortedDominoes[i];
      const nextDomino = sortedDominoes[i + 1];

      if (
        (currentDomino[0] === nextDomino[0] &&
          currentDomino[1] === nextDomino[1]) ||
        (currentDomino[0] === nextDomino[1] &&
          currentDomino[1] === nextDomino[0])
      ) {
        duplicates.push(currentDomino);
      }
    }

    const uniqueDominoes: DominoType[] = [];

    for (let i = 0; i < sortedDominoes.length; i++) {
      const currentDomino = sortedDominoes[i];

      let isDuplicate = false;
      for (let j = 0; j < duplicates.length; j++) {
        if (
          (duplicates[j][0] === currentDomino[0] &&
            duplicates[j][1] === currentDomino[1]) ||
          (duplicates[j][0] === currentDomino[1] &&
            duplicates[j][1] === currentDomino[0])
        ) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        uniqueDominoes.push(currentDomino);
      }
    }

    setDominoes(uniqueDominoes);
  };

  const handleReset = () => {
    setDominoes(defaultDominoes);
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={handleShuffle}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Shuffle
      </button>
      <button
        onClick={handleSortAsc}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sort Ascending
      </button>
      <button
        onClick={handleSortDesc}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Sort Descending
      </button>
      <button
        onClick={handleFlipCards}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Flip Cards
      </button>
      <button
        onClick={handleRemoveDuplicate}
        className="bg-teal-500 text-white px-4 py-2 rounded"
      >
        Remove Duplicate
      </button>
      <button
        onClick={handleReset}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default Functionalities;
