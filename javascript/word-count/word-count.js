var words = function(input) {
    var subStrings = input.replace(/\n|\t|\s+/g, ' ').split(' ');
    var total = {};

    subStrings.forEach(function(string) {
        if (typeof total[string] === 'undefined' || typeof total[string] !== 'number') {
            total[string] = 0;
        }

        total[string]++;
    });

    return total;
};

module.exports = words;