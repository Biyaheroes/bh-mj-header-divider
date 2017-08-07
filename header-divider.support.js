(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["header-divider"] = factory();
	else
		root["header-divider"] = factory();
})(this, function() {
return webpackJsonpheader_divider([4],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*;
  @module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
  @end-module-license

  @module-configuration:
	{
	  "package": "bh-mj-header-divider",
	  "path": "bh-mj-header-divider/header-divider.jsx",
	  "file": "header-divider.jsx",
	  "module": "header-divider",
	  "author": "Biyaheroes Developers",
	  "contributors": [
		"Robot Biyaheroes <robot@biyaheroes.com>",
		"Vinse Vinalon <vinsevinalon@gmail.com>"
	  ],
	  "eMail": "developers@biyaheroes.com",
	  "repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
	  "global": true
	}
  @end-module-configuration

  @module-documentation:
	Biyaheroes MJML Focus Detail Component
  @end-module-documentation

  @include:
	{
	  "MJMLElement": "mjml-core",
	  "React": "react",
	  "Component": "react.Component",
	  "Column": "mjml-column",
	  "Table": "mjml-table",
	  "wichevr": "wichevr"
	}
  @end-include
*/Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(307);var _extends3=_interopRequireDefault(_extends2);var _jsx2=__webpack_require__(315);var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=__webpack_require__(329);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(333);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(334);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(338);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(347);var _inherits3=_interopRequireDefault(_inherits2);var _class;

var _mjmlCore=__webpack_require__(25);
var _react=__webpack_require__(34);var _react2=_interopRequireDefault(_react);
var _mjmlColumn=__webpack_require__(675);var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _mjmlDivider=__webpack_require__(680);var _mjmlDivider2=_interopRequireDefault(_mjmlDivider);
var _mjmlSection=__webpack_require__(681);var _mjmlSection2=_interopRequireDefault(_mjmlSection);
var _mjmlText=__webpack_require__(682);var _mjmlText2=_interopRequireDefault(_mjmlText);
var _wichevr=__webpack_require__(683);var _wichevr2=_interopRequireDefault(_wichevr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var tagName="mj-header-divider";

var parentTag=["mj-container"];

var endingTag=false;

var defaultMJMLDefinition={
"content":"",
"attributes":{
"label":"Label",
"value-color":"black"}};var




HeaderDivider=(0,_mjmlCore.MJMLElement)(_class=function(_Component){(0,_inherits3.default)(HeaderDivider,_Component);function HeaderDivider(){(0,_classCallCheck3.default)(this,HeaderDivider);return(0,_possibleConstructorReturn3.default)(this,(HeaderDivider.__proto__||(0,_getPrototypeOf2.default)(HeaderDivider)).apply(this,arguments));}(0,_createClass3.default)(HeaderDivider,[{key:"render",value:function render()
{var
mjAttribute=this.props.mjAttribute;

return(
_react2.default.createElement(_mjmlSection2.default,(0,_extends3.default)({},
this.props,{
padding:"0px 0px 0px 0px",
"background-color":mjAttribute("value-color")}),(0,_jsx3.default)(_mjmlColumn2.default,{width:


"70%","background-color":
mjAttribute("label-color")},void 0,(0,_jsx3.default)(_mjmlText2.default,{"font-size":


"16px","font-weight":
"500","letter-spacing":
"0.3px"},void 0,
(0,_wichevr2.default)(mjAttribute("title"),mjAttribute("label")))),(0,_jsx3.default)(_mjmlDivider2.default,{"background-color":



mjAttribute("value-color")},void 0)));



}}]);return HeaderDivider;}(_react.Component))||_class;


HeaderDivider.tagName=tagName;
HeaderDivider.parentTag=parentTag;
HeaderDivider.endingTag=endingTag;
HeaderDivider.defaultMJMLDefinition=defaultMJMLDefinition;exports.default=

HeaderDivider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1kaXZpZGVyLm1vZHVsZS5qc3giXSwibmFtZXMiOlsidGFnTmFtZSIsInBhcmVudFRhZyIsImVuZGluZ1RhZyIsImRlZmF1bHRNSk1MRGVmaW5pdGlvbiIsIkhlYWRlckRpdmlkZXIiLCJtakF0dHJpYnV0ZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0EsNEI7QUFDQSx1QztBQUNBLHlDO0FBQ0EseUM7QUFDQSxtQztBQUNBLGdDOztBQUVBLEdBQU1BLFNBQVUsbUJBQWhCOztBQUVBLEdBQU1DLFdBQVksQ0FBQyxjQUFELENBQWxCOztBQUVBLEdBQU1DLFdBQVksS0FBbEI7O0FBRUEsR0FBTUMsdUJBQXdCO0FBQzdCLFVBQVcsRUFEa0I7QUFFN0IsYUFBYztBQUNiLFFBQVMsT0FESTtBQUViLGNBQWUsT0FGRixDQUZlLENBQTlCLEM7Ozs7O0FBU01DLGE7QUFDSTtBQUNBQyxXQURBLENBQ2dCLEtBQUtDLEtBRHJCLENBQ0FELFdBREE7O0FBR1I7QUFDQztBQUNNLEtBQUtDLEtBRFg7QUFFRSxRQUFRLGlCQUZWO0FBR0UsbUJBQW1CRCxZQUFjLGFBQWQsQ0FIckI7OztBQU1RLEtBTlI7QUFPcUJBLFlBQWMsYUFBZCxDQVByQjs7O0FBVWEsTUFWYjtBQVdlLEtBWGY7QUFZa0IsT0FabEI7QUFhSyxzQkFBU0EsWUFBYSxPQUFiLENBQVQsQ0FBaUNBLFlBQWEsT0FBYixDQUFqQyxDQWJMOzs7O0FBaUJxQkEsWUFBYyxhQUFkLENBakJyQixVQUREOzs7O0FBc0JBLEM7OztBQUdGRCxjQUFjSixPQUFkLENBQXdCQSxPQUF4QjtBQUNBSSxjQUFjSCxTQUFkLENBQTBCQSxTQUExQjtBQUNBRyxjQUFjRixTQUFkLENBQTBCQSxTQUExQjtBQUNBRSxjQUFjRCxxQkFBZCxDQUFzQ0EscUJBQXRDLEM7O0FBRWVDLGEiLCJmaWxlIjoiaGVhZGVyLWRpdmlkZXIubW9kdWxlLmpzeCIsInNvdXJjZVJvb3QiOiIvbW50L2MvVXNlcnMvdmluc2UvRG9jdW1lbnRzL0JpeWFoZXJvZXMvYmgvYmgtbWotaGVhZGVyLWRpdmlkZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG4gIEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBCaXlhaGVyb2VzIERldmVsb3BlcnNcclxuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcbiAgQGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuICBAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0e1xyXG5cdCAgXCJwYWNrYWdlXCI6IFwiYmgtbWotaGVhZGVyLWRpdmlkZXJcIixcclxuXHQgIFwicGF0aFwiOiBcImJoLW1qLWhlYWRlci1kaXZpZGVyL2hlYWRlci1kaXZpZGVyLmpzeFwiLFxyXG5cdCAgXCJmaWxlXCI6IFwiaGVhZGVyLWRpdmlkZXIuanN4XCIsXHJcblx0ICBcIm1vZHVsZVwiOiBcImhlYWRlci1kaXZpZGVyXCIsXHJcblx0ICBcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxyXG5cdCAgXCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcclxuXHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdCAgXSxcclxuXHQgIFwiZU1haWxcIjogXCJkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXCIsXHJcblx0ICBcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQml5YWhlcm9lcy9iaC1tai1kZXRhaWwuZ2l0XCIsXHJcblx0ICBcImdsb2JhbFwiOiB0cnVlXHJcblx0fVxyXG4gIEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcbiAgQG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdEJpeWFoZXJvZXMgTUpNTCBGb2N1cyBEZXRhaWwgQ29tcG9uZW50XHJcbiAgQGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuICBAaW5jbHVkZTpcclxuXHR7XHJcblx0ICBcIk1KTUxFbGVtZW50XCI6IFwibWptbC1jb3JlXCIsXHJcblx0ICBcIlJlYWN0XCI6IFwicmVhY3RcIixcclxuXHQgIFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXHJcblx0ICBcIkNvbHVtblwiOiBcIm1qbWwtY29sdW1uXCIsXHJcblx0ICBcIlRhYmxlXCI6IFwibWptbC10YWJsZVwiLFxyXG5cdCAgXCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0fVxyXG4gIEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuaW1wb3J0IHsgTUpNTEVsZW1lbnQgfSBmcm9tIFwibWptbC1jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIm1qbWwtZGl2aWRlclwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwibWptbC1zZWN0aW9uXCI7XHJcbmltcG9ydCBUZXh0IGZyb20gXCJtam1sLXRleHRcIjtcclxuaW1wb3J0IHdpY2hldnIgZnJvbSBcIndpY2hldnJcIjtcclxuXHJcbmNvbnN0IHRhZ05hbWUgPSBcIm1qLWhlYWRlci1kaXZpZGVyXCI7XHJcblxyXG5jb25zdCBwYXJlbnRUYWcgPSBbXCJtai1jb250YWluZXJcIl07XHJcblxyXG5jb25zdCBlbmRpbmdUYWcgPSBmYWxzZTtcclxuXHJcbmNvbnN0IGRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IHtcclxuXHRcImNvbnRlbnRcIjogXCJcIixcclxuXHRcImF0dHJpYnV0ZXNcIjoge1xyXG5cdFx0XCJsYWJlbFwiOiBcIkxhYmVsXCIsXHJcblx0XHRcInZhbHVlLWNvbG9yXCI6IFwiYmxhY2tcIlxyXG5cdH0sXHJcbn07XHJcblxyXG5ATUpNTEVsZW1lbnRcclxuY2xhc3MgSGVhZGVyRGl2aWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBtakF0dHJpYnV0ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8U2VjdGlvbiBcclxuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHRcdFx0cGFkZGluZz1cIjBweCAwcHggMHB4IDBweFwiXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yPXsgbWpBdHRyaWJ1dGUgKCBcInZhbHVlLWNvbG9yXCIgKSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0PENvbHVtbiBcclxuXHRcdFx0XHRcdHdpZHRoPVwiNzAlXCJcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I9eyBtakF0dHJpYnV0ZSAoIFwibGFiZWwtY29sb3JcIiApIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxUZXh0XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZT1cIjE2cHhcIlxyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodD1cIjUwMFwiXHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nPVwiMC4zcHhcIj5cclxuXHRcdFx0XHRcdFx0eyB3aWNoZXZyKCBtakF0dHJpYnV0ZSggXCJ0aXRsZVwiICksIG1qQXR0cmlidXRlKCBcImxhYmVsXCIgKSApIH1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8L0NvbHVtbj5cclxuXHRcdFx0XHQ8RGl2aWRlclxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcj17IG1qQXR0cmlidXRlICggXCJ2YWx1ZS1jb2xvclwiICkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvRGl2aWRlcj5cclxuXHRcdFx0PC9TZWN0aW9uPik7XHJcblx0fVxyXG59XHJcblxyXG5IZWFkZXJEaXZpZGVyLnRhZ05hbWUgPSB0YWdOYW1lO1xyXG5IZWFkZXJEaXZpZGVyLnBhcmVudFRhZyA9IHBhcmVudFRhZztcclxuSGVhZGVyRGl2aWRlci5lbmRpbmdUYWcgPSBlbmRpbmdUYWc7XHJcbkhlYWRlckRpdmlkZXIuZGVmYXVsdE1KTUxEZWZpbml0aW9uID0gZGVmYXVsdE1KTUxEZWZpbml0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRGl2aWRlcjsiXX0=

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[306]);
});
//# sourceMappingURL=header-divider.support.js.map