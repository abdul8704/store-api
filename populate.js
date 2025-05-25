require('dotenv').config();
const connectDB = require('./db/connect');

const  Product = require('./models/product');
const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to the database...');

        await Product.deleteMany(); // Clear existing products
        await Product.create(jsonProducts); // Populate with new products

        console.log('Database populated with products...');
        process.exit(0); // Exit the process after completion
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit with failure
    }
}

start()