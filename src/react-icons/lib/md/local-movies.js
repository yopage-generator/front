'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdLocalMovies = (function (_React$Component) {
    _inherits(MdLocalMovies, _React$Component);

    function MdLocalMovies() {
        _classCallCheck(this, MdLocalMovies);

        _React$Component.apply(this, arguments);
    }

    MdLocalMovies.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 15v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m0 6.640000000000001v-3.2833333333333314h-3.3599999999999994v3.2833333333333314h3.3599999999999994z m0 6.719999999999999v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m-16.64-13.36v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h3.3599999999999994z m1.7763568394002505e-15 6.640000000000001v-3.2833333333333314h-3.360000000000001v3.2833333333333314h3.3599999999999994z m0 6.719999999999999v-3.3599999999999994h-3.360000000000001v3.3599999999999994h3.3599999999999994z m16.64-23.36h3.3599999999999994v30h-3.3599999999999994v-3.3599999999999994h-3.3599999999999994v3.3599999999999994h-13.283333333333333v-3.3599999999999994h-3.3566666666666674v3.3599999999999994h-3.3633333333333324v-30h3.3633333333333324v3.3599999999999994h3.3583333333333343v-3.3599999999999994h13.283333333333331v3.3599999999999994h3.3583333333333343v-3.3599999999999994z' })
            )
        );
    };

    return MdLocalMovies;
})(React.Component);

exports['default'] = MdLocalMovies;
module.exports = exports['default'];