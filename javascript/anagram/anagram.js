class Anagram {
    constructor(anagram) {
        this.anagram = anagram;
    }

    matches(inputs = []) {
        return inputs.reduce((previousValue, currentValue, index, array) => {
            let str = this.anagram.toUpperCase();
            let tempInput = currentValue.toUpperCase();

            if (str !== tempInput) {
                let ii = 0;

                for (; ii < str.length; ii++) {
                    let position = tempInput.search(str[ii]);

                    if (position === -1) {
                        // character wasn't found.  Get outta here
                        break;
                    } else {
                        // character found.  Delete it from the string
                        tempInput = tempInput.slice(0, position) + tempInput.slice(position + 1);
                    }
                }

                // check if we've made it all the way through the string and there are no letters left
                if (str.length === ii && tempInput.length === 0) {
                    previousValue.push(currentValue);
                }
            }

            return previousValue;
        }, []);

    }
}

let anagram = function(anagram) {
    return new Anagram(anagram);
};

module.exports = anagram;