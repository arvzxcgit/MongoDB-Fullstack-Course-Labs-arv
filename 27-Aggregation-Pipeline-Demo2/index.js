const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

async function runAggregation() {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    console.log("Connected to Demo Database");

    const salesSchema = new mongoose.Schema({
        productName: String,
        category: String,
        price: Number,
        quantity: Number
    });

    const Sale = mongoose.model('Sale', salesSchema);

    // Adding sample data for analysis
    await Sale.insertMany([
        { productName: "Laptop", category: "Electronics", price: 1200, quantity: 5 },
        { productName: "Mouse", category: "Electronics", price: 25, quantity: 10 },
        { productName: "Keyboard", category: "Electronics", price: 50, quantity: 8 },
        { productName: "Desk Chair", category: "Furniture", price: 150, quantity: 4 },
        { productName: "Monitor", category: "Electronics", price: 300, quantity: 2 },
        { productName: "Coffee Table", category: "Furniture", price: 200, quantity: 3 }
    ]);

    try {
        // The Aggregation Pipeline
        const report = await Sale.aggregate([
            // Filter: Only show Electronics
            { $match: { category: "Electronics" } },

            // Group: Calculate total revenue and items sold per category
            { 
                $group: { 
                    _id: "$category", 
                    totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
                    itemsSold: { $sum: "$quantity" }
                } 
            },

            // Project: Reshape the output for the report
            { 
                $project: { 
                    _id: 0, 
                    category: "$_id", 
                    totalRevenue: 1, 
                    itemsSold: 1,
                    averageValue: { $divide: ["$totalRevenue", "$itemsSold"] }
                } 
            },

            // Sort: Highest revenue first
            { $sort: { totalRevenue: -1 } }
        ]);

        console.log("--- Final Sales Report ---");
        console.log(report);

    } catch (err) {
        console.error("Aggregation Error:", err);
    } finally {
        await mongoose.connection.close();
        await mongoServer.stop();
    }
}

runAggregation();