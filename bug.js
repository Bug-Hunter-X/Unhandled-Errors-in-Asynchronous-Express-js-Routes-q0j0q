const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation (e.g., database query)
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 3000); // Simulate a delay
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});