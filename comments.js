// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser to parse JSON
app.use(bodyParser.json());

// Use body-parser to parse URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Use express to serve static files
app.use(express.static('public'));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set up database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/commentDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

// Create model
const Comment = mongoose.model('Comment', commentSchema);

// Get all comments from database
app.get('/', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { comments: comments });
        }
    });
});

// Post comment to database
app.post('/comment', (req, res) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });
    comment.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});