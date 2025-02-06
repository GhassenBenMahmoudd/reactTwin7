import React, { useState } from "react";
import { Container, ListGroup, Button, Form, Alert } from "react-bootstrap";

const NotesManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [error, setError] = useState("");

  // Fonction pour ajouter une note
  const addNote = () => {
    const noteValue = parseFloat(newNote);
    
    if (isNaN(noteValue) || noteValue < 0 || noteValue > 20) {
      setError("Veuillez entrer une note valide entre 0 et 20.");
      return;
    }

    setNotes([...notes, noteValue]);
    setNewNote("");
    setError("");
  };

  // Fonction pour supprimer une note spécifique
  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Calcul de la moyenne des notes
  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    return (notes.reduce((acc, note) => acc + note, 0) / notes.length).toFixed(2);
  };

  return (
    <Container className="mt-4">
      <h3>Gestionnaire de Notes</h3>

      {/* Affichage des erreurs */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Formulaire d'ajout */}
      <Form className="d-flex mb-3">
        <Form.Control
          type="number"
          placeholder="Ajouter une note (0-20)"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <Button variant="primary" onClick={addNote} className="ms-2">Ajouter</Button>
      </Form>

      {/* Liste des notes */}
      <ListGroup>
        {notes.map((note, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            Note {index + 1}: {note}
            <Button variant="danger" size="sm" onClick={() => removeNote(index)}>Supprimer</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Affichage de la moyenne */}
      <h4 className="mt-3">Moyenne des notes: {calculateAverage()}</h4>
    </Container>
  );
};

export default NotesManager;
