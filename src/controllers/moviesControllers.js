const movies = require("../models/filmes.json")

const home = (request, response) => {
    response.status(200).send(
        {
            "mensagem": "Reprogramaflix - Filmes"
        }
    )
}

const getAll = (request, response) => {
    response.status(200).send(movies);
};

const getById = (request, response) => {
    const requestId = request.params.id;
    const filteredId = movies.find(movie => movie.id == requestId);
    response.status(200).send(filteredId);
}

const getByTitle = (request, response) => {
    const requestedTitle = request.query.title.toLowerCase()

    const filteredTitle = movies.find(movie => movie.title.toLowerCase().includes(requestedTitle))

    if(filteredTitle === "" || filteredTitle === undefined) {
        response.status(404).send({
            "mensagem": "Por favor, insira um título válido"
        })        
    } else {
        response.status(200).send(filteredTitle)
    }
}

module.exports = { home, getAll, getById, getByTitle };



