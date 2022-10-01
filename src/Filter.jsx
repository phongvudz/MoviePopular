import React, { useEffect } from "react";

const Filter = ({ activeGenre, setActiveGenre, popular, setMovieFiltered }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setMovieFiltered(popular);
      return;
    }

    const filtered = popular.filter((m) => m.genre_ids.includes(activeGenre));

    setMovieFiltered(filtered);
    return;
  }, [activeGenre]);

  return (
    <div className="flex space-x-8 mb-6 ">
      <button
        onClick={() => setActiveGenre(0)}
        className={`px-6 py-1 border-2 border-cyan-700 rounded-full hover:bg-cyan-700 transition duration-150 ease-in-out ${
          activeGenre === 0 ? "bg-cyan-700" : ""
        } `}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={`px-6 py-1 border-2 border-cyan-700 rounded-full hover:bg-cyan-700 transition duration-150 ease-in-out ${
          activeGenre === 35 ? "bg-cyan-700" : ""
        } `}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={`px-6 py-1 border-2 border-cyan-700 rounded-full hover:bg-cyan-700 transition duration-150 ease-in-out ${
          activeGenre === 28 ? "bg-cyan-700" : ""
        }`}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
