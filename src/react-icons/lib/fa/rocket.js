'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaRocket = (function (_React$Component) {
    _inherits(FaRocket, _React$Component);

    function FaRocket() {
        _classCallCheck(this, FaRocket);

        _React$Component.apply(this, arguments);
    }

    FaRocket.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.57142857142857 10q0-0.8928571428571423-0.6257142857142881-1.5171428571428578t-1.5171428571428507-0.6257142857142846-1.5171428571428578 0.6257142857142863-0.6257142857142881 1.517142857142856 0.6257142857142846 1.5171428571428578 1.5171428571428613 0.6257142857142846 1.5171428571428578-0.6257142857142863 0.625714285714281-1.517142857142856z m5-6.428571428571429q0 5.557142857142859-1.6857142857142833 9.610000000000001t-5.657142857142858 8.047142857142855q-1.8099999999999987 1.7857142857142847-4.354285714285716 3.9285714285714306l-0.4471428571428575 8.46q-0.04571428571428626 0.3571428571428541-0.35714285714285765 0.5799999999999983l-8.571428571428573 5q-0.15714285714285836 0.09000000000000341-0.35714285714285765 0.09000000000000341-0.2685714285714269 0-0.514285714285716-0.20000000000000284l-1.4285714285714288-1.4285714285714306q-0.2900000000000009-0.3142857142857167-0.17857142857142883-0.7142857142857153l1.8971428571428568-6.16-6.271428571428572-6.271428571428572-6.161428571428571 1.8957142857142841q-0.06714285714285673 0.022857142857141355-0.20000000000000018 0.022857142857141355-0.31428571428571406 0-0.5142857142857142-0.1999999999999993l-1.4285714285714288-1.428571428571427q-0.3799999999999999-0.4242857142857126-0.11142857142857121-0.8714285714285701l5-8.571428571428571q0.22285714285714242-0.3114285714285714 0.5800000000000001-0.35714285714285765l8.459999999999997-0.4457142857142866q2.1428571428571423-2.5428571428571427 3.9285714285714306-4.352857142857143 4.1971428571428575-4.171428571428572 7.991428571428571-5.757142857142858t9.62142857142858-1.589999999999995q0.3142857142857167 0 0.5357142857142847 0.2142857142857144t0.2242857142857133 0.5z' })
            )
        );
    };

    return FaRocket;
})(React.Component);

exports['default'] = FaRocket;
module.exports = exports['default'];