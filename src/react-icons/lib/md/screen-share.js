'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdScreenShare = (function (_React$Component) {
    _inherits(MdScreenShare, _React$Component);

    function MdScreenShare() {
        _classCallCheck(this, MdScreenShare);

        _React$Component.apply(this, arguments);
    }

    MdScreenShare.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.64 24.14l6.716666666666669-6.25-6.716666666666669-6.25v3.5933333333333337q-8.203333333333333 1.1716666666666669-10 9.766666666666666 3.3599999999999994-4.533333333333335 10-4.533333333333335v3.671666666666667z m11.719999999999999 5.859999999999999h6.640000000000001v3.3599999999999994h-40v-3.3599999999999994h6.640000000000001q-1.4066666666666663 0-2.3433333333333337-0.9766666666666666t-0.9383333333333335-2.383333333333333v-16.64q0-1.4066666666666663 0.9383333333333335-2.383333333333333t2.3433333333333337-0.9766666666666666h26.71666666666667q1.3299999999999983 0 2.306666666666665 0.9766666666666666t0.9766666666666737 2.383333333333333v16.64q0 1.3283333333333331-0.9766666666666666 2.3433333333333337t-2.3049999999999997 1.0166666666666657z' })
            )
        );
    };

    return MdScreenShare;
})(React.Component);

exports['default'] = MdScreenShare;
module.exports = exports['default'];