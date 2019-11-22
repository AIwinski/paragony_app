const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const User = require("./models/User");

const userRoutes = require("./routes/users");

app.use(bodyParser.json({ limit: "4mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(morgan("dev"));

mongoose.connect("mongodb://aiwinski:123456abc@ds047958.mlab.com:47958/paragony_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello from the server!"
    });
});

app.use("/users", userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
