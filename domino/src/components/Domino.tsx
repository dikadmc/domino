import React from "react";

interface DominoProps {
  values: [number, number];
}

const Domino: React.FC<DominoProps> = ({ values }) => {
  return (
    <div className="w-20 h-32 border rounded-xl border-black m-2 flex flex-col justify-center items-center cursor-pointer bg-white">
      <div className="text-center">{values[0]}</div>
      <hr className="w-full border-t border-black" />
      <div className="text-center">{values[1]}</div>
    </div>
  );
};

export default Domino;
