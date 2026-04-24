const validateRegistration = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];

    // 1. Name Validation (Letters and spaces only)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name || !nameRegex.test(name)) {
        errors.push("Name must contain only letters and spaces.");
    }

    // 2. Email Validation (Presence and Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push("A valid email address is required.");
    }

    // 3. Password Validation (Length and Special Character)
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!password || password.length < 8 || !specialCharRegex.test(password)) {
        errors.push("Password must be at least 8 characters long and include a special character.");
    }

    // Structured Error Response
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
            errors: errors
        });
    }

    next(); // Move to the controller if valid
};

module.exports = { validateRegistration };