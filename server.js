const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: true })); // to get the data from the POST

//Its Default action
// app.get("/", function (request, response) {
//     response.send("<h2>Hello default action!</h2>")
// });

app.get("/", function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get("/contact", function (request, response) {
    response.sendFile(__dirname + '/contact.html');
});

000
app.post("/", function (request, response) {
    response.send("Welcome dear " + request.body.firstName + " " + request.body.secondName);
});

app.listen(3000, function () {
    console.log("Server is running and listening in the port 3000");
});
