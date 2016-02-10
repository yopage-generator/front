'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaRmb = (function (_React$Component) {
    _inherits(FaRmb, _React$Component);

    function FaRmb() {
        _classCallCheck(this, FaRmb);

        _React$Component.apply(this, arguments);
    }

    FaRmb.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10.5 30.2h-3q-0.20000000000000018 0-0.40000000000000036-0.10000000000000142t-0.20000000000000018-0.3999999999999986v-5.800000000000001h-5q-0.19999999999999996 0-0.3999999999999999-0.10000000000000142t-0.10000000000000009-0.3999999999999986v-1.8000000000000007q0-0.1999999999999993 0.10000000000000009-0.3999999999999986t0.3999999999999999-0.1999999999999993h5v-1.5h-5q-0.19999999999999996 0-0.3999999999999999-0.10000000000000142t-0.10000000000000009-0.3999999999999986v-1.8000000000000007q0-0.1999999999999993 0.10000000000000009-0.3999999999999986t0.3999999999999999-0.1999999999999993h3.7l-5.5-10.000000000000002q-0.19999999999999965-0.2999999999999998 3.608224830031759e-16-0.5999999999999996 0.1-0.20000000000000018 0.5-0.20000000000000018h3.3q0.3999999999999999 0 0.5000000000000004 0.2999999999999998l3.799999999999999 7.4q0.3000000000000007 0.5999999999999996 0.9000000000000004 2.0999999999999996 0.1999999999999993-0.40000000000000036 0.5999999999999996-1.1999999999999993t0.40000000000000036-1l3.4000000000000004-7.3q0.09999999999999964-0.2999999999999998 0.5-0.2999999999999998h3.3000000000000007q0.3000000000000007 0 0.3999999999999986 0.20000000000000018 0.1999999999999993 0.2999999999999998 0.10000000000000142 0.5999999999999996l-5.5 10h3.8000000000000007q0.1999999999999993 0 0.3000000000000007 0.1999999999999993t0.1999999999999993 0.3999999999999986v1.8000000000000007q0 0.1999999999999993-0.1999999999999993 0.3999999999999986t-0.3000000000000007 0.10000000000000142h-5.100000000000001v1.5h5.100000000000001q0.1999999999999993 0 0.3000000000000007 0.1999999999999993t0.1999999999999993 0.3999999999999986v1.8000000000000007q0 0.1999999999999993-0.1999999999999993 0.3999999999999986t-0.3000000000000007 0.10000000000000142h-5.100000000000001v5.800000000000001q0 0.1999999999999993-0.09999999999999964 0.3000000000000007t-0.40000000000000036 0.1999999999999993z' })
            )
        );
    };

    return FaRmb;
})(React.Component);

exports['default'] = FaRmb;
module.exports = exports['default'];