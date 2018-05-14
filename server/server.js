const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


// var home = require('./routes/home.route');
var messages = require('./routes/message.route');


app.use(express.static('server/public'));
app.use(bodyParser.json());

// app.use('/home', home);
app.use('/messages', messages);


app.listen(PORT, function() {
    console.log(`listening on PORT', ${PORT}`)
});