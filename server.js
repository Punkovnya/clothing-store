const express = require('express');
const jsonParser = express.json();
const app = express();


app.use(express.static(__dirname + '/public'));
app.get("/register", jsonParser, function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
 app.get("/", function (request, response) {
    response.send("Главная страница");
}); 

app.listen(process.env.PORT || 8080);
console.log('Server running on port 8080.');