import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <div key={props.id}>
      <Card  style={{ width: '20rem' }}>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3">{props.name}</CardTitle>
          <CardSubtitle>{props.gender}</CardSubtitle>
          <CardText>Status: {props.status}</CardText>
          <CardText>Episodes: {props.episode.length}</CardText>
          <CardText>Species: {props.species}</CardText>
          <CardText>Origin: {props.origin.name}</CardText>
          <Button href={`/character/${props.id}`}>View</Button>
        </CardBody>
      </Card>
      </div>
  );
};

export default CharacterCard;
