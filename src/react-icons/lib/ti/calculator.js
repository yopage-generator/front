'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiCalculator = (function (_React$Component) {
    _inherits(TiCalculator, _React$Component);

    function TiCalculator() {
        _classCallCheck(this, TiCalculator);

        _React$Component.apply(this, arguments);
    }

    TiCalculator.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm28.333333333333336 35h-13.333333333333336c-2.7566666666666677 0-5-2.2433333333333323-5-5v-20c0-2.756666666666667 2.243333333333334-5 5-5h13.333333333333336c2.7566666666666677 0 5 2.243333333333334 5 5v20c0 2.7566666666666677-2.2433333333333323 5-5 5z m-13.333333333333336-26.666666666666664c-0.9166666666666661-1.7763568394002505e-15-1.666666666666666 0.7499999999999982-1.666666666666666 1.6666666666666643v20c0 0.9166666666666679 0.75 1.6666666666666679 1.666666666666666 1.6666666666666679h13.333333333333336c0.9166666666666679 0 1.6666666666666679-0.75 1.6666666666666679-1.6666666666666679v-20c0-0.9166666666666661-0.75-1.666666666666666-1.6666666666666679-1.666666666666666h-13.333333333333336z m3.3333333333333357 10c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.666666666666666-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m5 0c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m5 0c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m-10 5c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.666666666666666-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m5 0c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m5 0c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m-10 5c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.666666666666666-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m5 0c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m5 0c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679s-1.6666666666666679-0.7466666666666661-1.6666666666666679-1.6666666666666679 0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679z m-1.6666666666666679-16.666666666666668v1.666666666666666h-10v-1.666666666666666h10z m1.6666666666666679-1.666666666666666h-13.333333333333336v5h13.333333333333336v-5.000000000000002z' })
            )
        );
    };

    return TiCalculator;
})(React.Component);

exports['default'] = TiCalculator;
module.exports = exports['default'];