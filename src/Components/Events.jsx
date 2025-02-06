import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../events.json";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [showWelcome, setShowWelcome] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookEvent = (id) => {
    setEvents(events.map(event => {
      if (event.id === id && event.nbTickets > 0) {
        return {
          ...event,
          nbParticipants: event.nbParticipants + 1,
          nbTickets: event.nbTickets - 1
        };
      }
      return event;
    }));
    setMessage("You have booked an event!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleToggleLike = (id) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, like: !event.like } : event
    ));
  };

  return (
    <Container>
{showWelcome && <Alert variant="info">Bienvenue sur notre site d’événements !</Alert>}
{message && <Alert variant="success">{message}</Alert>}

      <Row>
        {events.map(event => (
          <Col key={event.id} md={3} >
          <Event 
              event={event} 
              onBook={handleBookEvent} 
              onToggleLike={handleToggleLike} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
