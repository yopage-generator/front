'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiChartBarOutline = (function (_React$Component) {
    _inherits(TiChartBarOutline, _React$Component);

    function TiChartBarOutline() {
        _classCallCheck(this, TiChartBarOutline);

        _React$Component.apply(this, arguments);
    }

    TiChartBarOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.333333333333336 8.333333333333334c-1.283333333333335 0-2.4466666666666654 0.5-3.333333333333332 1.3000000000000007v-2.9666666666666677c0-2.756666666666667-2.2433333333333323-5-5-5s-5.0000000000000036 2.243333333333333-5.0000000000000036 5v7.966666666666668c-0.8866666666666667-0.7999999999999989-2.0500000000000007-1.3000000000000007-3.333333333333332-1.3000000000000007-2.7566666666666677 0-5 2.243333333333334-5 5.000000000000002v10h26.666666666666668v-15.000000000000002c0-2.756666666666666-2.2433333333333323-5-5-5z m-8.333333333333336-3.333333333333334c0.9166666666666679 0 1.6666666666666679 0.746666666666667 1.6666666666666679 1.666666666666667v18.333333333333336h-3.333333333333332v-18.333333333333336c0-0.9200000000000008 0.75-1.6666666666666679 1.6666666666666679-1.6666666666666679z m-6.666666666666666 20h-3.333333333333334v-6.666666666666668c0-0.9200000000000017 0.75-1.6666666666666679 1.666666666666666-1.6666666666666679s1.666666666666666 0.7466666666666661 1.666666666666666 1.6666666666666679v6.666666666666668z m16.666666666666664 0h-3.333333333333332v-11.666666666666666c0-0.9199999999999999 0.75-1.666666666666666 1.6666666666666679-1.666666666666666s1.6666666666666679 0.7466666666666661 1.6666666666666679 1.666666666666666v11.666666666666666z m1.6666666666666679 10h-23.333333333333336c-0.9199999999999982 0-1.6666666666666652-0.7449999999999974-1.6666666666666652-1.6666666666666643s0.746666666666667-1.6666666666666679 1.666666666666667-1.6666666666666679h23.333333333333336c0.9200000000000017 0 1.6666666666666643 0.745000000000001 1.6666666666666643 1.6666666666666679s-0.7466666666666697 1.6666666666666643-1.6666666666666679 1.6666666666666643z' })
            )
        );
    };

    return TiChartBarOutline;
})(React.Component);

exports['default'] = TiChartBarOutline;
module.exports = exports['default'];