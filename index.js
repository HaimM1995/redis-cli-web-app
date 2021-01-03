const express = require('express');
const app = express();

const port = 3002;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/view/index.html');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});