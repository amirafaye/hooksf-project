import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { card, ExpandMore } from "../Shared/Style";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { isPathActive } from "../Helpers/functions";

const MovieCard = ({ movie, deleteMovie }) => {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card key={movie.id} sx={card} className='card'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {movie.title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={movie.title}
        subheader={movie.year}
      />
      <CardMedia
        component='img'
        height='194'
        image={movie.posterUrl}
        alt={`${movie.title} poster`}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {movie.plot}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!isPathActive(pathname, "/movies") && (
          <>
            <IconButton
              aria-label='add to favorites'
              onClick={() => deleteMovie(movie.id)}
            >
              <DeleteIcon />
            </IconButton>
            <Link to={`/movies/${movie.id}`}>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </Link>
          </>
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Details :</Typography>
          <Typography paragraph>{movie.plot}</Typography>
          <Typography paragraph>Actors: {movie.actors}</Typography>
          <Typography paragraph>
            Genre :{" "}
            {movie.genres.map((genre) => {
              return <span>{genre} </span>;
            })}
          </Typography>
          <Typography>Director: {movie.director}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default MovieCard;

MovieCard.defaultProps = {
  movie: {
    id: 0,
    title: "No title",
    year: "No year",
    posterUrl: "No poster",
    plot: "No plot",
    actors: "No actors",
    genres: ["No genres"],
    director: "No director",
  },
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  deleteMovie: PropTypes.func,
};
