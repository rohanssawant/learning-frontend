import "./App.css";
import MovieList from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState({});
  const fetchMovies = () => {
    fetch("https://swapi.dev/api/films")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const transformedData = data.results.map((m) => {
          return {
            id: m.episode_id,
            title: m.title,
            openingText: m.opening_crawl,
            releaseDate: m.release_date,
          };
        });
        setMovies(transformedData);
      });
  };
  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch movies</button>
      </section>
      <section>{movies.length > 0 && <MovieList movies={movies} />}</section>
    </>
  );
}

export default App;
