'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonThumbsdown = (function (_React$Component) {
    _inherits(GoOcticonThumbsdown, _React$Component);

    function GoOcticonThumbsdown() {
        _classCallCheck(this, GoOcticonThumbsdown);

        _React$Component.apply(this, arguments);
    }

    GoOcticonThumbsdown.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.5 18.9c0.4-0.7 0.6-1.5 0.6-2.4 0-2-1.1-3.7-2.7-4.7 0.2-0.5 0.2-1 0.2-1.6 0-1.9-1-3.6-2.5-4.6 0.1-0.3 0.4-0.7 0.4-1 0-2.6-2.3-4.6-5-4.6h-8.7c-3.4 0-6.6 1.7-9.4 3.2-1.7 0.8-3.5 1.8-4.4 1.8h-2.5v22.5h2.5c1.4 0.1 6.1 2.7 8 4.4 0.5 0.4 6.8 6.5 6.8 6.5 1 1.1 2.3 1.6 3.8 1.6 1.3 0 2.6-0.5 3.5-1.5 2-2 2-5.3 0-7.3-0.8-0.8-3.7-4.5-4.6-5.4l10 1.7c3 0 5-2.3 5-5.1 0-1.3-0.1-2.5-1-3.5z m-4 6.1l-15-2.5c-0.3 0 7.8 10.4 7.8 10.4 1.1 1.1 1.1 2.8 0.1 3.9-0.5 0.5-1.1 0.7-1.8 0.7s-1.5-0.2-2.1-0.8l-5.4-5.5c-3.4-2.8-8.5-6.2-11.1-6.2v-17.6c3.4 0 8.6-4.9 13.8-4.9h8.7c1.3 0 2.5 0.8 2.5 2.1 0 1.3-1.2 2.9-2.5 2.9h1.9c1.7 0 2.8 1 2.8 2.7 0 1.8-1.4 3.5-3.2 3.5h2.5c1.7 0 3.1 1.1 3.1 2.8 0 1.7-1.4 3.1-3.1 3.1h1c1.7 0 2.5 1.3 2.5 2.8 0 1.5-0.9 2.6-2.5 2.6z' })
            )
        );
    };

    return GoOcticonThumbsdown;
})(React.Component);

exports['default'] = GoOcticonThumbsdown;
module.exports = exports['default'];