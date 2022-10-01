import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-gray-300 text-xl">{movie.title}</h1>
      <img
        className="w-full h-[30vh] object-cover rounded-xl my-2"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    </motion.div>
  );
};

export default Movie;
