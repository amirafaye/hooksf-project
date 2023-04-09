import HomePage from "./MovieApp/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MoviesDetails from "./MovieApp/Pages/MoviesDetails";
import { useState } from "react";
import NavBar from "./MovieApp/Components/NavBar";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<HomePage search={search} />} />
        <Route path='/movies/:movieId' element={<MoviesDetails />} />
        <Route path='*' element={<h1>404 Not Found Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
