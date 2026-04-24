const express = require('express');
const { validateRegistration } = require('./middleware/validate');

const app = express();
app.use(express.json());

// Registration route with middleware integration
app.post('/register', validateRegistration, (req, res) => {
    // This part is only reached if validation passes
    res.status(201).json({
        success: true,
        message: "User registered successfully!",
        data: req.body
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Validation demo running on port ${PORT}`));