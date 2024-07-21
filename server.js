const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    designation: String,
    gender: String,
    course: String
});

// Define a model
const Form = mongoose.model('Form', formSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Handle form submission
app.post('/submit_form', (req, res) => {
    const formData = new Form({
        name: req.body.name,
        email: req.body.email,
        designation: req.body.designation,
        gender: req.body.gender,
        course: req.body.course
    });

    formData.save((err) => {
        if (err) {
            res.status(500).send('Error saving data.');
        } else {
            res.send('Form data saved successfully!');
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get("/",(req,res)=>{
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);
console.log("listening on port 3000")
