'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaLineChart = (function (_React$Component) {
    _inherits(FaLineChart, _React$Component);

    function FaLineChart() {
        _classCallCheck(this, FaLineChart);

        _React$Component.apply(this, arguments);
    }

    FaLineChart.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm40 32.5v2.5h-40v-30h2.5v27.5h37.5z m-2.5-24.375v8.49625q0 0.41000000000000014-0.3812500000000014 0.5749999999999993t-0.6937500000000014-0.14499999999999957l-2.362499999999997-2.3625000000000007-12.364999999999998 12.3625q-0.19500000000000028 0.19624999999999915-0.4499999999999993 0.19624999999999915t-0.44750000000000156-0.19500000000000028l-4.550000000000001-4.552499999999998-8.125 8.125-3.75-3.75 11.425-11.425q0.19500000000000028-0.19624999999999915 0.4499999999999993-0.19624999999999915t0.44750000000000156 0.19500000000000028l4.550000000000001 4.550000000000001 9.0625-9.0625-2.3625000000000007-2.3625000000000007q-0.3125-0.3125-0.14624999999999844-0.6950000000000003t0.577499999999997-0.37875000000000014h8.49625q0.27250000000000085 0 0.447499999999998 0.17499999999999982t0.17499999999999716 0.4500000000000002z' })
            )
        );
    };

    return FaLineChart;
})(React.Component);

exports['default'] = FaLineChart;
module.exports = exports['default'];