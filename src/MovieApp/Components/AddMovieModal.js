import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../Shared/CustomButton";
import { style } from "../Shared/Style";

const AddMovieModal = ({ setMoviesData, moviesData }) => {
  const [open, setOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    plot: "",
    posterUrl: "",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    imdbRating: "9.3",
    imdbVotes: "2,341,835",
    imdbId: "tt0111161",
    type: "movie",
    boxOffice: "$28.34M",
    production: "Castle Rock Entertainment",
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const addMovie = (newMovie) => {
    setMoviesData([...moviesData, newMovie]);
  };

  return (
    <>
      <CustomButton onClick={handleOpen} textButton='Add Movie' />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Add new movie
          </Typography>
          <TextField
            id='outlined-basic'
            label='Movie tite'
            variant='outlined'
            placeholder='Movie Title'
            name='title'
            onChange={handleChange}
          />
          <TextField
            id='outlined-basic'
            label='Movie plot'
            variant='outlined'
            placeholder='Movie Plot'
            name='plot'
            onChange={handleChange}
          />
          <TextField
            id='outlined-basic'
            label='Movie poster'
            variant='outlined'
            placeholder='Movie Poster URL'
            name='posterUrl'
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              addMovie({ ...newMovie, id: Math.random() * 1000 });
            }}
            variant='contained'
          >
            Add
          </Button>
          <Button
            onClick={() => {
              handleClose();
            }}
            variant='contained'
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddMovieModal;
