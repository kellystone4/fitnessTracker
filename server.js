// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")


const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/glacial-inlet',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Listen 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

// const PORT = process.env.PORT || 3000;

// const db = require("./models");

// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));
// apiRoutes(app);
// htmlRoutes(app);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
