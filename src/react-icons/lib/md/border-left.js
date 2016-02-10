'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBorderLeft = (function (_React$Component) {
    _inherits(MdBorderLeft, _React$Component);

    function MdBorderLeft() {
        _classCallCheck(this, MdBorderLeft);

        _React$Component.apply(this, arguments);
    }

    MdBorderLeft.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm25 8.360000000000001v-3.360000000000001h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m0 13.28v-3.2833333333333314h3.3599999999999994v3.2833333333333314h-3.3599999999999994z m6.640000000000004 13.36v-3.3599999999999994h3.359999999999996v3.3599999999999994h-3.3599999999999994z m0-13.36v-3.2833333333333314h3.359999999999996v3.2833333333333314h-3.3599999999999994z m0-16.64h3.359999999999996v3.3599999999999994h-3.3599999999999994v-3.3599999999999994z m0 23.36v-3.3599999999999994h3.359999999999996v3.3599999999999994h-3.3599999999999994z m-6.640000000000004 6.640000000000001v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.640000000000001-20v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m-26.64 20v-30h3.3599999999999994v30h-3.3599999999999994z m6.640000000000001-13.36v-3.2833333333333314h3.3599999999999994v3.2833333333333314h-3.3599999999999994z m0-13.280000000000001v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m0 26.64v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.719999999999999-13.36v-3.2833333333333314h3.2833333333333314v3.2833333333333314h-3.2833333333333314z m0-6.640000000000001v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m0-6.640000000000001v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m0 20v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m0 6.640000000000001v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z' })
            )
        );
    };

    return MdBorderLeft;
})(React.Component);

exports['default'] = MdBorderLeft;
module.exports = exports['default'];