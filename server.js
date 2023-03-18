const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at ");
});

app.get("/about", function(req, res) {
    res.send("<h1>Hey, my name is Pufi. I am the best doggo alive. Woof Woof 🐶</h1>");
});

app.get("/hobbies", function(req, res) {
    res.send("<h1>Hey, my hobbies are eating 🍎🍿, wooofing at people 🦅 and sleeping 💆‍♀️. Woof Woof 🐶</h1>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});


