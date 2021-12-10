import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ error: "Hello World!!" })
} )

app.listen(3333);