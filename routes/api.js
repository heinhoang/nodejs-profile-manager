const todoController = require('../controllers').user;

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(201).send({
            message: "hello to API"
        });
    });


    // For any other request method on todo items, we're going to return "Method Not Allowed"
    app.all('/api/todos/:todoId/items', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));
};