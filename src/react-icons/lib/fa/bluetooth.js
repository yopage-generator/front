'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaBluetooth = (function (_React$Component) {
    _inherits(FaBluetooth, _React$Component);

    function FaBluetooth() {
        _classCallCheck(this, FaBluetooth);

        _React$Component.apply(this, arguments);
    }

    FaBluetooth.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm21.62857142857143 23.504285714285714l3.304285714285715 3.3028571428571425-3.325714285714284 3.325714285714284z m-0.02142857142857224-13.63857142857143l3.3257142857142874 3.3257142857142856-3.3028571428571425 3.3028571428571425z m-2.8999999999999986 27.321428571428577l10.357142857142858-10.357142857142858-6.832857142857147-6.830000000000002 6.828571428571429-6.828571428571429-10.357142857142858-10.357142857142858v13.637142857142859l-5.688571428571427-5.691428571428572-2.0757142857142856 2.0757142857142856 7.142857142857142 7.165714285714284-7.142857142857142 7.167142857142856 2.0757142857142856 2.0742857142857147 5.691428571428572-5.69142857142857v13.638571428571428z m16.045714285714286-17.18714285714286q0 4.665714285714287-0.7142857142857153 8.157142857142858t-1.952857142857141 5.738571428571433-3.1342857142857135 3.6285714285714263-4.05142857142857 1.9285714285714306-4.899999999999999 0.548571428571428-4.9-0.5457142857142827-4.051428571428572-1.9314285714285688-3.135714285714286-3.6285714285714263-1.9542857142857146-5.7357142857142875-0.7142857142857144-8.157142857142858 0.7142857142857144-8.157142857142857 1.9557142857142802-5.742857142857153 3.1342857142857135-3.6285714285714286 4.051428571428573-1.9257142857142862 4.899999999999999-0.5514285714285714 4.899999999999999 0.5457142857142857 4.051428571428573 1.9314285714285715 3.135714285714286 3.628571428571429 1.9542857142857173 5.735714285714286 0.7142857142857153 8.157142857142857z' })
            )
        );
    };

    return FaBluetooth;
})(React.Component);

exports['default'] = FaBluetooth;
module.exports = exports['default'];