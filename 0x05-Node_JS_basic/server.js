import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

// Use routes defined in full_server/routes/index.js
app.use('/', routes);

// Export the express app
export default app;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

