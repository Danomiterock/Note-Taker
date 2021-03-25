const { fstat } = require("node:fs");
const fs = require('fs');
const uuid = require('uuid/v1');
const express = require('express');
const path = require('path');
const data = require(__dirname + '/./db/debug.json');
const app = express();
const PORT = process.env.PORT || 8000;

//Middleware functions
add.use(express.urlencoded({ extended: true }));
add.use(express.json());

//static file hosting for public directory
applicationCache.use(express.static("public"));

//HTML routes
app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//API routes
app.get("/api/notes", function (req, res){
    //Retrieve all notes and res.json them back to the front end
    fs.readFile("./db/db.json", "UTF-8", function (err, data){
        res.json(JSON.parse(data));
    });
});

app.post("/api/notes", function (req, res){
    //Create a note from req.body
});

app.delete("/api/notes", function (req, res){
    //Delete a note based off id
});

app.listen(PORT, () => console.log("App listening on port " + PORT));