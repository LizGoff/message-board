const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


// var home = require('./routes/home.route');
var message_board = require('./routes/message.route');


app.use(express.static('server/public'));
app.use(bodyParser.json());

// app.use('/home', home);
app.use('/message_board', message_board);


app.listen(PORT, function() {
    console.log(`listening on PORT', ${PORT}`)
})