import React, { useState } from "react";
import Domino from "./components/Domino";
import Functionalities from "./components/Functionalities";

type DominoType = [number, number];

const App: React.FC = () => {
  // Default data untuk dominoes
  const defaultDominoes: DominoType[] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  // State untuk dominoes
  const [dominoes, setDominoes] = useState<DominoType[]>(defaultDominoes);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Domino Purwadhika Selection Test
      </h1>
      <div className="flex justify-center flex-wrap mb-4">
        {dominoes.map((domino, index) => (
          <Domino key={index} values={domino} />
        ))}
      </div>
      {/* Display the Double Numbers count below the cards */}
      <div className="text-center mt-4">
        <p className="font-bold">
          Double Numbers Count: {dominoes.filter(([a, b]) => a === b).length}
        </p>
        <div>
          <hr />
        </div>
      </div>
      <Functionalities
        dominoes={dominoes}
        setDominoes={setDominoes}
        defaultDominoes={defaultDominoes}
      />
    </div>
  );
};

export default App;
