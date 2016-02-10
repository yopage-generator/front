'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoOcticonJersey = (function (_React$Component) {
    _inherits(GoOcticonJersey, _React$Component);

    function GoOcticonJersey() {
        _classCallCheck(this, GoOcticonJersey);

        _React$Component.apply(this, arguments);
    }

    GoOcticonJersey.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm11.3 15l-1.3 1.2v12.5l1.3 1.3h5l1.2-1.3v-12.5l-1.2-1.2h-5z m3.7 12.5h-2.5v-10h2.5v10z m15.7-18.1c-0.6-3.5-0.8-6.6-0.7-9.4h-7.5c0 0.7-0.3 1.2-0.9 1.7-0.7 0.5-1.6 0.8-2.8 0.8s-2.2-0.3-2.9-0.8c-0.5-0.5-0.9-1-0.9-1.7h-7.5c0.1 2.8-0.1 5.9-0.6 9.4-0.5 3.4-2 5.3-4.4 5.6v22.5c0 0.7 0.3 1.2 0.8 1.7s1 0.8 1.7 0.8h27.5c0.7 0 1.2-0.3 1.7-0.8s0.8-1 0.8-1.7v-22.5c-2.4-0.3-3.8-2.2-4.4-5.6z m1.8 28.1h-27.5v-20c2.2-1.3 3.7-3.1 4.3-5.6s0.8-5.7 0.7-9.4h2.5c0 2 0.4 3.7 1.3 5.2 0.9 1.4 2.5 2.2 5 2.3 2.4 0 4.1-0.8 5-2.3 0.9-1.5 1.2-3.2 1.2-5.2h2.5c0 3.6 0.3 6.4 0.8 8.4 0.5 2.1 1.7 5 4.2 6.6v20z m-11.3-22.5l-1.2 1.2v12.5l1.2 1.3h5l1.3-1.3v-12.5l-1.3-1.2h-5z m3.8 12.5h-2.5v-10h2.5v10z' })
            )
        );
    };

    return GoOcticonJersey;
})(React.Component);

exports['default'] = GoOcticonJersey;
module.exports = exports['default'];