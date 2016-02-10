'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoPrimitiveDot = (function (_React$Component) {
    _inherits(GoPrimitiveDot, _React$Component);

    function GoPrimitiveDot() {
        _classCallCheck(this, GoPrimitiveDot);

        _React$Component.apply(this, arguments);
    }

    GoPrimitiveDot.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm9.99625 20c0-5.5275 4.4725-10 10-10 5.525000000000002 0 10 4.4725 10 10s-4.474999999999998 10-10 10c-5.5275 0-10-4.4725-10-10z' })
            )
        );
    };

    return GoPrimitiveDot;
})(React.Component);

exports['default'] = GoPrimitiveDot;
module.exports = exports['default'];