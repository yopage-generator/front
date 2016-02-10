'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiEqualsOutline = (function (_React$Component) {
    _inherits(TiEqualsOutline, _React$Component);

    function TiEqualsOutline() {
        _classCallCheck(this, TiEqualsOutline);

        _React$Component.apply(this, arguments);
    }

    TiEqualsOutline.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30 20h-20c-2.756666666666667 0-5-2.2433333333333323-5-5s2.243333333333334-5 5-5h20c2.7566666666666677 0 5 2.243333333333334 5 5s-2.2433333333333323 5-5 5z m-20-6.666666666666666c-0.9199999999999999 0-1.666666666666666 0.75-1.666666666666666 1.666666666666666s0.7466666666666661 1.6666666666666679 1.666666666666666 1.6666666666666679h20c0.9200000000000017 0 1.6666666666666679-0.75 1.6666666666666679-1.666666666666666s-0.7466666666666661-1.666666666666666-1.6666666666666679-1.666666666666666h-20z m20 18.333333333333336h-20c-2.756666666666667-3.552713678800501e-15-5-2.243333333333336-5-5.0000000000000036s2.243333333333334-5 5-5h20c2.7566666666666677 0 5 2.2433333333333323 5 5s-2.2433333333333323 5-5 5z m-20-6.666666666666671c-0.9199999999999999 0-1.666666666666666 0.75-1.666666666666666 1.6666666666666679s0.7466666666666661 1.6666666666666679 1.666666666666666 1.6666666666666679h20c0.9200000000000017 0 1.6666666666666679-0.75 1.6666666666666679-1.6666666666666679s-0.7466666666666661-1.6666666666666679-1.6666666666666679-1.6666666666666679h-20z' })
            )
        );
    };

    return TiEqualsOutline;
})(React.Component);

exports['default'] = TiEqualsOutline;
module.exports = exports['default'];