// src/App.jsx
import React from 'react';
import findLongestWord from './Ecmascript/findLongestWord';
import countOccurrences from './Ecmascript/countOccurrences';
import calculateTotalMarks from './Ecmascript/calculateTotalMarks';
import { Tab, searchById } from './Ecmascript/Tab';

function App() {
  // Exemple d'utilisation de findLongestWord
  const mots = ["bonjour", "au revoir", "salut", "hello"];
  const longestWord = findLongestWord(mots);

  // Exemple d'utilisation de countOccurrences
  const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
  const occurrences = countOccurrences(input);

  // Exemple d'utilisation de calculateTotalMarks
  const students = [
    { name: 'John', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'Wick', id: 115, marks: 75 },
  ];
  const totalMarks = calculateTotalMarks(students);

  // Exemple d'utilisation de searchById
  const foundStudent = searchById(3, Tab);

  return (
    <div>
      <div>
        <h2>findLongestWord</h2>
        <p>Le mot le plus long est : {longestWord.mot} (longueur : {longestWord.longueur})</p>
      </div>
      <div>
        <h2>countOccurrences</h2>
        <pre>{JSON.stringify(occurrences, null, 2)}</pre>
      </div>
      <div>
        <h2>calculateTotalMarks</h2>
        <p>Total des notes après bonus : {totalMarks}</p>
      </div>
      <div>
        <h2>searchById</h2>
        <p>Élément trouvé : {JSON.stringify(foundStudent, null, 2)}</p>
      </div>
    </div>
  );
}

export default App;