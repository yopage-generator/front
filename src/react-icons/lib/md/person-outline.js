'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPersonOutline = (function (_React$Component) {
    _inherits(MdPersonOutline, _React$Component);

    function MdPersonOutline() {
        _classCallCheck(this, MdPersonOutline);

        _React$Component.apply(this, arguments);
    }

    MdPersonOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm20 21.64q2.5 0 5.466666666666669 0.7033333333333331t5.433333333333334 2.3433333333333337 2.4599999999999973 3.671666666666667v5h-26.716666666666665v-5q-8.881784197001252e-16-2.0333333333333314 2.459999999999999-3.671666666666667t5.4300000000000015-2.3433333333333337 5.466666666666665-0.7033333333333331z m0-15q2.7333333333333343 0 4.688333333333333 1.9916666666666671t1.9533333333333331 4.725000000000001-1.9533333333333331 4.688333333333333-4.688333333333333 1.9549999999999983-4.688333333333333-1.9533333333333331-1.9533333333333331-4.688333333333333 1.9533333333333314-4.725000000000001 4.688333333333334-1.9949999999999992z m0 18.203333333333337q-3.4383333333333326 0-6.796666666666667 1.288333333333334t-3.3599999999999994 2.2250000000000014v1.7966666666666669h20.313333333333336v-1.7966666666666669q0-0.9383333333333326-3.3599999999999994-2.2266666666666666t-6.79666666666667-1.288333333333341z m0-15q-1.4833333333333343 0-2.5 1.0166666666666657t-1.0166666666666657 2.5 1.0166666666666657 2.460000000000001 2.5 0.9766666666666666 2.5-0.9766666666666666 1.0166666666666657-2.461666666666666-1.0166666666666657-2.5-2.5-1.0166666666666657z' })
            )
        );
    };

    return MdPersonOutline;
})(React.Component);

exports['default'] = MdPersonOutline;
module.exports = exports['default'];