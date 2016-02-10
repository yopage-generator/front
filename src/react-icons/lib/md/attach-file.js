'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdAttachFile = (function (_React$Component) {
    _inherits(MdAttachFile, _React$Component);

    function MdAttachFile() {
        _classCallCheck(this, MdAttachFile);

        _React$Component.apply(this, arguments);
    }

    MdAttachFile.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm27.5 10h2.5v19.14q0 3.828333333333333-2.6566666666666663 6.523333333333333t-6.483333333333334 2.6950000000000003-6.5266666666666655-2.6950000000000003-2.6933333333333334-6.523333333333333v-20.78333333333333q0-2.733333333333335 1.9916666666666671-4.725000000000002t4.724999999999998-1.9933333333333334 4.688333333333333 1.991666666666667 1.9550000000000018 4.726666666666667v17.5q0 1.7166666666666686-1.211666666666666 2.9299999999999997t-2.9299999999999997 1.2133333333333312-2.9666666666666686-1.211666666666666-1.25-2.9299999999999997v-15.858333333333334h2.5v15.858333333333334q0 0.7033333333333331 0.5066666666666677 1.1716666666666669t1.2100000000000009 0.466666666666665 1.1716666666666669-0.466666666666665 0.466666666666665-1.1716666666666669v-17.5q0-1.7166666666666668-1.211666666666666-2.966666666666667t-2.9299999999999997-1.25-2.966666666666667 1.25-1.25 2.966666666666667v20.783333333333335q0 2.7333333333333343 1.9900000000000002 4.724999999999998t4.725000000000001 1.9916666666666671 4.688333333333333-1.9916666666666671 1.9533333333333331-4.726666666666667v-19.14z' })
            )
        );
    };

    return MdAttachFile;
})(React.Component);

exports['default'] = MdAttachFile;
module.exports = exports['default'];