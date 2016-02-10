'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoRepoForked = (function (_React$Component) {
    _inherits(GoRepoForked, _React$Component);

    function GoRepoForked() {
        _classCallCheck(this, GoRepoForked);

        _React$Component.apply(this, arguments);
    }

    GoRepoForked.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm35 5c0-2.7750000000000004-2.2250000000000014-5-5-5s-5 2.225-5 5c0 1.8375000000000004 1.0162499999999994 3.4749999999999996 2.5 4.3375v4.139999999999999l-7.5 8.28125-7.5-8.28125v-4.139999999999999c1.4849999999999994-0.8625000000000007 2.5-2.4625000000000004 2.5-4.3375 0-2.7750000000000004-2.2249999999999996-5-5-5s-5 2.225-5 5c0 1.8375000000000004 1.0162499999999994 3.4749999999999996 2.5 4.3375v6.092499999999999l10 11.01625v4.2575c-1.4849999999999994 0.8599999999999994-2.5 2.4624999999999986-2.5 4.337499999999999 0 2.772500000000001 2.2250000000000014 5 5 5s5-2.227499999999999 5-5c0-1.8374999999999986-1.0162499999999994-3.477499999999999-2.5-4.337499999999999v-4.2575l10-11.016250000000001v-6.092499999999998c1.4849999999999994-0.8625000000000007 2.5-2.4625000000000004 2.5-4.3375z m-25-2.4625000000000004c1.3287499999999994 0 2.4224999999999994 1.0949999999999998 2.4224999999999994 2.425s-1.09375 2.42-2.4224999999999994 2.42-2.422500000000001-1.0924999999999994-2.422500000000001-2.419999999999999 1.09375-2.4250000000000007 2.422500000000001-2.4250000000000007z m10 34.80625c-1.3287499999999994 0-2.4224999999999994-1.09375-2.4224999999999994-2.4224999999999994s1.09375-2.4212500000000006 2.4224999999999994-2.4212500000000006 2.4224999999999994 1.0925000000000011 2.4224999999999994 2.4212500000000006-1.09375 2.4224999999999994-2.4224999999999994 2.4224999999999994z m10-34.80625c1.3287499999999994-1.7763568394002505e-15 2.4224999999999994 1.094999999999998 2.4224999999999994 2.424999999999998s-1.09375 2.42-2.4224999999999994 2.42-2.4224999999999994-1.09375-2.4224999999999994-2.4225000000000003 1.09375-2.425 2.4224999999999994-2.425z' })
            )
        );
    };

    return GoRepoForked;
})(React.Component);

exports['default'] = GoRepoForked;
module.exports = exports['default'];