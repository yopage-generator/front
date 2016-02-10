'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoDatabase = (function (_React$Component) {
    _inherits(GoDatabase, _React$Component);

    function GoDatabase() {
        _classCallCheck(this, GoDatabase);

        _React$Component.apply(this, arguments);
    }

    GoDatabase.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 37.5c-8.2825 0-15-2.241250000000001-15-5v-5c0-0.4349999999999987 0.21750000000000025-0.8475000000000001 0.5300000000000002-1.25 1.6725000000000003 2.1537499999999987 7.487500000000002 3.75 14.469999999999999 3.75s12.7975-1.5962500000000013 14.469999999999999-3.75c0.3125 0.40249999999999986 0.5300000000000011 0.8150000000000013 0.5300000000000011 1.25v5c0 2.758749999999999-6.71875 5-15 5z m0-10c-8.2825 0-15-2.241250000000001-15-5v-5c0-0.26500000000000057 0.09999999999999964-0.5225000000000009 0.23500000000000032-0.7774999999999999 0.07500000000000018-0.16000000000000014 0.17499999999999982-0.317499999999999 0.29499999999999993-0.47250000000000014 1.6725000000000003 2.1525 7.487500000000002 3.75 14.469999999999999 3.75s12.7975-1.5975000000000001 14.469999999999999-3.75c0.11999999999999744 0.15500000000000114 0.21999999999999886 0.3125 0.2950000000000017 0.47250000000000014 0.13374999999999915 0.254999999999999 0.23499999999999943 0.5124999999999993 0.23499999999999943 0.7774999999999999v5c0 2.758749999999999-6.71875 5-15 5z m0-10c-8.2825 0-15-2.24-15-5v-5c0-2.76 6.717499999999999-5 15-5s15 2.24 15 5v5c0 2.76-6.71875 5-15 5z m0-12.5c-5.522500000000001 0-10 1.1174999999999997-10 2.5s4.477499999999999 2.5 10 2.5 10-1.1174999999999997 10-2.5-4.477499999999999-2.5-10-2.5z' })
            )
        );
    };

    return GoDatabase;
})(React.Component);

exports['default'] = GoDatabase;
module.exports = exports['default'];