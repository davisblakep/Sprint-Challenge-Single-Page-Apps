import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';

import axios from 'axios';

export default function SearchForm(props) {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {console.log(response.data.results.map(x => 
      x))
      setCharList(response.data.results.map(x => 
        x
      ))})
    .catch(err=> {console.log(err)});
  }, []);

const nameHolder = charList.map(x => 
  x.name + "  " + `${(x.id)}`
  )

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = nameHolder.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <section className="search-form">
      <div className="search-results">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        {searchResults.map((x) => (
          <Button href={`/character/${x.replace(/\D/g,'')}`} size="lg">{x.slice(0, -3)}</Button>
        ))}
      </div>
    </div>
    </section>
  );
}
