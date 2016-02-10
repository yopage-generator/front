'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaCloudDownload = (function (_React$Component) {
    _inherits(FaCloudDownload, _React$Component);

    function FaCloudDownload() {
        _classCallCheck(this, FaCloudDownload);

        _React$Component.apply(this, arguments);
    }

    FaCloudDownload.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm26.666666666666664 20.666666666666664q0-0.293333333333333-0.18666666666666742-0.4800000000000004t-0.4799999999999969-0.18666666666666387h-4.666666666666668v-7.333333333333334q0-0.27066666666666706-0.19733333333333292-0.46933333333333316t-0.46933333333333493-0.19733333333333292h-4q-0.27066666666666706 0-0.46933333333333493 0.19733333333333292t-0.19733333333332936 0.46933333333333316v7.333333333333334h-4.666666666666668q-0.27066666666666706 0-0.46933333333333316 0.19733333333333292t-0.19733333333333292 0.4693333333333314q0 0.293333333333333 0.18666666666666742 0.4800000000000004l7.333333333333334 7.333333333333332q0.1893333333333338 0.18666666666666742 0.4800000000000004 0.18666666666666742t0.4800000000000004-0.18666666666666742l7.310666666666666-7.313333333333333q0.20933333333332982-0.24933333333333252 0.20933333333332982-0.5z m13.333333333333336 4.666666666666668q0 3.312000000000001-2.344000000000001 5.655999999999999t-5.655999999999999 2.3439999999999976h-22.666666666666668q-3.8533333333333335 0-6.593333333333334-2.740000000000002t-2.7399999999999984-6.593333333333327q0-2.706666666666667 1.4586666666666668-5t3.9173333333333336-3.437333333333333q-0.040000000000000036-0.6266666666666669-0.040000000000000036-0.8960000000000008 0-4.417333333333334 3.1240000000000006-7.541333333333332t7.539999999999999-3.1253333333333337q3.253333333333334 0 5.949333333333332 1.8133333333333335t3.926666666666666 4.810666666666665q1.4800000000000004-1.293333333333333 3.458666666666666-1.293333333333333 2.2093333333333334 0 3.7733333333333334 1.564t1.5586666666666673 3.7720000000000002q0 1.5826666666666664-0.8533333333333317 2.873333333333333 2.7066666666666634 0.6453333333333333 4.448 2.8226666666666667t1.738666666666667 4.970666666666666z' })
            )
        );
    };

    return FaCloudDownload;
})(React.Component);

exports['default'] = FaCloudDownload;
module.exports = exports['default'];