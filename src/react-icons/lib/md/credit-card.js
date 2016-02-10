'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCreditCard = (function (_React$Component) {
    _inherits(MdCreditCard, _React$Component);

    function MdCreditCard() {
        _classCallCheck(this, MdCreditCard);

        _React$Component.apply(this, arguments);
    }

    MdCreditCard.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm33.36 13.360000000000001v-3.360000000000001h-26.716666666666665v3.3599999999999994h26.716666666666665z m0 16.64v-10h-26.716666666666665v10h26.716666666666665z m0-23.36q1.4066666666666663 0 2.3433333333333337 0.9766666666666666t0.9383333333333326 2.383333333333333v20q0 1.4066666666666663-0.9383333333333326 2.383333333333333t-2.3433333333333337 0.9766666666666666h-26.716666666666665q-1.408333333333334 0-2.3450000000000006-0.9766666666666666t-0.94-2.383333333333333v-20q0-1.4066666666666663 0.938333333333333-2.383333333333333t2.341666666666667-0.9766666666666666h26.71666666666667z' })
            )
        );
    };

    return MdCreditCard;
})(React.Component);

exports['default'] = MdCreditCard;
module.exports = exports['default'];