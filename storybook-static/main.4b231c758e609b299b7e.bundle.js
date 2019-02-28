(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return MapConfig});var _serviceURLs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(92),MapConfig={service:_serviceURLs__WEBPACK_IMPORTED_MODULE_0__.a,domain:_serviceURLs__WEBPACK_IMPORTED_MODULE_0__.d,IDField:"properties.id",toolTipTitle:"properties.name",toolTipFields:[{field:"data.startYear",alias:"Start Year"},{field:"data.endYear",alias:"End Year"},{field:"properties.id",alias:"Project ID"}],styleField:"properties.typology",styles:[{value:1,title:"Mitigation",default:!0,icon:"http://app01.saeon.ac.za/dev/blue_2.png",anchorX:0,anchorY:8},{value:2,title:"Adaptation",icon:"http://app01.saeon.ac.za/dev/green.png",anchorX:0,anchorY:8},{value:3,title:"Research",icon:"http://app01.saeon.ac.za/dev/red.png",anchorX:0,anchorY:8}]}},193:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(118),D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(119),D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(122),D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(120),D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(121),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),style={border:"1px solid gainsboro",padding:"30px 40px 30px 40px",backgroundColor:"whitesmoke"},StoryWrapper=function(_Component){function StoryWrapper(){return Object(D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,StoryWrapper),Object(D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(StoryWrapper).apply(this,arguments))}return Object(D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(StoryWrapper,_Component),Object(D_PROJECTS_react_component_library_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(StoryWrapper,[{key:"render",value:function(){var onClick=this.props.onClick;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{onClick:onClick||null,style:style},this.props.children)}}]),StoryWrapper}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=StoryWrapper,StoryWrapper.__docgenInfo={description:"",methods:[],displayName:"StoryWrapper"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\.storybook\\StoryWrapper.js"]={name:"StoryWrapper",docgenInfo:StoryWrapper.__docgenInfo,path:"components\\.storybook\\StoryWrapper.js"})},282:function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator=__webpack_require__(281),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(438),classCallCheck=__webpack_require__(118),createClass=__webpack_require__(119),possibleConstructorReturn=__webpack_require__(122),getPrototypeOf=__webpack_require__(120),inherits=__webpack_require__(121),react=__webpack_require__(0),react_default=__webpack_require__.n(react),lib=__webpack_require__(59),RechartsLineExample_RechartsLineExample=(__webpack_require__(980),function(_React$Component){function RechartsLineExample(props){var _this;return Object(classCallCheck.a)(this,RechartsLineExample),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(RechartsLineExample).call(this,props))).state={data:void 0,text:"No data provided"},_this}return Object(inherits.a)(RechartsLineExample,_React$Component),Object(createClass.a)(RechartsLineExample,[{key:"componentDidMount",value:function(){var _this2=this;this.setState({text:"Loading data..."}),setTimeout(Object(asyncToGenerator.a)(regenerator_default.a.mark(function _callee(){var _ref2,data;return regenerator_default.a.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,__webpack_require__.e(3).then(__webpack_require__.bind(null,981));case 2:_ref2=_context.sent,data=_ref2.data,_this2.setState({data:_this2.transformData(data)});case 5:case"end":return _context.stop()}},_callee)})),1e3)}},{key:"transformData",value:function(data){var tData=[];return data&&data.sort(function(a,b){return a.year>b.year?1:-1}).forEach(function(p){var searchYear=tData.filter(function(d){return d.year===p.year});searchYear&&searchYear.length>0?searchYear[0].count+=1:tData.push({year:p.year,count:1})}),tData}},{key:"render",value:function(){var _this$props=this.props,width=_this$props.width,height=_this$props.height,data=this.state.data;return width=width||null,height=height||450,react_default.a.createElement("div",{className:"chart-container",style:{width:width,height:height}},!data&&react_default.a.createElement("h2",null,react_default.a.createElement("i",null,this.state.text)),data&&react_default.a.createElement(lib.ResponsiveContainer,{width:"100%",height:"100%"},react_default.a.createElement(lib.LineChart,{data:data},react_default.a.createElement(lib.CartesianGrid,{strokeDasharray:"3 3"}),react_default.a.createElement(lib.XAxis,{dataKey:"year"}),react_default.a.createElement(lib.YAxis,null),react_default.a.createElement(lib.Tooltip,null),react_default.a.createElement(lib.Legend,null),react_default.a.createElement(lib.Line,{type:"monotone",dataKey:"count",stroke:"#8884d8",activeDot:{r:8}}))))}}]),RechartsLineExample}(react_default.a.Component)),src_RechartsLineExample=RechartsLineExample_RechartsLineExample;RechartsLineExample_RechartsLineExample.__docgenInfo={description:"",methods:[{name:"transformData",docblock:null,modifiers:[],params:[{name:"data",type:null}],returns:null}],displayName:"RechartsLineExample"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\charts\\recharts-line-example\\src\\RechartsLineExample.js"]={name:"RechartsLineExample",docgenInfo:RechartsLineExample_RechartsLineExample.__docgenInfo,path:"components\\charts\\recharts-line-example\\src\\RechartsLineExample.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return src_RechartsLineExample})},439:function(module,exports,__webpack_require__){__webpack_require__(440),__webpack_require__(519),module.exports=__webpack_require__(520)},520:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(436),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(437);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__.withOptions)({name:"Components",showAddonPanel:!1}));var req=__webpack_require__(721);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){req.keys().sort().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(209)(module))},617:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":330,"./nestedObjectAssign.js":330};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=617},72:function(module,__webpack_exports__,__webpack_require__){"use strict";var classCallCheck=__webpack_require__(118),createClass=__webpack_require__(119),possibleConstructorReturn=__webpack_require__(122),getPrototypeOf=__webpack_require__(120),assertThisInitialized=__webpack_require__(194),inherits=__webpack_require__(121),react=__webpack_require__(0),react_default=__webpack_require__.n(react),serviceURLs=__webpack_require__(92),MapServiceWrapper_MapServiceWrapper=(__webpack_require__(799),function(_React$Component){function MapServiceWrapper(props){var _this;return Object(classCallCheck.a)(this,MapServiceWrapper),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(MapServiceWrapper).call(this,props))).onMessage=_this.onMessage.bind(Object(assertThisInitialized.a)(_this)),_this}return Object(inherits.a)(MapServiceWrapper,_React$Component),Object(createClass.a)(MapServiceWrapper,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.onMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.onMessage)}},{key:"onMessage",value:function(event){var onFeatureClick=this.props.onFeatureClick;if(event.origin===serviceURLs.b)try{var data=JSON.parse(event.data);"featureClick"==data.cmd&&onFeatureClick&&onFeatureClick(data)}catch(ex){console.error(ex)}}},{key:"buildMapConfig",value:function(){var _this$props=this.props,titleFilter=_this$props.titleFilter,statusFilter=_this$props.statusFilter,typologyFilter=_this$props.typologyFilter,regionFilter=_this$props.regionFilter,sectorFilter=_this$props.sectorFilter,mapConfig=_this$props.mapConfig;if(!mapConfig)return[];if(titleFilter=titleFilter||"",statusFilter=statusFilter||0,typologyFilter=typologyFilter||0,regionFilter=regionFilter||0,sectorFilter=sectorFilter||0,parseInt(regionFilter)>0||parseInt(statusFilter)>0||parseInt(typologyFilter)>0||parseInt(sectorFilter)>0||""!==titleFilter){var filters=[];parseInt(regionFilter)>0&&filters.push({field:"properties.regions",value:parseInt(regionFilter)}),parseInt(statusFilter)>0&&filters.push({field:"properties.status",value:parseInt(statusFilter)}),parseInt(typologyFilter)>0&&filters.push({field:"properties.typology",value:parseInt(typologyFilter)}),parseInt(sectorFilter)>0&&filters.push({field:"properties.sectors",value:parseInt(sectorFilter)}),""!==titleFilter&&filters.push({field:"properties.name",value:titleFilter}),mapConfig.filters=filters}else delete mapConfig.filters;return parseInt(regionFilter)>0?mapConfig.viewport={service:{url:"".concat(serviceURLs.e,"regions/").concat(regionFilter),field:"wkt",display:!0}}:delete mapConfig.viewport,encodeURIComponent(JSON.stringify(mapConfig))}},{key:"render",value:function(){var _this$props2=this.props,height=_this$props2.height,width=_this$props2.width,mapConfig=_this$props2.mapConfig,mapConfigFinal=this.buildMapConfig(),mapSrc="".concat(serviceURLs.c,"?conf=").concat(mapConfigFinal);return"number"==typeof(height=height||"500px")&&(height+="px"),"number"==typeof(width=width||"")&&(width+="px"),react_default.a.createElement("div",{className:"map-container",style:{height:height,width:width}},!mapConfig&&react_default.a.createElement("h2",null,react_default.a.createElement("i",null,"No map-config provided")),mapConfig&&react_default.a.createElement("iframe",{className:"map-frame",src:mapSrc}))}}]),MapServiceWrapper}(react_default.a.Component)),src_MapServiceWrapper=MapServiceWrapper_MapServiceWrapper;MapServiceWrapper_MapServiceWrapper.__docgenInfo={description:"",methods:[{name:"onMessage",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"buildMapConfig",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MapServiceWrapper"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\2d-maps\\MapServiceWrapper\\src\\MapServiceWrapper.js"]={name:"MapServiceWrapper",docgenInfo:MapServiceWrapper_MapServiceWrapper.__docgenInfo,path:"components\\2d-maps\\MapServiceWrapper\\src\\MapServiceWrapper.js"}),__webpack_require__.d(__webpack_exports__,"a",function(){return src_MapServiceWrapper})},721:function(module,exports,__webpack_require__){var map={"./2d-maps/MapServiceWrapper/index.stories.js":722,"./charts/recharts-line-example/index.stories.js":800};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=721},722:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(71),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(280),_storybook_StoryWrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(193),_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(72),_config_mapConfig__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(123);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("2D-Maps/Map Service Wrapper",module).addParameters({info:{inline:!0,header:!0,propTablesExclude:[_src_index__WEBPACK_IMPORTED_MODULE_4__.a,_storybook_StoryWrapper__WEBPACK_IMPORTED_MODULE_3__.a]}}).add("Default state (no props)",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,null)},{info:{text:"\n      This shows the basic usage of the MapServiceWrapper component with no props (default state).\n      "}}).add("Default state (with config)",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{mapConfig:_config_mapConfig__WEBPACK_IMPORTED_MODULE_5__.a})},{info:{text:"\n        This shows the basic usage of the MapServiceWrapper component with just the mapConfig prop (default state with config).\n        "}}).add("With width and height set",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{mapConfig:_config_mapConfig__WEBPACK_IMPORTED_MODULE_5__.a,width:520,height:280})},{info:{text:"\n        This shows the basic usage of the MapServiceWrapper component with height and width props.\n        "}}).add("With region filter",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{mapConfig:_config_mapConfig__WEBPACK_IMPORTED_MODULE_5__.a,regionFilter:1})},{info:{text:"\n      This shows the basic usage of the MapServiceWrapper component witha region filter.\n\n      - Filters:\n       - Region: Western Cape\n      "}}).add("With multiple filters",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{mapConfig:_config_mapConfig__WEBPACK_IMPORTED_MODULE_5__.a,regionFilter:1,typologyFilter:1,statusFilter:1})},{info:{text:"\n      This shows the basic usage of the MapServiceWrapper component with multiple filters.\n\n      - Filters:\n       - Region: Western Cape\n       - Typology: Mitigation\n       - Status: Planned\n      "}}).add("With click event",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{mapConfig:_config_mapConfig__WEBPACK_IMPORTED_MODULE_5__.a,onFeatureClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("data")})},{info:{text:'\n        This shows the basic usage of the MapServiceWrapper component with a click event.\n\n        The onFeatureClick event returns a "data" object that you can use. \n        \n        In this example we just output "data" to the action logger.\n        '},options:{showAddonPanel:!0}})}.call(this,__webpack_require__(209)(module))},799:function(module,exports,__webpack_require__){},800:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(71),_storybook_StoryWrapper__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(280),__webpack_require__(193)),_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(282);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Charts/Recharts Line Example",module).addParameters({info:{inline:!0,header:!0,propTablesExclude:[_src_index__WEBPACK_IMPORTED_MODULE_4__.a,_storybook_StoryWrapper__WEBPACK_IMPORTED_MODULE_3__.a]}}).add("With async data load",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,null)},{info:{text:"\n          This shows the basic usage of the RechartsLineExample component async data loading.\n        "}})}.call(this,__webpack_require__(209)(module))},92:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",function(){return siteBaseURL}),__webpack_require__.d(__webpack_exports__,"e",function(){return vmsBaseURL}),__webpack_require__.d(__webpack_exports__,"b",function(){return mapServerBaseURL}),__webpack_require__.d(__webpack_exports__,"c",function(){return mapServerURL}),__webpack_require__.d(__webpack_exports__,"a",function(){return mapDataURL});var siteBaseURL="".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(window.location.port,"/"),vmsBaseURL="http://app01.saeon.ac.za/vmstest/api/",mapServerBaseURL="http://app01.saeon.ac.za",mapServerURL="http://app01.saeon.ac.za/components/map",mapDataURL="http://app01.saeon.ac.za/nccrdtestapi/odata/projects/extensions.geojson"},980:function(module,exports,__webpack_require__){}},[[439,1,2]]]);
//# sourceMappingURL=main.4b231c758e609b299b7e.bundle.js.map