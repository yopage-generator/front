'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoJersey = (function (_React$Component) {
    _inherits(GoJersey, _React$Component);

    function GoJersey() {
        _classCallCheck(this, GoJersey);

        _React$Component.apply(this, arguments);
    }

    GoJersey.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 0h-7.5c0 1.25-1.2875000000000014 2.5-3.7875000000000014 2.5s-3.7124999999999986-1.25-3.7124999999999986-2.5h-7.5c0 5-0.07875000000000032 15-5 15 0 0-0.03750000000000009 21.25-0.03750000000000009 22.5s1.25 2.5 2.5000000000000004 2.5h27.5s2.5-1.25 2.5-2.5v-22.5c-4.925000000000001 0-5-10-5-15z m-23.7875 37.5c-0.6249999999999982 0-1.2124999999999986-0.39124999999999943-1.2124999999999986-1.25v-18.75c4.65-2.5 5-7.5 5-15h2.5c0 3.75 1.25 7.462499999999999 6.25 7.5s6.25-3.75 6.25-7.5h2.5c0 7.266249999999999 1.25 10.78125 2.5 13.2425v21.7575h-23.7875z m15.037500000000001-22.5l-1.25 1.25v12.5l1.25 1.25h5l1.25-1.25v-12.5l-1.25-1.25h-5z m3.75 12.5h-2.5v-10h2.5v10z m-13.75-12.5l-1.25 1.25v12.5l1.25 1.25h5l1.25-1.25v-12.5l-1.25-1.25h-5z m3.75 12.5h-2.5v-10h2.5v10z' })
            )
        );
    };

    return GoJersey;
})(React.Component);

exports['default'] = GoJersey;
module.exports = exports['default'];