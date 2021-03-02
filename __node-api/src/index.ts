import express from 'express';
import routes from './routes';
import path from 'path';

const port = 8080;
const app = express();

app.use('/beverages', express.static(path.resolve(__dirname, '..', 'images', 'products', 'beverages')));
app.use('/dairy', express.static(path.resolve(__dirname, '..', 'images', 'products', 'dairy')));
app.use('/fruits', express.static(path.resolve(__dirname, '..', 'images', 'products', 'fruits')));
app.use('/meat', express.static(path.resolve(__dirname, '..', 'images', 'products', 'meat')));

app.use(routes);

app.listen(port, () => {
  console.log(`Fake back-end api running on port: ${port}`)
});