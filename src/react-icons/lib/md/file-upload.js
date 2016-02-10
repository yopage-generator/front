'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdFileUpload = (function (_React$Component) {
    _inherits(MdFileUpload, _React$Component);

    function MdFileUpload() {
        _classCallCheck(this, MdFileUpload);

        _React$Component.apply(this, arguments);
    }

    MdFileUpload.prototype.render = function render() {
        return React.createElement(
            IconBase,
            _extends({ viewBox: '0 0 40 40' }, this.props),
            React.createElement(
                'g',
                null,
                React.createElement('path', { d: 'm8.360000000000001 30h23.28333333333334v3.3599999999999994h-23.285000000000004v-3.3599999999999994z m6.639999999999999-3.3599999999999994v-10h-6.639999999999999l11.639999999999999-11.64 11.64 11.64h-6.640000000000001v10h-10z' })
            )
        );
    };

    return MdFileUpload;
})(React.Component);

exports['default'] = MdFileUpload;
module.exports = exports['default'];