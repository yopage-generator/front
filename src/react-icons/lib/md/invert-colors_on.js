'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdInvertColorsOn = (function (_React$Component) {
    _inherits(MdInvertColorsOn, _React$Component);

    function MdInvertColorsOn() {
        _classCallCheck(this, MdInvertColorsOn);

        _React$Component.apply(this, arguments);
    }

    MdInvertColorsOn.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 32.65666666666667v-24.140000000000008l-7.033333333333333 7.033333333333335q-2.966666666666667 2.966666666666665-2.966666666666667 7.106666666666666 0 4.063333333333333 2.966666666666667 7.033333333333331t7.033333333333333 2.9666666666666686z m9.453333333333333-19.453333333333337q3.9066666666666663 3.9066666666666663 3.9066666666666663 9.413333333333334t-3.9066666666666663 9.41333333333333-9.453333333333333 3.9066666666666663-9.453333333333333-3.9066666666666663-3.9066666666666663-9.413333333333334 3.9066666666666663-9.413333333333334l9.453333333333333-9.453333333333333z' })
            )
        );
    };

    return MdInvertColorsOn;
})(React.Component);

exports['default'] = MdInvertColorsOn;
module.exports = exports['default'];