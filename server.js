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
});

app.post("/api/notes", function (req, res){
    //Create a note from req.body
});

app.delete("/api/notes", function (req, res){
    //Delete a note based off id
});

app.listen(PORT, () => console.log("App listening on port " + PORT));