import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Starship (){
  let [starships, setStarships] = useState([]);
  useEffect(() => {
    let url = "https://swapi.dev/api/starships/";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setStarships(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  starships = starships.map((s, idx) => {
  return(
    <li key={idx}>
      <button>
        <Link to={{
          pathname: '/starship',
          state: s
        }}
        key={s.name}>
          {s.name}
        </Link>
      </button>
    </li>
  )
})

  return(
    <div>
        {starships}
    </div>
  )
}
