const express = require("express");
const cors = require("cors");

var env = process.env.NODE_ENV || "development";
var config = require("./src/configs/general.config")[env];
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.listen(config.server.port, () =>
  console.log(`Server listening at server port ${config.server.port}`)
);

// const indexRouter = require("./routes/index");
const usersRouter = require("./src/routes/users");
// const modelRouter = require("./routes/model"); //Import routes for "catalog" area of site
// const pageRouter = require("./routes/page"); //Import routes for "catalog" area of site

// app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/page", pageRouter);
//we can change the model by using /page/model/create etc.
