const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Route par défaut
app.get('/', (req, res) => {
  res.send('Bot Discord is running!');
});

// Lancer le serveur pour satisfaire Render
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
