const express = require('express');
const app = express();
const PORT = 3000; // You can use any port number you prefer

app.use(express.json()); // Middleware to parse JSON request bodies

// Route to handle addition of num1 and num2 query parameters
app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1) || 0;
    const num2 = parseInt(req.query.num2) || 0;
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});

// Route to double a number received as a path parameter
app.post('/double/:num', (req, res) => {
    const num = parseInt(req.params.num) || 0;
    const doubled = num * 2;
    res.send(`Double of ${num} is: ${doubled}`);
});

// Route to multiply two numbers received in the request body
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const product = (parseInt(num1) || 0) * (parseInt(num2) || 0);
    res.send(`The product of ${num1} and ${num2} is: ${product}`);
});

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express App');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});