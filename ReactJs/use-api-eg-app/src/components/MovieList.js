import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  return (
    <ul>
      {props.movies.map((m) => {
        // <Movie
        //   title={m.title}
        //   releaseDate={m.releaseDate}
        //   openingText={m.openingText}
        // />;
        console.log(m);
        <li>
          <h2>{m.title}</h2>
          <h3>{m.releaseDate}</h3>
          <p>{m.openingText}</p>
        </li>;
      })}
    </ul>
  );
}

export default MovieList;
