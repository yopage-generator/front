'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoGear = (function (_React$Component) {
    _inherits(GoGear, _React$Component);

    function GoGear() {
        _classCallCheck(this, GoGear);

        _React$Component.apply(this, arguments);
    }

    GoGear.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm19.9975 13.672500000000001c-3.4924999999999997 0-6.324999999999999 2.83375-6.324999999999999 6.328749999999998 0 3.4924999999999997 2.8324999999999996 6.331250000000001 6.324999999999999 6.331250000000001s6.306250000000002-2.8374999999999986 6.306250000000002-6.330000000000002c0-3.4937499999999986-2.8125-6.327500000000001-6.306249999999999-6.327500000000001z m12.68375 9.9625l-1.1400000000000006 2.74625 2.302500000000002 4.521250000000002-2.8200000000000003 2.8200000000000003-4.627499999999998-2.1849999999999987-2.74625 1.1275000000000013-1.3925000000000018 4.267499999999998-0.17875000000000085 0.5662499999999966h-3.9849999999999994l-1.7250000000000014-4.818750000000001-2.74625-1.1325000000000003-4.5275 2.291249999999998-2.8199999999999994-2.813749999999999 2.1837500000000007-4.629999999999999-1.1312499999999996-2.7437499999999986-4.825-1.5749999999999993v-3.9825000000000017l4.82-1.7274999999999991 1.1312500000000005-2.741250000000001-2.0287500000000005-4.005000000000001-0.2662500000000003-0.5250000000000004 2.8162499999999993-2.813749999999999 4.630000000000001 2.1812499999999986 2.7424999999999997-1.13375 1.3912499999999994-4.265 0.17999999999999972-0.5625h3.9849999999999994l1.7250000000000014 4.82125 2.7399999999999984 1.13375 4.533749999999998-2.2975000000000003 2.8175000000000026 2.8150000000000004-2.182500000000001 4.625 1.1275000000000013 2.7474999999999987 4.835000000000001 1.5712500000000027v3.982499999999998l-4.817500000000003 1.7337500000000006z' })
            )
        );
    };

    return GoGear;
})(React.Component);

exports['default'] = GoGear;
module.exports = exports['default'];