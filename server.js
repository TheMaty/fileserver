// Import express framework
const express = require('express');


// Import middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

// Import routes

const downloadRouter = require('./routes/download-route');
// const uploadRouter = require('./routes/upload-route');

const uploadAsset = require('./controllers/upload-controller');


// Setup default port
const PORT = process.env.PORT || 8000;

// Create express app
const app = express();

// Implement middleware
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());


// Implement route for '/api' endpoint
app.use('/api/download', downloadRouter);
app.post('/api/upload', uploadAsset);


// Implement route for errors
app.use((err, req, res, next) => {
   console.error(err.stack)
   res.status(500).send('Something broke!')
});

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
});
