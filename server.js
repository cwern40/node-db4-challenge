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

server.get('/:id/list', (req, res) => {
    const { id } = req.params

    Recipes.getShoppingList(id)
        .then(list => {
            res.json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Error retrieving list"
            })
        })
})

server.get('/:id/steps', (req, res) => {
    const { id } = req.params

    Recipes.getInstructions(id)
        .then(steps => {
            res.json(steps)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Error retrieving steps"
            })
        })
})

module.exports = server;