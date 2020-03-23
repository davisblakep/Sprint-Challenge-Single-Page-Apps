import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col} from 'reactstrap';

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {console.log(response.data.results);
      setCharList(response.data.results)})
    .catch(err=> {console.log(err)});
  }, []);

  return (
    
    <Container>
        <section className="character-list">
          <div className="card-div">
          <Row xs="2">
      {charList.map(x => {
        return(
      <Col>
        <CharacterCard 
        {...x}
        />
        </Col>
        )
      })}
       </Row>
      </div>
      </section>
    </Container>
  );
}
