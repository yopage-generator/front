'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaSortUp = (function (_React$Component) {
    _inherits(FaSortUp, _React$Component);

    function FaSortUp() {
        _classCallCheck(this, FaSortUp);

        _React$Component.apply(this, arguments);
    }

    FaSortUp.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm17.4 15q0.3999999999999986 0.3000000000000007 0.3999999999999986 0.8000000000000007t-0.3999999999999986 0.6999999999999993q-0.3000000000000007 0.3999999999999986-0.6999999999999993 0.3999999999999986h-15.6q-0.3999999999999996 0-0.7999999999999996-0.3999999999999986t-0.3-0.6999999999999993q0-0.5 0.3-0.8000000000000007l7.8-7.8q0.3000000000000007-0.2999999999999998 0.8000000000000007-0.2999999999999998t0.8000000000000007 0.2999999999999998l7.700000000000001 7.8z' })
            )
        );
    };

    return FaSortUp;
})(React.Component);

exports['default'] = FaSortUp;
module.exports = exports['default'];