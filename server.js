require('dotenv').config();
const path = require('path')
const cors = require('cors')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connection')
const workshop = require('./routes/workshop')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")))
app.use("/workshop",workshop)

app.use((req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "public", "index.html"));
})


async function startServer() {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log(`Connected to db...`)
        app.listen(PORT, () => {
            if (PORT == 5000) console.log(`Server running at port ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();