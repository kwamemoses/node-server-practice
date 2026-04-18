const express = require("express");

const app = express();

//Home route 
app.get("/api/Home", (req, res) =>{
    res.json({
    name: "kwame's Home page",
    role: "backend",
    level: "20022",
    color: "green"
    });
});

// abpout route 
app.get("/api/about", (req, res)=>{
    res.json({
        name: "UCL",
        what: "lizzy",
        main: "Agenda"

    });
});

// contact route 
app.get("/api/contact", (req, res)=>{
    res.json({
        phone: "0550271770",
        email: "kwamemoses491@gmail.com",
        another: "mkmensah027@st.ug.edu.gh"
    });
});
// RETURNS JSON
app.get("/api/user", (req, res) => {
    res.json({
        name: "Moses",
        role: "Backend Developer",
        level: "Beginner"
    });
});

app.get("/api/help", (req, res) =>{
    res.json({
        helper: "Adwoa cecilia",
        relatioship: "Mother",
        Also: "mylove"
    });
});

// RETURNS HTML
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h2>About Moses</h2>");
});


app.listen(5000, () => {
    console.log("The server is running");
});


// route parameter(dynamic route)

app.get("/api/user/:id", (req, res) => {
    const userId = req.params.id;

    res.json({
        message: "moses",
        id: userId
    });
});



const users = [
    { id: 1, name: "Moses" },
    { id: 2, name: "David" },
    { id: 3, name: "Gifty" },
    { id: 4, name: "Adom" },
    { id: 5, name: "Florence"},
    { id: 6, name: "Micheal"},
    { id: 7, name: "Lizzy" }
];
// Get All Users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Get users by Id
app.get("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.json({ message: "User not found" });
    }

    res.json(user);
});


// Create a new user (POST request
app.use(express.json());

app.post("/api/users", (req, res) => {
    if (!req.body.name) {
        return res.json({ message: "Name is required" });
    }

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.json(newUser);
});


// Delete a user. 
app.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted",
        user: deletedUser[0]
    });
});