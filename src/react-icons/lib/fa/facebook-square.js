'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaFacebookSquare = (function (_React$Component) {
    _inherits(FaFacebookSquare, _React$Component);

    function FaFacebookSquare() {
        _classCallCheck(this, FaFacebookSquare);

        _React$Component.apply(this, arguments);
    }

    FaFacebookSquare.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm30.714285714285715 2.857142857142857q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-4.1971428571428575v-13.28142857142857h4.442857142857143l0.668571428571429-5.178571428571431h-5.111428571428572v-3.3028571428571425q0-1.25 0.524285714285714-1.8757142857142863t2.042857142857141-0.6257142857142863l2.7214285714285715-0.02142857142857224v-4.622857142857143q-1.4057142857142857-0.1999999999999993-3.9714285714285715-0.1999999999999993-3.0371428571428574 0-4.857142857142858 1.7857142857142865t-1.8171428571428585 5.042857142857143v3.8171428571428585h-4.462857142857139v5.178571428571427h4.464285714285715v13.284285714285716h-11.875714285714286q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.8857142857142857-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143z' })
            )
        );
    };

    return FaFacebookSquare;
})(React.Component);

exports['default'] = FaFacebookSquare;
module.exports = exports['default'];