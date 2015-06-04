"use strict";

var _taggedTemplateLiteral = function (strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var BeerSong = (function () {
    function BeerSong() {
        _classCallCheck(this, BeerSong);
    }

    _createClass(BeerSong, [{
        key: "sing",
        value: function sing(start) {
            var end = arguments[1] === undefined ? 0 : arguments[1];

            return this.verse(start) + (start !== end ? "\n" + this.sing(start - 1, end) : "");
        }
    }, {
        key: "verse",
        value: (function (_verse) {
            function verse(_x) {
                return _verse.apply(this, arguments);
            }

            verse.toString = function () {
                return _verse.toString();
            };

            return verse;
        })(function (num) {
            var verse = this.replace(_taggedTemplateLiteral(["", " ", " of beer on the wall, ", " ", " of beer.\n"], ["", " ", " of beer on the wall, ", " ", " of beer.\\n"]), num, BeerSong.bottles(num), num, BeerSong.bottles(num));

            if (num) {
                verse += this.replace(_taggedTemplateLiteral(["Take ", " down and pass it around, ", " ", " of beer on the wall.\n"], ["Take ", " down and pass it around, ", " ", " of beer on the wall.\\n"]), num === 1 ? "it" : "one", num - 1, BeerSong.bottles(num - 1));
            } else {
                verse += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
            }

            return verse;
        })
    }, {
        key: "replace",
        value: function replace(strings) {
            for (var _len = arguments.length, subs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                subs[_key - 1] = arguments[_key];
            }

            var result = "";

            subs.forEach(function (sub, index, subs) {
                var str = sub;
                if (str === 0) {
                    if (index === 0) {
                        str = "No more";
                    } else {
                        str = "no more";
                    }
                }

                result += strings[index] + str;
            });

            result += strings[strings.length - 1];

            return result;
        }
    }], [{
        key: "bottles",
        value: function bottles(num) {
            return num === 1 ? "bottle" : "bottles";
        }
    }]);

    return BeerSong;
})();

module.exports = new BeerSong();
//# sourceMappingURL=beer-song.js.map