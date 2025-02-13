import React from "react";
import { Card, Button } from "react-bootstrap";

const Event = ({ event, onBook, onToggleLike }) => {
  // Détermine l'image à afficher en fonction du nombre de tickets disponibles
  const imageSrc = event.nbTickets === 0 ? "/images/sold_out.png" : event.img;

  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} alt={event.name} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Prix: {event.price}€</Card.Text>
        <Card.Text>Places restantes: {event.nbTickets}</Card.Text>
        <Card.Text>Participants: {event.nbParticipants}</Card.Text>

        <Button
          variant="primary"
          onClick={() => onBook(event.id)}
          disabled={event.nbTickets === 0}
        >
          {event.nbTickets === 0 ? "Sold Out" : "Book an Event"}
        </Button>

        <Button
          variant={event.like ? "danger" : "success"}
          className="ms-2"
          onClick={() => onToggleLike(event.id)}
        >
          {event.like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;