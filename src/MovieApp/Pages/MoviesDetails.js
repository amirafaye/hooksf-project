import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";
import { movies } from "../Data/Data";
import { isObject, isNullOrUndefined } from "../Helpers/functions";

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setMovieData(movies.find((movie) => movie.id === parseInt(movieId)));
  }, [movieId]);

  if (isNullOrUndefined(movieData) && isObject(movieData)) {
    return <h1>Loading</h1>;
  }

  return <MovieCard movie={movieData} />;
};

export default MoviesDetails;
