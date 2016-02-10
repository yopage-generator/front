'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoHourglass = (function (_React$Component) {
    _inherits(GoHourglass, _React$Component);

    function GoHourglass() {
        _classCallCheck(this, GoHourglass);

        _React$Component.apply(this, arguments);
    }

    GoHourglass.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.305 20c4.609999999999999-3.3200000000000003 7.695-9.375 7.695-15 0-2.7750000000000004-6.71875-5-15-5s-15 2.225-15 5c0 5.625 3.125 11.68 7.695 15-4.609999999999999 3.3200000000000003-7.695 9.375-7.695 15 0 2.7749999999999986 6.71875 5 15 5s15-2.2250000000000014 15-5c0-5.625-3.125-11.68-7.695-15z m-7.305-17.5c5.5075 0 10 1.1325000000000003 10 2.5s-4.4925 2.5-10 2.5-10-1.1325000000000003-10-2.5 4.4925-2.5 10-2.5z m-2.5 27.57875c-6.016249999999999 0.2749999999999986-9.2975 1.5625-9.8825 3.2037499999999994 0.625-4.453749999999999 2.9299999999999997-7.3825 5.5075-9.805 2.8499999999999996-2.65625 4.375-2.34375 4.375-4.024999999999999v10.665z m-4.1-13.75c-2.737499999999999-2.1499999999999986-4.768750000000001-5.078749999999999-5.550000000000001-8.399999999999999 2.737499999999999 1.2512499999999989 7.15 2.071249999999999 12.15 2.071249999999999s9.412500000000001-0.8200000000000003 12.149999999999999-2.0700000000000003c-0.7824999999999989 3.3200000000000003-2.8125 6.25-5.550000000000001 8.399999999999999-0.9374999999999964-0.6674999999999986-2.732499999999998-1.3299999999999983-6.599999999999998-1.3299999999999983s-5.662500000000001 0.6624999999999996-6.600000000000001 1.3287499999999994z m9.1 13.75v-10.662500000000001c0 1.6787500000000009 1.5249999999999986 1.3662500000000009 4.375 4.022500000000001 2.5787499999999994 2.4250000000000007 4.8825 5.392499999999998 5.5075 9.806249999999999-0.5474999999999994-1.6000000000000014-3.8674999999999997-2.9299999999999997-9.8825-3.2037499999999994z' })
            )
        );
    };

    return GoHourglass;
})(React.Component);

exports['default'] = GoHourglass;
module.exports = exports['default'];