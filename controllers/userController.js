class ExampleController {
    constructor() {
        // Initialize any dependencies or settings here
    }

    saludar(req, res) {
        // Logic to fetch examples from database or other source
        res.send('hola');
    }

    despedir(req, res) {
        // Logic to create a new example
        res.send('chao');
    }
}

module.exports = new ExampleController();