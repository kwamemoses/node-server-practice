const users = [
    { id: 1, name: "Moses" },
    { id: 2, name: "David" },
    { id: 3, name: "Gifty" },
    { id: 4, name: "Adom" },
    { id: 5, name: "Florence"},
    { id: 6, name: "Micheal"},
    { id: 7, name: "Lizzy" }
];

app.get("/api/users", (req, res) => {
    res.json(users);
});