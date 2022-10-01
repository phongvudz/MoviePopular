import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Movie from "./Movie";

function App() {
  const [popular, setPopular] = useState([]);
  const [movieFiltered, setMovieFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=2404c967aca9481f652473a383d48d06&language=en-US&page=1"
        );
        setPopular(res.data.results);
        setMovieFiltered(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return (
    <div>
      <Filter
        popular={popular}
        setMovieFiltered={setMovieFiltered}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
      />
      <motion.div
        Layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-5 gap-4 rounded-lg "
      >
        <AnimatePresence>
          {movieFiltered.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
