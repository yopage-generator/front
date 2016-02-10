'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoMoveDown = (function (_React$Component) {
    _inherits(GoMoveDown, _React$Component);

    function GoMoveDown() {
        _classCallCheck(this, GoMoveDown);

        _React$Component.apply(this, arguments);
    }

    GoMoveDown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm32.5 12.5h-7.5v-12.5h-10v12.5h-7.5l12.5 15 12.5-15z m-25 27.5h25v-7.5h-25v7.5z' })
            )
        );
    };

    return GoMoveDown;
})(React.Component);

exports['default'] = GoMoveDown;
module.exports = exports['default'];