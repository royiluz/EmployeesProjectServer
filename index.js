const express = require("express");
const app = express();
const mongoose = require('mongoose');
const conn = require("./database");
const bodyParser = require("body-parser");
const userTable = require('./schema/userTable');
const cors = require('cors');
const port = 3020;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get all users 
app.get("/", async (_, res) => {
    try {
        users = await userTable.find();
        return res.status(200).json(users);
    } catch (err) {
        console.log(`Error while get all users. ${err}`);
        return res.status(400).json({ error: err });
    }
});

// get specific user 
app.get("/:email", async (req, res) => {
    const { email } = req.params;
    try {
        users = await userTable.find({ "email": email });
        return res.status(200).json(users);
    }
    catch (err) {
        console.log(`Error while get specific user. ${err}`);
        return res.status(400).json({ error: err })
    }
});

// update specific user status 
app.put("/:email", async (req, res) => {
    const { email } = req.params;
    try {
        users = await userTable.find({ "email": email }).updateOne({ "status": req.query.status });
        return res.status(204).json(users);
    } catch (err) {
        console.log(`Error while update user status. ${err}`);
        return res.status(400).json({ error: err });
    }
});

// post new user 
app.post("/:email", async (req, res) => {
    const { email } = req.params;
    const { name, status } = req.query;
    try {
        user = new userTable({ "name": name, "status": status, "email": email });
        await user.save();
    } catch (err) {
        console.log("Error while add new user", err);
        return res.status(400).json({ error: err })
    }
    return res.status(201).json(user)
});

// Prints a log once the server starts listening
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

