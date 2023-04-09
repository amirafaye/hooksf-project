import { useState } from "react";
import AddMovieModal from "../Components/AddMovieModal";
import MovieList from "../Components/MovieList";
import { movies } from "../Data/Data";

const HomePage = ({ search }) => {
  const [moviesData, setMoviesData] = useState(movies);

  return (
    <>
      <MovieList
        search={search}
        moviesData={moviesData}
        setMoviesData={setMoviesData}
      />
      <AddMovieModal moviesData={moviesData} setMoviesData={setMoviesData} />
    </>
  );
};

export default HomePage;
