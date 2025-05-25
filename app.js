require('dotenv').config();
require('express-async-errors');
const PORT = process.env.PORT || 3000;
//async errors

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('Hello World <a href="/api/v1/products">prods</a>');
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to the database...');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();