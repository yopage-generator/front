'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdCropPortrait = (function (_React$Component) {
    _inherits(MdCropPortrait, _React$Component);

    function MdCropPortrait() {
        _classCallCheck(this, MdCropPortrait);

        _React$Component.apply(this, arguments);
    }

    MdCropPortrait.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.36 31.640000000000004v-23.28333333333334h-16.71666666666667v23.283333333333335h16.71666666666667z m0-26.64q1.3283333333333331 0 2.3049999999999997 1.0166666666666666t0.9750000000000014 2.3416666666666677v23.283333333333335q0 1.326666666666668-0.9766666666666666 2.3416666666666686t-2.306666666666665 1.0166666666666657h-16.71333333333334q-1.3299999999999983 0-2.306666666666665-1.0166666666666657t-0.9766666666666666-2.3433333333333337v-23.28333333333334q0-1.3266666666666689 0.9766666666666666-2.3416666666666686t2.3050000000000015-1.0150000000000006h16.71666666666667z' })
            )
        );
    };

    return MdCropPortrait;
})(React.Component);

exports['default'] = MdCropPortrait;
module.exports = exports['default'];