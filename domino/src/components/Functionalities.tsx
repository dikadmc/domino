import React from 'react';

interface FunctionalitiesProps {
  onShuffle: () => void;
  onSortAsc: () => void;
  onSortDesc: () => void;
  onUndo: () => void;
}

const Functionalities: React.FC<FunctionalitiesProps> = ({
  onShuffle,
  onSortAsc,
  onSortDesc,
  onUndo,
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <button onClick={onShuffle} className="bg-blue-500 text-white px-4 py-2 rounded">
        Shuffle
      </button>
      <button onClick={onSortAsc} className="bg-green-500 text-white px-4 py-2 rounded">
        Sort Ascending
      </button>
      <button onClick={onSortDesc} className="bg-yellow-500 text-white px-4 py-2 rounded">
        Sort Descending
      </button>
      <button onClick={onUndo} className="bg-red-500 text-white px-4 py-2 rounded">
        Undo
      </button>
    </div>
  );
};

export default Functionalities;
