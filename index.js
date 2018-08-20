// Imports
import express from 'express';
import morgan from 'morgan';
import router from './router';

// Setup
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(morgan('combined'));
app.use(router);

// Listen
app.listen(port, () => {
  console.log(`Started at http://localhost:${port}`);
});
