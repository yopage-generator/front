'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPlusOne = (function (_React$Component) {
    _inherits(MdPlusOne, _React$Component);

    function MdPlusOne() {
        _classCallCheck(this, MdPlusOne);

        _React$Component.apply(this, arguments);
    }

    MdPlusOne.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm24.14 10.156666666666668l7.5-1.7966666666666669v21.64h-3.2833333333333314v-17.656666666666666l-4.216666666666669 0.8599999999999994v-3.046666666666665z m-7.5 3.203333333333333v6.639999999999999h6.716666666666669v3.3599999999999994h-6.716666666666669v6.640000000000001h-3.283333333333333v-6.640000000000001h-6.716666666666668v-3.3599999999999994h6.716666666666668v-6.639999999999999h3.283333333333333z' })
            )
        );
    };

    return MdPlusOne;
})(React.Component);

exports['default'] = MdPlusOne;
module.exports = exports['default'];