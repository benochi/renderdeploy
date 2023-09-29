const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const animals = [
  { id: 1, name: "Lion" },
  { id: 2, name: "Tiger" },
  { id: 3, name: "Bear" },
  { id: 4, name: "Elephant" },
  { id: 5, name: "Giraffe" }
];

app.use(cors());

app.get('/api/animals', (req, res) => {
  res.json(animals);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
