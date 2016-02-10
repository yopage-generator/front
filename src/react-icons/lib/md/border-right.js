'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdBorderRight = (function (_React$Component) {
    _inherits(MdBorderRight, _React$Component);

    function MdBorderRight() {
        _classCallCheck(this, MdBorderRight);

        _React$Component.apply(this, arguments);
    }

    MdBorderRight.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm18.36 15v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m0-6.640000000000001v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m0 13.280000000000001v-3.2833333333333314h3.2833333333333314v3.2833333333333314h-3.2833333333333314z m6.640000000000001-13.28v-3.360000000000001h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m0 26.64v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.640000000000001-30h3.3599999999999994v30h-3.3599999999999994v-30z m-6.640000000000001 16.64v-3.2833333333333314h3.3599999999999994v3.2833333333333314h-3.3599999999999994z m-6.640000000000001 6.719999999999999v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m-13.36-13.36v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m0 13.36v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m0-6.719999999999999v-3.2833333333333314h3.3599999999999994v3.2833333333333314h-3.3599999999999994z m13.36 13.36v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z m-13.36 0v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.640000000000001-13.36v-3.2833333333333314h3.3599999999999994v3.2833333333333314h-3.3599999999999994z m0-13.280000000000001v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m-6.640000000000001 1.7763568394002505e-15v-3.360000000000001h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.640000000000001 26.64v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z' })
            )
        );
    };

    return MdBorderRight;
})(React.Component);

exports['default'] = MdBorderRight;
module.exports = exports['default'];