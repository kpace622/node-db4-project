const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get recipes'})
        });
});

router.get('/all', (req, res) => {
    Recipes.getRecipes()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get recipes'})
        });
});

router.get('/list/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(list => {
            console.log(list)
            res.json(list)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get list'})
        })
})

router.get('/instructions/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(instructions => {
            res.json(instructions)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get instructions'})
        })
})

module.exports = router;