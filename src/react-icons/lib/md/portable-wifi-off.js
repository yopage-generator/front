'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPortableWifiOff = (function (_React$Component) {
    _inherits(MdPortableWifiOff, _React$Component);

    function MdPortableWifiOff() {
        _classCallCheck(this, MdPortableWifiOff);

        _React$Component.apply(this, arguments);
    }

    MdPortableWifiOff.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm29.3 23.7c0.4-1.1 0.7-2.4 0.7-3.7 0-5.5-4.5-10-10-10-1.3 0-2.6 0.3-3.7 0.7l2.7 2.7c0.3 0 0.6-0.1 1-0.1 3.7 0 6.7 3 6.7 6.7 0 0.4-0.1 0.7-0.1 1.1l2.7 2.6z m-9.3-17c7.4 0 13.3 5.9 13.3 13.3 0 2.3-0.5 4.4-1.5 6.2l2.4 2.5c1.6-2.6 2.5-5.5 2.5-8.7 0-9.2-7.5-16.7-16.7-16.7-3.2 0-6.1 0.9-8.7 2.5l2.5 2.4c1.8-1 4-1.5 6.2-1.5z m-14.5-2.5l-2.2 2.1 3.5 3.5c-2.1 2.8-3.5 6.3-3.5 10.2 0 6.2 3.4 11.5 8.4 14.4l1.6-2.9c-3.9-2.3-6.6-6.6-6.6-11.5 0-2.9 0.9-5.6 2.5-7.8l2.4 2.4c-1 1.5-1.6 3.4-1.6 5.4 0 3.7 2 6.9 5 8.6l1.7-2.8c-2-1.2-3.4-3.3-3.4-5.8 0-1.1 0.3-2.1 0.8-3l2.6 2.6 0 0.4c0 1.8 1.5 3.3 3.3 3.3l0.4 0 0 0 12.5 12.5 2.1-2.1-27.9-27.9-1.7-1.6z' })
            )
        );
    };

    return MdPortableWifiOff;
})(React.Component);

exports['default'] = MdPortableWifiOff;
module.exports = exports['default'];