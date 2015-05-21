"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Anagram = (function () {
    function Anagram(anagram) {
        _classCallCheck(this, Anagram);

        this.anagram = anagram;
    }

    _createClass(Anagram, [{
        key: "matches",
        value: function matches() {
            var _this = this;

            var inputs = arguments[0] === undefined ? [] : arguments[0];

            return inputs.reduce(function (previousValue, currentValue, index, array) {
                var str = _this.anagram.toUpperCase();
                var tempInput = currentValue.toUpperCase();

                if (str !== tempInput) {
                    var ii = 0;

                    for (; ii < str.length; ii++) {
                        var position = tempInput.search(str[ii]);

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
    }]);

    return Anagram;
})();

var anagram = (function (_anagram) {
    function anagram(_x) {
        return _anagram.apply(this, arguments);
    }

    anagram.toString = function () {
        return _anagram.toString();
    };

    return anagram;
})(function (anagram) {
    return new Anagram(anagram);
});

module.exports = anagram;
//# sourceMappingURL=anagram.js.map