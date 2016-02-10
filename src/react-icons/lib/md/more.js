'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdMore = (function (_React$Component) {
    _inherits(MdMore, _React$Component);

    function MdMore() {
        _classCallCheck(this, MdMore);

        _React$Component.apply(this, arguments);
    }

    MdMore.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm31.640000000000004 22.5q1.0166666666666693 0 1.7583333333333364-0.7033333333333331t0.7399999999999949-1.7966666666666669-0.7416666666666671-1.7966666666666669-1.7600000000000016-0.7033333333333331-1.7583333333333329 0.7033333333333331-0.7399999999999984 1.7966666666666669 0.7416666666666671 1.7966666666666669 1.7566666666666677 0.7033333333333331z m-8.280000000000001 0q1.0166666666666657 0 1.7583333333333329-0.7033333333333331t0.7433333333333323-1.7966666666666669-0.7416666666666671-1.7966666666666669-1.7566666666666677-0.7033333333333331-1.7583333333333329 0.7033333333333331-0.7433333333333323 1.7966666666666669 0.7416666666666671 1.7966666666666669 1.7600000000000016 0.7033333333333331z m-8.360000000000003 0q1.0933333333333337 0 1.7966666666666669-0.7033333333333331t0.7033333333333331-1.7966666666666669-0.7033333333333331-1.7966666666666669-1.7966666666666669-0.7033333333333331-1.7966666666666669 0.7033333333333331-0.7033333333333331 1.7966666666666669 0.7033333333333331 1.7966666666666669 1.7966666666666669 0.7033333333333331z m21.640000000000008-17.5q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666586 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-24.843333333333334q-1.7166666666666668 0-2.8133333333333326-1.4866666666666646l-8.983333333333334-13.515000000000004 8.983333333333333-13.513333333333332q1.0933333333333355-1.4833333333333343 2.656666666666668-1.4833333333333343h25z' })
            )
        );
    };

    return MdMore;
})(React.Component);

exports['default'] = MdMore;
module.exports = exports['default'];