"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var FoodChain = (function () {
    function FoodChain() {
        _classCallCheck(this, FoodChain);
    }

    _createClass(FoodChain, [{
        key: "verses",
        value: function verses(start, end) {
            if (start > end) {
                return "";
            }return this.verse(start) + "\n" + this.verses(start + 1, end);
        }
    }, {
        key: "verse",
        value: function verse(num) {
            var result = this.intro();

            switch (num) {
                case 1:
                    result += "fly.\n";
                    break;
                case 2:
                    result += "spider.\nIt wriggled and jiggled and tickled inside her.\n";
                    break;
                case 3:
                    result += "bird.\n" + "How absurd to swallow a bird!\n";
                    break;
                case 4:
                    result += "cat.\n" + "Imagine that, to swallow a cat!\n";
                    break;
                case 5:
                    result += "dog.\n" + "What a hog, to swallow a dog!\n";
                    break;
                case 6:
                    result += "goat.\n" + "Just opened her throat and swallowed a goat!\n";
                    break;
                case 7:
                    result += "cow.\n" + "I don't know how she swallowed a cow!\n";
                    break;
                case 8:
                    result += "horse.\n" + "She's dead, of course!\n";
                    break;
            }

            if (num > 1 && num < 8) {
                result += this.getRefrains(num - 1);
            }

            if (num < 8) {
                result += this.flyEnding();
            }

            return result;
        }
    }, {
        key: "intro",
        value: function intro() {
            return "I know an old lady who swallowed a ";
        }
    }, {
        key: "flyEnding",
        value: function flyEnding() {
            return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
        }
    }, {
        key: "getRefrains",
        value: function getRefrains(num) {
            if (num === 0) {
                return "";
            }return this.getRefrain(num) + this.getRefrains(num - 1);
        }
    }, {
        key: "getRefrain",
        value: function getRefrain(num) {
            var result = "";

            switch (num) {
                case 1:
                    result = "She swallowed the spider to catch the fly.\n";
                    break;
                case 2:
                    result = "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
                    break;
                case 3:
                    result = "She swallowed the cat to catch the bird.\n";
                    break;
                case 4:
                    result = "She swallowed the dog to catch the cat.\n";
                    break;
                case 5:
                    result = "She swallowed the goat to catch the dog.\n";
                    break;
                case 6:
                    result = "She swallowed the cow to catch the goat.\n";
                    break;
            }

            return result;
        }
    }]);

    return FoodChain;
})();

module.exports = new FoodChain();
//# sourceMappingURL=food-chain.js.map