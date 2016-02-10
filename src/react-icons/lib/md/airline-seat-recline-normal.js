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
                React.createElement('path', { d: 'm12.7 9c-1.4-1.3-1.4-3.4 0-4.7 1.3-1.3 3.4-1.3 4.7 0 1.3 1.3 1.3 3.4 0 4.7-1.3 1.3-3.4 1.3-4.7 0z m-2.7 17.7v-15h-3.3v15c0 4.6 3.7 8.3 8.3 8.3h10v-3.3h-10c-2.8 0-5-2.3-5-5z m23.3 6.8l-8.4-8.5h-5.7v-6.1c2.3 1.9 6 3.6 9.1 3.6v-3.6c-2.7 0-6-1.5-7.7-3.4l-2.4-2.6c-0.3-0.4-0.7-0.6-1.1-0.9-0.5-0.2-1.1-0.3-1.6-0.3h-0.1c-2.1 0-3.7 1.6-3.7 3.7v9.6c0 2.8 2.2 5 5 5h8.4l5.9 5.8 2.3-2.3z' })
            )
        );
    };

    return MdAirlineSeatReclineNormal;
})(React.Component);

exports['default'] = MdAirlineSeatReclineNormal;
module.exports = exports['default'];