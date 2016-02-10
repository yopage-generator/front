'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdScreenLockRotation = (function (_React$Component) {
    _inherits(MdScreenLockRotation, _React$Component);

    function MdScreenLockRotation() {
        _classCallCheck(this, MdScreenLockRotation);

        _React$Component.apply(this, arguments);
    }

    MdScreenLockRotation.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm38.8 21.3l-4.3-4.3-2.4 2.4 3.7 3.7-9.4 9.4-18.9-18.9 9.4-9.4 3.5 3.5 2.4-2.4-4.1-4c-1-1-2.5-1-3.5 0l-10.6 10.6c-1 0.9-1 2.5 0 3.5l20 20c1 1 2.6 1 3.6 0l10.6-10.6c0.9-1 0.9-2.5 0-3.5z m-24.7 12.8c-5.4-2.5-9.3-7.8-9.9-14.1h-2.5c0.8 10.3 9.4 18.3 19.9 18.3l1.1 0-6.4-6.4-2.2 2.2z m12.6-19.1h8.3c0.9 0 1.7-0.7 1.7-1.7v-6.6c0-0.9-0.8-1.7-1.7-1.7v-0.8c0-2.3-1.9-4.2-4.2-4.2s-4.1 1.9-4.1 4.2v0.8c-0.9 0-1.7 0.8-1.7 1.7v6.6c0 1 0.8 1.7 1.7 1.7z m1.3-10.8c0-1.6 1.3-2.9 2.8-2.9s2.9 1.3 2.9 2.9v0.8h-5.7v-0.8z' })
            )
        );
    };

    return MdScreenLockRotation;
})(React.Component);

exports['default'] = MdScreenLockRotation;
module.exports = exports['default'];