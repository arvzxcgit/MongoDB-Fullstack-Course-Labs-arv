const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

async function startServer() {
    //temporary database in memory
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri)
        .then(() => console.log("Database Connected (In-Memory)!"))
        .catch(err => console.error("Connection Error:", err));

    // User Schema
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, unique: true },
        age: Number
    });

    const User = mongoose.model('User', userSchema);

    try {
        // Insert Data
        const newUser = new User({
            name: "Arvin Test",
            email: "arvin@example.com",
            age: 21
        });
        await newUser.save();
        console.log("Sample data inserted successfully!");

        // Retrieve Data
        const allUsers = await User.find();
        console.log("Retrieved Data:");
        console.log(allUsers);

    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        // Clean up
        await mongoose.connection.close();
        await mongoServer.stop();
    }
}

startServer();