'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiClipboard = (function (_React$Component) {
    _inherits(TiClipboard, _React$Component);

    function TiClipboard() {
        _classCallCheck(this, TiClipboard);

        _React$Component.apply(this, arguments);
    }

    TiClipboard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.333333333333336 5h-16.666666666666668c-2.7566666666666677 0-5.000000000000001 2.243333333333334-5.000000000000001 5v20c0 2.7566666666666677 2.243333333333333 5 5.000000000000001 5h16.666666666666668c2.7566666666666677 0 5-2.2433333333333323 5-5v-20c0-2.756666666666667-2.2433333333333323-5-5-5z m-13.333333333333336 3.333333333333334h10v1.666666666666666c0 0.9166666666666661-0.75 1.666666666666666-1.6666666666666679 1.666666666666666h-6.666666666666668c-0.9166666666666661 0-1.666666666666666-0.75-1.666666666666666-1.666666666666666v-1.666666666666666z m15 21.666666666666664c0 0.9166666666666679-0.75 1.6666666666666679-1.6666666666666679 1.6666666666666679h-16.666666666666664c-0.9166666666666661 0-1.666666666666666-0.75-1.666666666666666-1.6666666666666679v-20c0-0.9166666666666661 0.75-1.666666666666666 1.666666666666666-1.666666666666666h1.666666666666666v1.666666666666666c0 1.833333333333334 1.5 3.333333333333334 3.333333333333334 3.333333333333334h6.666666666666668c1.8333333333333321 0 3.333333333333332-1.5 3.333333333333332-3.333333333333334v-1.666666666666666h1.6666666666666679c0.9166666666666679 0 1.6666666666666679 0.75 1.6666666666666679 1.666666666666666v20z m-3.333333333333332-1.6666666666666643h-13.333333333333334c-0.46000000000000085 0-0.8333333333333339-0.37333333333333485-0.8333333333333339-0.8333333333333321s0.3733333333333331-0.8333333333333321 0.8333333333333339-0.8333333333333321h13.333333333333334c0.46000000000000085 0 0.8333333333333321 0.37333333333333485 0.8333333333333321 0.8333333333333321s-0.37333333333333485 0.8333333333333321-0.8333333333333321 0.8333333333333321z m0-5h-13.333333333333334c-0.46000000000000085 0-0.8333333333333339-0.37333333333333485-0.8333333333333339-0.8333333333333321s0.3733333333333331-0.8333333333333321 0.8333333333333339-0.8333333333333321h13.333333333333334c0.46000000000000085 0 0.8333333333333321 0.37333333333333485 0.8333333333333321 0.8333333333333321s-0.37333333333333485 0.8333333333333321-0.8333333333333321 0.8333333333333321z m0-5h-13.333333333333334c-0.46000000000000085 0-0.8333333333333339-0.37333333333333485-0.8333333333333339-0.8333333333333321s0.3733333333333331-0.8333333333333321 0.8333333333333339-0.8333333333333321h13.333333333333334c0.46000000000000085 0 0.8333333333333321 0.37333333333333485 0.8333333333333321 0.8333333333333321s-0.37333333333333485 0.8333333333333321-0.8333333333333321 0.8333333333333321z' })
            )
        );
    };

    return TiClipboard;
})(React.Component);

exports['default'] = TiClipboard;
module.exports = exports['default'];