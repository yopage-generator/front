'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoCreditCard = (function (_React$Component) {
    _inherits(GoCreditCard, _React$Component);

    function GoCreditCard() {
        _classCallCheck(this, GoCreditCard);

        _React$Component.apply(this, arguments);
    }

    GoCreditCard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 27.5h5v-2.5h-5v2.5z m7.5 0h5v-2.5h-5v2.5z m2.5-7.5h-10v2.5h10v-2.5z m-5-2.5h2.5l5-5h-2.5l-5 5z m7.5 5h7.5v-2.5h-7.5v2.5z m20-15h-35s-2.5 1.25-2.5 2.5v20s1.25 2.5 2.5 2.5h35s2.5-1.25 2.5-2.5v-20s-1.25-2.5-2.5-2.5z m0 10v11.25s0 1.25-1.25 1.25h-32.5c-1.25 0-1.25-1.25-1.25-1.25v-11.25h2.5l5-5h-7.5v-1.25s0-1.25 1.25-1.25h32.5c1.25 0 1.25 1.25 1.25 1.25v1.25h-15l-5 5h20z' })
            )
        );
    };

    return GoCreditCard;
})(React.Component);

exports['default'] = GoCreditCard;
module.exports = exports['default'];