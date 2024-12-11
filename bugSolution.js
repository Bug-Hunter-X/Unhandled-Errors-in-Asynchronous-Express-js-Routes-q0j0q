const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a potential error
        const success = Math.random() < 0.5;
        if (success) {
          resolve();
        } else {
          reject(new Error('Simulated asynchronous error'));
        }
      }, 3000);
    });
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error during request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});