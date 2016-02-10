'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonTrashcan = (function (_React$Component) {
    _inherits(GoOcticonTrashcan, _React$Component);

    function GoOcticonTrashcan() {
        _classCallCheck(this, GoOcticonTrashcan);

        _React$Component.apply(this, arguments);
    }

    GoOcticonTrashcan.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 5h-5c0-1.4-1.1-2.5-2.5-2.5h-7.5c-1.4 0-2.5 1.1-2.5 2.5h-5c-1.4 0-2.5 1.1-2.5 2.5v2.5c0 1.4 1.1 2.5 2.5 2.5v22.5c0 1.4 1.1 2.5 2.5 2.5h17.5c1.4 0 2.5-1.1 2.5-2.5v-22.5c1.4 0 2.5-1.1 2.5-2.5v-2.5c0-1.4-1.1-2.5-2.5-2.5z m-2.5 30h-17.5v-22.5h2.5v20h2.5v-20h2.5v20h2.5v-20h2.5v20h2.5v-20h2.5v22.5z m2.5-25h-22.5v-2.5h22.5v2.5z' })
            )
        );
    };

    return GoOcticonTrashcan;
})(React.Component);

exports['default'] = GoOcticonTrashcan;
module.exports = exports['default'];