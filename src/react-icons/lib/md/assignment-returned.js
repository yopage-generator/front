'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAssignmentReturned = (function (_React$Component) {
    _inherits(MdAssignmentReturned, _React$Component);

    function MdAssignmentReturned() {
        _classCallCheck(this, MdAssignmentReturned);

        _React$Component.apply(this, arguments);
    }

    MdAssignmentReturned.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 30l8.36-8.36h-5v-6.640000000000001h-6.716666666666669v6.640000000000001h-5z m0-25q-0.7033333333333331 0-1.1716666666666669 0.4666666666666668t-0.466666666666665 1.1733333333333338 0.466666666666665 1.211666666666667 1.1716666666666669 0.5100000000000007 1.1716666666666669-0.5083333333333329 0.466666666666665-1.21-0.466666666666665-1.1716666666666669-1.1716666666666669-0.47166666666666845z m11.64 0q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.3266666666666689 0-2.3416666666666686-1.0166666666666657t-1.0150000000000006-2.341666666666665v-23.28333333333334q0-1.3266666666666653 1.0166666666666666-2.341666666666665t2.3400000000000007-1.0150000000000006h6.953333333333333q0.5466666666666669-1.4833333333333334 1.7966666666666686-2.421666666666667t2.893333333333331-0.938333333333333 2.8883333333333354 0.938333333333333 1.7949999999999982 2.421666666666667h6.955000000000002z' })
            )
        );
    };

    return MdAssignmentReturned;
})(React.Component);

exports['default'] = MdAssignmentReturned;
module.exports = exports['default'];