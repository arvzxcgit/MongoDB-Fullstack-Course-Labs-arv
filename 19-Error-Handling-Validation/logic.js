// This function handles the conceptual flow of a user trying to sign up
const processRegistration = (userData) => {
    console.log("--- Starting Registration Process ---");

    try {
        // Validation: Checking input before we even touch the database
        // Client-side style check (Done here for demo)
        if (!userData.email.includes("@")) {
            throw {
                type: "Validation Error",
                statusCode: 400,
                message: "Invalid email format. Please include an '@' symbol."
            };
        }

        if (userData.password.length < 8) {
            throw {
                type: "Validation Error",
                statusCode: 400,
                message: "Password is too short. It must be at least 8 characters."
            };
        }

        // Authentication/Authorization Check
        if (userData.role === "admin") {
            throw {
                type: "Authorization Error",
                statusCode: 403,
                message: "You do not have permission to create an admin account."
            };
        }

        // Simulating a System/Server Error (e.g., Database is down)
        const isDatabaseConnected = false; 
        if (!isDatabaseConnected) {
            throw {
                type: "System Error",
                statusCode: 500,
                message: "Our servers are having a moment. Please try again later."
            };
        }

        console.log("201 Success: User registered successfully!");

    } catch (error) {
        // This catch block handles the error communication
        console.log(`[Status ${error.statusCode}] ${error.type}`);
        console.log(`User Message: ${error.message}`);
        
        // Log the actual technical detail internally for developers
        console.log(`Internal Log: Logged error at ${new Date().toISOString()}`);
    }
};

// Scenario 1: Validation Error (400)
processRegistration({ email: "arvin.com", password: "123", role: "user" });

console.log("\n----------------------------\n");

// Scenario 2: Authorization Error (403)
processRegistration({ email: "arvin@example.com", password: "password123", role: "admin" });

console.log("\n----------------------------\n");

// Scenario 3: System Error (500)
processRegistration({ email: "arvin@example.com", password: "password123", role: "user" });