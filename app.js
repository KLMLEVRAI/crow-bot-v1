const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

// Endpoint pour le Healthcheck
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
