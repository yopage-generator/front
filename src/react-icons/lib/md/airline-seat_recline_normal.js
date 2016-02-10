'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAirlineSeatReclineNormal = (function (_React$Component) {
    _inherits(MdAirlineSeatReclineNormal, _React$Component);

    function MdAirlineSeatReclineNormal() {
        _classCallCheck(this, MdAirlineSeatReclineNormal);

        _React$Component.apply(this, arguments);
    }

    MdAirlineSeatReclineNormal.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 33.43833333333333l-2.421666666666667 2.421666666666667-5.859999999999996-5.859999999999999h-8.438333333333336q-2.033333333333333 0-3.5166666666666657-1.4833333333333343t-1.4816666666666674-3.5166666666666657v-9.61q0-1.4833333333333343 1.1333333333333329-2.616666666666667t2.616666666666667-1.1333333333333329h0.07833333333333314q1.4866666666666664 0 2.7366666666666664 1.25l2.3433333333333337 2.578333333333333q1.3283333333333331 1.4866666666666681 3.5549999999999997 2.423333333333332t4.260000000000002 0.9383333333333326v3.6700000000000017q-4.843333333333334 0-9.216666666666669-3.671666666666667v6.171666666666667h5.780000000000001z m-23.36-6.799999999999997q0 2.0333333333333314 1.4833333333333343 3.5166666666666657t3.5166666666666657 1.4833333333333343h10v3.3616666666666646h-10q-3.4383333333333344 0-5.9-2.461666666666666t-2.46-5.899999999999999v-15h3.3600000000000003v15z m2.656666666666668-17.651666666666667q-1.0166666666666675-1.0133333333333336-1.0166666666666675-2.341666666666667t1.0166666666666657-2.3433333333333337 2.3433333333333337-1.0183333333333344 2.3433333333333337 1.0166666666666666 1.0166666666666657 2.341666666666667-1.0166666666666657 2.343333333333333-2.3433333333333337 1.0150000000000006-2.3433333333333337-1.0166666666666657z' })
            )
        );
    };

    return MdAirlineSeatReclineNormal;
})(React.Component);

exports['default'] = MdAirlineSeatReclineNormal;
module.exports = exports['default'];