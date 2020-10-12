const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());

app.use('/posts', require('./routes/posts'));

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("Connected to DB!"))
.catch( error => console.log("DB connectection error: " + error.message));


app.get('/', (req, res) => {
    res.send('Hello');
});


app.listen(port, ()=> {console.log(`The server is running on port ${port}`)});