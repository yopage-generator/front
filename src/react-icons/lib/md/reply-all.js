'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdReplyAll = (function (_React$Component) {
    _inherits(MdReplyAll, _React$Component);

    function MdReplyAll() {
        _classCallCheck(this, MdReplyAll);

        _React$Component.apply(this, arguments);
    }

    MdReplyAll.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 15q8.125 1.1716666666666669 12.538333333333334 6.211666666666666t5.821666666666665 12.149999999999999q-6.016666666666666-8.516666666666666-18.361666666666668-8.516666666666666v6.796666666666667l-11.638333333333332-11.641666666666666 11.638333333333335-11.638333333333334v6.638333333333334z m-10-1.6400000000000006l-6.640000000000001 6.640000000000001 6.640000000000001 6.640000000000001v5l-11.64-11.64 11.64-11.64v5z' })
            )
        );
    };

    return MdReplyAll;
})(React.Component);

exports['default'] = MdReplyAll;
module.exports = exports['default'];