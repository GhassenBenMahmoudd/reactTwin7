import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ComponentFonct() {
  const [monTexte, setMonTexte] = useState("HelloWorld");
  const [value, setValue] = useState(0);

  const handleClick = () => setValue(value + 1);

  return (
    <>
      <p>Ceci est un composant : {monTexte}</p>
      <p>Valeur actuelle : {value}</p>
      <Button variant="primary" onClick={handleClick}>
        Incrémenter
      </Button>
    </>
  );
}

export default ComponentFonct;
