import React, {useEffect, useState} from 'react';
import {
  Card, CardImg, CardTitle, 
   CardBody
} from 'reactstrap';
import axios from 'axios';

export default function IndividualCard (props) {
    
  const [charList, setCharList] = useState([]);

  useEffect(() => {
      const id = props.match.params.id;
      console.log(props)
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {console.log(response.data)
      setCharList(response.data)})
    .catch(err=> {console.log(err)});
  }, []);


console.log('this is props', props)
console.log('this is charList name', charList.name)

 
  return (
    <div className="individual-card">
    <Card style={{ width: '20rem' }}>
    <CardImg top width="100%" src={charList.image} alt="Card image cap" />
    <CardBody>
      <CardTitle>{charList.name}</CardTitle>
    </CardBody>
  </Card>
  </div>
  );
};


