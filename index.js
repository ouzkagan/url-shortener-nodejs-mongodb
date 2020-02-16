const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));

//define Urls
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 4000;

app.listen(PORT, () => console.log(`App Running On Port ${PORT}`));
