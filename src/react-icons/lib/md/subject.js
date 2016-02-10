'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdSubject = (function (_React$Component) {
    _inherits(MdSubject, _React$Component);

    function MdSubject() {
        _classCallCheck(this, MdSubject);

        _React$Component.apply(this, arguments);
    }

    MdSubject.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm6.640000000000001 8.360000000000001h26.71666666666667v3.283333333333333h-26.715000000000003v-3.283333333333333z m0 16.64v-3.3599999999999994h26.71666666666667v3.3599999999999994h-26.715000000000003z m26.72-10v3.3599999999999994h-26.716666666666665v-3.3599999999999994h26.716666666666665z m-10 13.36v3.2833333333333314h-16.716666666666665v-3.2833333333333314h16.716666666666665z' })
            )
        );
    };

    return MdSubject;
})(React.Component);

exports['default'] = MdSubject;
module.exports = exports['default'];