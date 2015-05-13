var words = function(input) {
    var subStrings = input.replace(/\s+/, ' ').split(' ');
    var total = Object.create(null);

    subStrings.forEach(function(string) {
        if (typeof total[string] === 'undefined') {
            total[string] = 0;
        }

        total[string]++;
    });

    return total;
};

module.exports = words;