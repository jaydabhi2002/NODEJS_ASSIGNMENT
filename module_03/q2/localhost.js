const express = require("express")
const app = express();
const PORT = 5000;

app.get("/", (req, resp) => {
    resp.send("Server Connected")
})

app.listen(PORT, () => {
    console.log("server runing on port: " + PORT);
})
