import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/aurelienboquet/Code/react-native-tab-view/src/TabBarItem.tsx";import*as React from'react';import{StyleSheet,View}from'react-native';import TouchableItem from'./TouchableItem';import Animated from'react-native-reanimated';import memoize from'./memoize';var DEFAULT_ACTIVE_COLOR='rgba(255, 255, 255, 1)';var DEFAULT_INACTIVE_COLOR='rgba(255, 255, 255, 0.7)';var TabBarItem=function(_React$Component){_inherits(TabBarItem,_React$Component);function TabBarItem(){var _getPrototypeOf2;var _this;_classCallCheck(this,TabBarItem);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(TabBarItem)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.getActiveOpacity=memoize(function(position,routes,tabIndex){if(routes.length>1){var inputRange=routes.map(function(_,i){return i;});return Animated.interpolate(position,{inputRange:inputRange,outputRange:inputRange.map(function(i){return i===tabIndex?1:0;})});}else{return 1;}});_this.getInactiveOpacity=memoize(function(position,routes,tabIndex){if(routes.length>1){var inputRange=routes.map(function(_,i){return i;});return Animated.interpolate(position,{inputRange:inputRange,outputRange:inputRange.map(function(i){return i===tabIndex?0:1;})});}else{return 0;}});return _this;}_createClass(TabBarItem,[{key:"render",value:function render(){var _this$props=this.props,route=_this$props.route,position=_this$props.position,navigationState=_this$props.navigationState,renderLabelPassed=_this$props.renderLabel,renderIcon=_this$props.renderIcon,renderBadge=_this$props.renderBadge,getLabelText=_this$props.getLabelText,getTestID=_this$props.getTestID,getAccessibilityLabel=_this$props.getAccessibilityLabel,getAccessible=_this$props.getAccessible,_this$props$activeCol=_this$props.activeColor,activeColor=_this$props$activeCol===void 0?DEFAULT_ACTIVE_COLOR:_this$props$activeCol,_this$props$inactiveC=_this$props.inactiveColor,inactiveColor=_this$props$inactiveC===void 0?DEFAULT_INACTIVE_COLOR:_this$props$inactiveC,pressColor=_this$props.pressColor,pressOpacity=_this$props.pressOpacity,labelStyle=_this$props.labelStyle,style=_this$props.style,onLayout=_this$props.onLayout,onPress=_this$props.onPress,onLongPress=_this$props.onLongPress;var tabIndex=navigationState.routes.indexOf(route);var isFocused=navigationState.index===tabIndex;var activeOpacity=this.getActiveOpacity(position,navigationState.routes,tabIndex);var inactiveOpacity=this.getInactiveOpacity(position,navigationState.routes,tabIndex);var icon=null;var label=null;if(renderIcon){var activeIcon=renderIcon({route:route,focused:true,color:activeColor});var inactiveIcon=renderIcon({route:route,focused:false,color:inactiveColor});if(inactiveIcon!=null&&activeIcon!=null){icon=React.createElement(View,{style:styles.icon,__source:{fileName:_jsxFileName,lineNumber:133}},React.createElement(Animated.View,{style:{opacity:inactiveOpacity},__source:{fileName:_jsxFileName,lineNumber:134}},inactiveIcon),React.createElement(Animated.View,{style:[StyleSheet.absoluteFill,{opacity:activeOpacity}],__source:{fileName:_jsxFileName,lineNumber:137}},activeIcon));}}var renderLabel=renderLabelPassed!==undefined?renderLabelPassed:function(_ref){var route=_ref.route,color=_ref.color;var labelText=getLabelText({route:route});if(typeof labelText==='string'){return React.createElement(Animated.Text,{style:[styles.label,icon?{marginTop:0}:null,{color:color},labelStyle],__source:{fileName:_jsxFileName,lineNumber:155}},labelText);}return labelText;};if(renderLabel){var activeLabel=renderLabel({route:route,focused:true,color:activeColor});var inactiveLabel=renderLabel({route:route,focused:false,color:inactiveColor});label=React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:184}},React.createElement(Animated.View,{style:{opacity:inactiveOpacity},__source:{fileName:_jsxFileName,lineNumber:185}},inactiveLabel),React.createElement(Animated.View,{style:[StyleSheet.absoluteFill,{opacity:activeOpacity}],__source:{fileName:_jsxFileName,lineNumber:188}},activeLabel));}var tabStyle=StyleSheet.flatten(style);var isWidthSet=tabStyle&&tabStyle.width!==undefined;var tabContainerStyle=isWidthSet?null:{flex:1};var scene={route:route};var accessibilityLabel=getAccessibilityLabel(scene);accessibilityLabel=typeof accessibilityLabel!=='undefined'?accessibilityLabel:getLabelText(scene);var badge=renderBadge?renderBadge(scene):null;return React.createElement(TouchableItem,{borderless:true,testID:getTestID(scene),accessible:getAccessible(scene),accessibilityLabel:accessibilityLabel,accessibilityTraits:isFocused?['button','selected']:'button',accessibilityComponentType:"button",accessibilityRole:"button",accessibilityStates:isFocused?['selected']:[],pressColor:pressColor,pressOpacity:pressOpacity,delayPressIn:0,onLayout:onLayout,onPress:onPress,onLongPress:onLongPress,style:tabContainerStyle,__source:{fileName:_jsxFileName,lineNumber:213}},React.createElement(View,{pointerEvents:"none",style:[styles.item,tabStyle],__source:{fileName:_jsxFileName,lineNumber:230}},icon,label,badge!=null?React.createElement(View,{style:styles.badge,__source:{fileName:_jsxFileName,lineNumber:233}},badge):null));}}]);return TabBarItem;}(React.Component);export{TabBarItem as default};var styles=StyleSheet.create({label:{margin:4,backgroundColor:'transparent'},icon:{margin:2},item:{flex:1,alignItems:'center',justifyContent:'center',padding:10,minHeight:48},badge:{position:'absolute',top:0,right:0}});
//# sourceMappingURL=TabBarItem.js.map