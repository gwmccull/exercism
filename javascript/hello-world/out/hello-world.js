'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var HelloWorld = (function () {
    function HelloWorld() {
        _classCallCheck(this, HelloWorld);
    }

    _createClass(HelloWorld, [{
        key: 'hello',
        value: function hello(input) {
            if (input === '') {
                input = 'world';
            }

            return 'Hello, ' + input + '!';
        }
    }]);

    return HelloWorld;
})();

module.exports = HelloWorld;
//# sourceMappingURL=hello-world.js.map