const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Itech123:Itech123@cluster0.dvsl1s2.mongodb.net/Login', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected successfully to MongoDB");
});

// User schema and model
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
});

const User = mongoose.model('Users', userSchema);

const cors = require('cors');
app.use(cors());


// Routes
app.post('/api/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const newUser = new User({ email, password, role });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
