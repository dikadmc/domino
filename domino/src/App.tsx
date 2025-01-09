import React, { useState } from "react";
import Domino from "./components/Domino";
import Functionalities from "./components/Functionalities";

type DominoType = [number, number];

const App: React.FC = () => {
  const [dominoes, setDominoes] = useState<DominoType[]>([
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ]);

  const [history, setHistory] = useState<DominoType[][]>([]);

  // Shuffle Dominoes
  const shuffleDominoes = () => {
    const shuffled = [...dominoes].sort(() => Math.random() - 0.5);
    setHistory([...history, dominoes]);
    setDominoes(shuffled);
  };

  // Sort Dominoes
  const sortDominoes = (order: "asc" | "desc") => {
    const sorted = [...dominoes].sort((a, b) =>
      order === "asc"
        ? a[0] + a[1] - (b[0] + b[1])
        : b[0] + b[1] - (a[0] + a[1])
    );
    setHistory([...history, dominoes]);
    setDominoes(sorted);
  };

  // Undo Last Action
  const undoAction = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setDominoes(lastState);
      setHistory(history.slice(0, -1));
    }
  };

//   // Flip a Domino
//   const flipDomino = (index: number) => {
//     const flipped = [...dominoes];
//     flipped[index] = [flipped[index][1], flipped[index][0]];
//     setDominoes(flipped);
//   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Purwadhika's Dominoes Selection Test
      </h1>
      <div className="flex justify-center flex-wrap mb-4">
        {dominoes.map((domino, index) => (
          <Domino
            key={index}
            values={domino}
            // onFlip={() => flipDomino(index)}
          />
        ))}
      </div>
      <Functionalities
        onShuffle={shuffleDominoes}
        onSortAsc={() => sortDominoes("asc")}
        onSortDesc={() => sortDominoes("desc")}
        onUndo={undoAction}
      />
    </div>
  );
};

export default App;
