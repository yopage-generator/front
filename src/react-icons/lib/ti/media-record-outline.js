'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiMediaRecordOutline = (function (_React$Component) {
    _inherits(TiMediaRecordOutline, _React$Component);

    function TiMediaRecordOutline() {
        _classCallCheck(this, TiMediaRecordOutline);

        _React$Component.apply(this, arguments);
    }

    TiMediaRecordOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 13.333333333333334c3.6750000000000007 0 6.666666666666668 2.99 6.666666666666668 6.666666666666666s-2.991666666666667 6.666666666666668-6.666666666666668 6.666666666666668-6.666666666666668-2.9899999999999984-6.666666666666668-6.666666666666668 2.991666666666667-6.666666666666668 6.666666666666668-6.666666666666668z m0-3.333333333333334c-5.523333333333333 0-10 4.476666666666667-10 10 0 5.52 4.476666666666667 10 10 10 5.52 0 10-4.48 10-10 0-5.523333333333333-4.48-10-10-10z' })
            )
        );
    };

    return TiMediaRecordOutline;
})(React.Component);

exports['default'] = TiMediaRecordOutline;
module.exports = exports['default'];