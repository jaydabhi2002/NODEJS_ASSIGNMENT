const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 5000
app.use (express.json())

const dburl = "mongodb+srv://jay:jay@cluster0.0iv4wxy.mongodb.net/shops?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("DB connected..");
  }).catch((error) => {
      console.log(error);
  })

  const taskrouter = require("./router/taskrouter");
  app.use("/", taskrouter);
  const shoprouter = require("./router/shoprouter");
  app.use("/", shoprouter);
  
  app.listen(PORT, () => {
    console.log("server running on port :" + PORT);
  });