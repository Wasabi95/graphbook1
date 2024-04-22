//src/server/index.js
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv'; // Import dotenv
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import compress from 'compression';
import path from 'path';

dotenv.config(); // Call dotenv.config() after importing dotenv

// Retrieve environment variables
const PORT = process.env.PORT || 5050;
const ATLAS_URI = process.env.ATLAS_URI;

const root = path.join(__dirname, '../../');

const app = express();

app.use("/record", records);

app.use(compress());
if(process.env.NODE_ENV === 'production') {
  app.use(helmet());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"]
    }
  }));
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
}
app.use(
  cors({
    "origin": "*",
  })
);
app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.get('/', (req, res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`)); // Use PORT variable here
console.log('Server is now running and ready to accept requests.');
