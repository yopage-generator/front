'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdUnfoldLess = (function (_React$Component) {
    _inherits(MdUnfoldLess, _React$Component);

    function MdUnfoldLess() {
        _classCallCheck(this, MdUnfoldLess);

        _React$Component.apply(this, arguments);
    }

    MdUnfoldLess.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.65666666666667 8.983333333333333l-7.65666666666667 7.660000000000002-7.656666666666666-7.660000000000002 2.3433333333333337-2.341666666666667 5.313333333333333 5.313333333333334 5.313333333333333-5.3133333333333335z m-15.313333333333336 22.03333333333333l7.656666666666666-7.66 7.656666666666666 7.656666666666666-2.3433333333333337 2.341666666666665-5.313333333333333-5.309999999999992-5.313333333333333 5.313333333333336z' })
            )
        );
    };

    return MdUnfoldLess;
})(React.Component);

exports['default'] = MdUnfoldLess;
module.exports = exports['default'];