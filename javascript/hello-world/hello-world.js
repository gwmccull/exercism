class HelloWorld {
    constructor() {

    }

    hello(input) {
        if (input === '') {
            input = 'world';
        }

        return `Hello, ${input}!`;
    }
}

module.exports = HelloWorld;