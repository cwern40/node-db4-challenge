const express = require('express');

const server = express();

const Recipes = require('./data/recipes-model')

server.use(express.json());

server.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Error retrieving recipes"
            })
        })
})

module.exports = server;