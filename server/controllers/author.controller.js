const Author = require("../models/author.model");

module.exports.get_all = (req, res) => {
    /*Autor.find()*/
    /*To order, 1 means ascending order */
    Author.find().collation({locale: "en"}).sort({nombre: 1})
        .then(authors => res.json(authors))
        .catch(error => res.status(400).json(error));
}

module.exports.create_author = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(error => res.status(400).json(error));
}

module.exports.get_author = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(error => res.status(400).json(error));
}

module.exports.update_author = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(author => res.json(author))
        .catch(error => res.status(400).json(error));
}

module.exports.delete_author = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(error => res.status(400).json(error));
}