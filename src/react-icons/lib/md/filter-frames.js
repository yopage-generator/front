'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFilterFrames = (function (_React$Component) {
    _inherits(MdFilterFrames, _React$Component);

    function MdFilterFrames() {
        _classCallCheck(this, MdFilterFrames);

        _React$Component.apply(this, arguments);
    }

    MdFilterFrames.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 13.360000000000001h-20v16.64h20v-16.64z m3.3599999999999994 20v-23.36h-7.5l-5.783333333333335-5.86-5.856666666666664 5.86h-7.578333333333334v23.36h26.71666666666667z m0-26.720000000000002q1.3283333333333331 0 2.3049999999999997 1.0166666666666666t0.9750000000000014 2.3416666666666677v23.358333333333338q0 1.3283333333333331-0.9766666666666666 2.3049999999999997t-2.306666666666665 0.9766666666666666h-26.713333333333335q-1.330000000000001 0-2.3066666666666675-0.9766666666666666t-0.9766666666666666-2.3049999999999997v-23.35666666666667q0-1.33 0.9766666666666666-2.3450000000000006t2.3050000000000006-1.0166666666666666h6.716666666666667l6.641666666666666-6.638333333333333 6.640000000000001 6.640000000000001h6.716666666666669z' })
            )
        );
    };

    return MdFilterFrames;
})(React.Component);

exports['default'] = MdFilterFrames;
module.exports = exports['default'];