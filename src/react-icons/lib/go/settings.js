'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoSettings = (function (_React$Component) {
    _inherits(GoSettings, _React$Component);

    function GoSettings() {
        _classCallCheck(this, GoSettings);

        _React$Component.apply(this, arguments);
    }

    GoSettings.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm5 35h5v-7.5h-5v7.5z m5-30h-5v12.5h5v-12.5z m12.5 0h-5v5h5v-5z m-20 20h10v-5h-10v5z m15 10h5v-15h-5v15z m-2.5-17.5h10v-5h-10v5z m20-12.5h-5v15h5v-15z m-7.5 17.5v5h10v-5h-10z m2.5 12.5h5v-5h-5v5z' })
            )
        );
    };

    return GoSettings;
})(React.Component);

exports['default'] = GoSettings;
module.exports = exports['default'];