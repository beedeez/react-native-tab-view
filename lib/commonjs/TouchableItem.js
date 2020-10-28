var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxFileName="/Users/aurelienboquet/Code/react-native-tab-view/src/TouchableItem.tsx";var LOLLIPOP=21;var TouchableItem=function(_React$Component){(0,_inherits2.default)(TouchableItem,_React$Component);function TouchableItem(){(0,_classCallCheck2.default)(this,TouchableItem);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(TouchableItem).apply(this,arguments));}(0,_createClass2.default)(TouchableItem,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,pressOpacity=_this$props.pressOpacity,pressColor=_this$props.pressColor,borderless=_this$props.borderless,children=_this$props.children,rest=(0,_objectWithoutProperties2.default)(_this$props,["style","pressOpacity","pressColor","borderless","children"]);if(_reactNative.Platform.OS==='android'&&_reactNative.Platform.Version>=LOLLIPOP){return React.createElement(_reactNative.TouchableNativeFeedback,(0,_extends2.default)({},rest,{background:_reactNative.TouchableNativeFeedback.Ripple(pressColor,borderless),__source:{fileName:_jsxFileName,lineNumber:42}}),React.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:46}},React.Children.only(children)));}else{return React.createElement(_reactNative.TouchableOpacity,(0,_extends2.default)({},rest,{style:style,activeOpacity:pressOpacity,__source:{fileName:_jsxFileName,lineNumber:51}}),children);}}}]);return TouchableItem;}(React.Component);exports.default=TouchableItem;TouchableItem.defaultProps={pressColor:'rgba(255, 255, 255, .4)'};
//# sourceMappingURL=TouchableItem.js.map