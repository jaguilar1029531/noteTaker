const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//heres our app and port number
const app = express();
const PORT = process.env.PORT || 3000;
//route middleware + parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//port start
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));