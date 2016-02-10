'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaLongArrowLeft = (function (_React$Component) {
    _inherits(FaLongArrowLeft, _React$Component);

    function FaLongArrowLeft() {
        _classCallCheck(this, FaLongArrowLeft);

        _React$Component.apply(this, arguments);
    }

    FaLongArrowLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm38.62068965517241 17.931034482758623v4.137931034482758q0 0.30344827586207046-0.19310344827586334 0.49655172413793025t-0.49655172413793025 0.19310344827586334h-26.89655172413793v4.827586206896552q0 0.45241379310344954-0.40965517241379246 0.6248275862068979t-0.7544827586206893-0.10758620689655274l-8.275862068965518-7.544827586206896q-0.2151724137931046-0.2137931034482783-0.2151724137931046-0.4924137931034487 0-0.30344827586207046 0.21517241379310348-0.5172413793103452l8.275862068965518-7.627586206896552q0.3448275862068968-0.3034482758620687 0.7544827586206893-0.13103448275862029 0.40965517241379423 0.1917241379310326 0.40965517241379423 0.623448275862069v4.827586206896552h26.89655172413793q0.3034482758620669 0 0.49655172413793025 0.19310344827586334t0.19310344827586334 0.49655172413793025z' })
            )
        );
    };

    return FaLongArrowLeft;
})(React.Component);

exports['default'] = FaLongArrowLeft;
module.exports = exports['default'];