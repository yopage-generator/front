'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdContactMail = (function (_React$Component) {
    _inherits(MdContactMail, _React$Component);

    function MdContactMail() {
        _classCallCheck(this, MdContactMail);

        _React$Component.apply(this, arguments);
    }

    MdContactMail.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm36.64000000000001 20v-10h-13.283333333333331v10h13.283333333333331z m-13.280000000000001 10v-1.6400000000000006q0-2.2666666666666657-3.4383333333333326-3.711666666666666t-6.563333333333333-1.4466666666666654-6.5633333333333335 1.4450000000000003-3.438333333333334 3.710000000000001v1.6433333333333309h20z m-10-20q-2.033333333333333 0-3.5166666666666657 1.4833333333333343t-1.4816666666666727 3.5166666666666657 1.4833333333333343 3.5166666666666657 3.5166666666666657 1.4833333333333343 3.5166666666666657-1.4833333333333343 1.4833333333333343-3.5166666666666657-1.4833333333333343-3.5166666666666657-3.5199999999999996-1.4833333333333343z m23.28-5q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666586 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-33.28333333333333q-1.3266666666666698 0-2.3416666666666694-1.0166666666666657t-1.0149999999999997-2.341666666666665v-23.28333333333334q0-1.3233333333333324 1.0166666666666666-2.339999999999999t2.34-1.0166666666666666h33.28333333333333z m-1.6400000000000077 8.360000000000001l-5 3.283333333333333-5-3.283333333333333v-1.7166666666666668l5 3.3566666666666656 5-3.3583333333333343v1.7166666666666668z' })
            )
        );
    };

    return MdContactMail;
})(React.Component);

exports['default'] = MdContactMail;
module.exports = exports['default'];