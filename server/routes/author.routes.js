const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.post("/api/authors", AuthorController.create_author);

    app.get("/api/authors", AuthorController.get_all);

    app.get("/api/authors/:id", AuthorController.get_author);

    app.put("/api/authors/:id", AuthorController.update_author);

    app.delete("/api/authors/:id", AuthorController.delete_author);
}