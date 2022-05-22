const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({
    message: 'success',
  });
});
app.use('/user', routes);

app.use((req, res, next) => {
  next(createError.NotFound());
});
app.use((err, req, res, next) => {
  res.status(err.status || 404).send({
    status: err.status || 404,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
