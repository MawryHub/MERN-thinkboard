//import express from 'express';
const express = require('express');

const app = express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 5 notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({ message: "note created" });
});

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "note updated" });
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "note deleted" });
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
