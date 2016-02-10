'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaTrophy = (function (_React$Component) {
    _inherits(FaTrophy, _React$Component);

    function FaTrophy() {
        _classCallCheck(this, FaTrophy);

        _React$Component.apply(this, arguments);
    }

    FaTrophy.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.65142857142857 19.71q-1.6514285714285695-3.614285714285714-1.6514285714285695-8.281428571428572h-5.714285714285714v2.1428571428571423q0 1.742857142857142 2.1100000000000003 3.614285714285712t5.257142857142858 2.524285714285714z m24.062857142857148-6.13857142857143v-2.1428571428571423h-5.714285714285715q0 4.6657142857142855-1.6514285714285712 8.281428571428572 3.147142857142857-0.6471428571428568 5.257142857142856-2.5228571428571414t2.1085714285714303-3.6157142857142883z m2.857142857142854-2.8571428571428577v2.8571428571428577q0 1.5857142857142854-0.9257142857142853 3.191428571428572t-2.5 2.8999999999999986-3.8599999999999994 2.1799999999999997-4.811428571428571 0.9928571428571438q-0.937142857142856 1.2057142857142864-2.120000000000001 2.120000000000001-0.8485714285714288 0.7571428571428562-1.1714285714285708 1.6185714285714283t-0.32571428571428385 1.9942857142857164q0 1.2057142857142864 0.6828571428571415 2.0314285714285703t2.1757142857142853 0.8257142857142838q1.6757142857142853 0 2.981428571428573 1.0142857142857125t1.3028571428571425 2.5600000000000023v1.4285714285714306q0 0.3142857142857167-0.1999999999999993 0.5142857142857125t-0.514285714285716 0.20000000000000284h-18.571428571428573q-0.3114285714285714 0-0.5114285714285707-0.20000000000000284t-0.1999999999999993-0.5142857142857125v-1.4285714285714306q0-1.5399999999999991 1.3042857142857152-2.557142857142857t2.9785714285714295-1.0142857142857125q1.4971428571428564 0 2.177142857142856-0.8257142857142838t0.6799999999999997-2.0342857142857156q0-1.138571428571428-0.32285714285714207-1.9971428571428582t-1.1714285714285708-1.6185714285714283q-1.1828571428571433-0.9142857142857146-2.120000000000001-2.120000000000001-2.522857142857143-0.1114285714285721-4.8100000000000005-0.9928571428571438t-3.861428571428571-2.1757142857142853-2.5-2.8999999999999986-0.9257142857142853-3.192857142857145v-2.8571428571428577q0-0.8928571428571423 0.6257142857142859-1.5171428571428578t1.5171428571428565-0.6257142857142846h6.428571428571428v-2.1428571428571423q0-1.4714285714285715 1.048571428571428-2.522857142857143t2.522857142857145-1.0485714285714285h12.857142857142858q1.4714285714285715 0 2.522857142857145 1.0485714285714285t1.048571428571428 2.522857142857143v2.1428571428571423h6.428571428571431q0.8928571428571459 0 1.5171428571428578 0.6257142857142863t0.6257142857142881 1.5171428571428578z' })
            )
        );
    };

    return FaTrophy;
})(React.Component);

exports['default'] = FaTrophy;
module.exports = exports['default'];