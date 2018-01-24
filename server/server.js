const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.use(express.static('server/public'));


app.listen(port, () => {
    console.log(`server running on ${port}`);
});