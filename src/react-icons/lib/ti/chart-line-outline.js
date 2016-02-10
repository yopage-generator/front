'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiChartLineOutline = (function (_React$Component) {
    _inherits(TiChartLineOutline, _React$Component);

    function TiChartLineOutline() {
        _classCallCheck(this, TiChartLineOutline);

        _React$Component.apply(this, arguments);
    }

    TiChartLineOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm10 28.333333333333336c-1.1300000000000008 0-2.2383333333333333-0.39000000000000057-3.123333333333333-1.0966666666666676-1.043333333333333-0.8333333333333321-1.7000000000000002-2.025000000000002-1.8449999999999998-3.349999999999998s0.2283333333333335-2.633333333333333 1.0633333333333335-3.6783333333333346l6.666666666666666-8.333333333333334c1.6300000000000008-2.041666666666666 4.805-2.450000000000001 6.905000000000001-0.8716666666666661l2.791666666666668 2.09 3.6400000000000006-4.549999999999999c0.9516666666666644-1.190000000000003 2.3733333333333277-1.8766666666666696 3.9016666666666637-1.8766666666666696 1.1333333333333329 0 2.240000000000002 0.3866666666666667 3.123333333333335 1.0949999999999998 1.0433333333333366 0.8333333333333339 1.7000000000000028 2.0266666666666673 1.846666666666664 3.3550000000000004s-0.23333333333333428 2.633333333333333-1.06666666666667 3.673333333333334l-6.666666666666668 8.333333333333334c-1.629999999999999 2.043333333333333-4.805 2.4499999999999993-6.906666666666666 0.8766666666666652l-2.789999999999999-2.0933333333333337-3.6400000000000006 4.550000000000001c-0.9499999999999957 1.1900000000000013-2.3733333333333277 1.8766666666666687-3.899999999999995 1.8766666666666687z m6.666666666666668-15c-0.5100000000000016 0-0.9833333333333325 0.2283333333333335-1.3000000000000007 0.6233333333333331l-6.666666666666668 8.333333333333334c-0.27999999999999936 0.3500000000000014-0.4066666666666663 0.7866666666666653-0.35666666666666735 1.2250000000000014 0.05000000000000071 0.44166666666666643 0.2666666666666675 0.8383333333333347 0.6166666666666671 1.1166666666666671 0.37833333333333385 0.30333333333333456 0.7733333333333334 0.36666666666666714 1.038333333333334 0.36666666666666714 0.5083333333333329 0 0.9833333333333325-0.22833333333333172 1.3000000000000007-0.6266666666666652l5.660000000000002-7.073333333333334 5.375 4.034999999999997c0.6999999999999993 0.5266666666666673 1.7600000000000016 0.38333333333333286 2.3000000000000007-0.293333333333333l6.666666666666668-8.333333333333334c0.28000000000000114-0.34999999999999964 0.40500000000000114-0.7833333333333332 0.3566666666666656-1.2249999999999996-0.05000000000000071-0.4450000000000003-0.2666666666666657-0.8416666666666668-0.6166666666666671-1.1166666666666671-0.37666666666666515-0.3049999999999997-0.7716666666666683-0.36666666666666714-1.038333333333334-0.36666666666666714-0.5083333333333329 0-0.9833333333333343 0.22666666666666657-1.3000000000000007 0.625l-5.66 7.07-5.375-4.026666666666669c-0.29166666666666785-0.22000000000000064-0.6366666666666667-0.3333333333333339-1-0.3333333333333339z m15 21.666666666666664h-23.333333333333336c-0.9199999999999982 0-1.6666666666666652-0.7449999999999974-1.6666666666666652-1.6666666666666643s0.746666666666667-1.6666666666666679 1.666666666666667-1.6666666666666679h23.333333333333336c0.9200000000000017 0 1.6666666666666643 0.745000000000001 1.6666666666666643 1.6666666666666679s-0.7466666666666697 1.6666666666666643-1.6666666666666679 1.6666666666666643z' })
            )
        );
    };

    return TiChartLineOutline;
})(React.Component);

exports['default'] = TiChartLineOutline;
module.exports = exports['default'];