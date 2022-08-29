const express = require('express');
const app = express();
const port = 2323;

app.use('/ping', (req, res) => {
    res.send(new Date());
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/EXA.html');
});

app.listen(port, () => console.log(`MUSIC is listening to http://localhost:${port}`));