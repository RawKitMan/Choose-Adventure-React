// Import all of the server requirements
const express = require('express'),
  path = require('path'),
  //mongoose = require('mongoose'),
  PORT = process.env.PORT || 3001,
  app = express();


// Define middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Database setup:
//const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/textrpg';
//mongoose.connect(mongoURI, { useNewUrlParser: true });

// Define API routes:
//const apiRouter = require('./routes/apiRoutes');
//app.use('/api', apiRouter);

// Send every other request to the React app:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, () =>
  console.log(`🌎 ==> API server now listening on port ${PORT}!`)
);