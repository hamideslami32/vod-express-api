const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload")

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const uploadRoute = require("./routes/upload");

// create application/json parser
const jsonParser = express.json();

// create application/x-www-form-urlencoded parser
const urlEncodedParser = express.urlencoded({ extended: false });

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((error) => console.log({ error }));

app.use(express.static("public"));
app.use(cors());
app.use(fileUpload());

app.use(jsonParser);
app.use(urlEncodedParser);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/upload", uploadRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!");
});
