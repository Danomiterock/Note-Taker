const fs = require('fs');
const uuid = require('uuid');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require("./db/db.json")

//Middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static file hosting for public directory
app.use(express.static("public"));


//API routes
app.get("/api/notes", function (req, res){
    //Retrieve all notes and res.json them back to the front end
    fs.readFile("db/db.json", "UTF-8", function (err, data){
        return err ? console.log(err) : res.json(JSON.parse(data));        
    });
});

app.post("/api/notes", function (req, res){
    //Create a note from req.body
    //read create save read again
    console.log(req.body);
    fs.readFile("db/db.json", "UTF-8", function (err, data){
        if (err) throw err
    const jsonData = JSON.parse(data);
    const newNote = {id:db.length+1, title:req.body.title, text:req.body.text};
    jsonData.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(jsonData), function (err, data){
        if (err) throw err 
        res.end(data)
    });
    });
});

app.delete("/api/notes", function (req, res){
    //Delete a note based off id
    
});

//HTML routes
app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log("App listening on port " + PORT));