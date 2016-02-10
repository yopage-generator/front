'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBookmark = (function (_React$Component) {
    _inherits(MdBookmark, _React$Component);

    function MdBookmark() {
        _classCallCheck(this, MdBookmark);

        _React$Component.apply(this, arguments);
    }

    MdBookmark.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 5q1.3283333333333331 0 2.3049999999999997 1.0166666666666666t0.9750000000000014 2.3416666666666677v26.641666666666666l-11.64-5-11.638333333333334 5v-26.64333333333333q0-1.328333333333335 0.9766666666666666-2.3433333333333355t2.3049999999999997-1.0133333333333336h16.71666666666667z' })
            )
        );
    };

    return MdBookmark;
})(React.Component);

exports['default'] = MdBookmark;
module.exports = exports['default'];