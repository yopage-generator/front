'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaOpera = (function (_React$Component) {
    _inherits(FaOpera, _React$Component);

    function FaOpera() {
        _classCallCheck(this, FaOpera);

        _React$Component.apply(this, arguments);
    }

    FaOpera.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.325714285714284 5.090000000000001q-3.6828571428571415-2.4571428571428573-8.014285714285712-2.4571428571428573-3.4571428571428555 0-6.53857142857143 1.6314285714285708t-5.358571428571427 4.464285714285715q-1.6714285714285708 2.075714285714284-2.6642857142857146 4.865714285714285t-1.0828571428571436 5.937142857142856v0.937142857142856q0.08999999999999986 3.147142857142857 1.0828571428571436 5.937142857142856t2.6642857142857146 4.86571428571429q2.2785714285714285 2.8342857142857127 5.357142857142858 4.464285714285715t6.5428571428571445 1.6285714285714263q4.328571428571429 0 8.011428571428567-2.4542857142857173-2.6999999999999993 2.4099999999999966-6.12857142857143 3.75t-7.197142857142854 1.3400000000000034q-0.6471428571428568 0-0.9600000000000009-0.022857142857141355-3.9057142857142857-0.1785714285714306-7.432857142857143-1.8285714285714292t-6.071428571428571-4.310000000000002-4.04-6.271428571428572-1.4957142857142847-7.569999999999997q0-4.064285714285715 1.5857142857142859-7.768571428571429t4.2614285714285725-6.385714285714285 6.385714285714284-4.261428571428572 7.764285714285716-1.5814285714285727h0.06571428571428584q3.75 0.022857142857142857 7.154285714285717 1.3499999999999999t6.104285714285716 3.7385714285714284z m6.674285714285716 14.91q0 4.285714285714285-1.7185714285714297 8.091428571428573t-4.7542857142857144 6.618571428571428q-2.322857142857142 1.4057142857142892-4.9571428571428555 1.4057142857142892-3.057142857142857 0-5.69142857142857-1.874285714285712 3.437142857142856-1.25 5.657142857142858-5.199999999999999t2.222857142857144-9.042857142857141q0-5.065714285714286-2.210000000000001-9.014285714285714t-5.645714285714288-5.227142857142866q2.6571428571428584-1.8514285714285714 5.671428571428571-1.8514285714285714 2.654285714285713 0 5.0428571428571445 1.451428571428571 3.0142857142857125 2.789999999999999 4.700000000000003 6.585714285714285t1.682857142857138 8.057142857142857z' })
            )
        );
    };

    return FaOpera;
})(React.Component);

exports['default'] = FaOpera;
module.exports = exports['default'];