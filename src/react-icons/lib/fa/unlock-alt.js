'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaUnlockAlt = (function (_React$Component) {
    _inherits(FaUnlockAlt, _React$Component);

    function FaUnlockAlt() {
        _classCallCheck(this, FaUnlockAlt);

        _React$Component.apply(this, arguments);
    }

    FaUnlockAlt.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30.714285714285715 17.142857142857142q0.8928571428571423 0 1.5171428571428578 0.6257142857142846t0.6257142857142881 1.5171428571428578v12.857142857142854q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428578 0.6257142857142881h-21.42857142857143q-0.8928571428571423 0-1.5171428571428578-0.6257142857142881t-0.6257142857142837-1.5171428571428507v-12.857142857142858q0-0.8928571428571423 0.6257142857142854-1.5171428571428578t1.5171428571428578-0.6257142857142881h0.7142857142857135v-7.142857142857142q0-4.128571428571429 2.935714285714287-7.064285714285715t7.064285714285713-2.935714285714285 7.064285714285717 2.935714285714286 2.9357142857142833 7.064285714285714q0 0.5800000000000001-0.4242857142857126 1.0042857142857144t-1.0042857142857144 0.4242857142857144h-1.428571428571427q-0.5799999999999983 0-1.0042857142857144-0.4242857142857144t-0.42428571428571615-1.0042857142857144q0-2.3657142857142857-1.6742857142857126-4.04t-4.040000000000003-1.6742857142857144-4.039999999999999 1.6742857142857144-1.6742857142857144 4.04v7.142857142857142h16.42857142857143z' })
            )
        );
    };

    return FaUnlockAlt;
})(React.Component);

exports['default'] = FaUnlockAlt;
module.exports = exports['default'];