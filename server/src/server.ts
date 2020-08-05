import express, { json } from 'express';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  return res.json({ message: 'tudo certo'});
});

app.listen(3333);
