/*
 Highcharts JS v7.1.0 (2019-04-01)

 Exporting module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(f){"object"===typeof module&&module.exports?(f["default"]=f,module.exports=f):"function"===typeof define&&define.amd?define("highcharts/modules/exporting",["highcharts"],function(h){f(h);f.Highcharts=h;return f}):f("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(f){function h(c,C,f,n){c.hasOwnProperty(C)||(c[C]=n.apply(null,f))}f=f?f._modules:{};h(f,"modules/full-screen.src.js",[f["parts/Globals.js"]],function(c){c.FullScreen=function(c){this.init(c.parentNode)};c.FullScreen.prototype=
{init:function(c){c.requestFullscreen?c.requestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullscreen?c.webkitRequestFullscreen():c.msRequestFullscreen&&c.msRequestFullscreen()}}});h(f,"mixins/navigation.js",[],function(){return{initUpdate:function(c){c.navigation||(c.navigation={updates:[],update:function(c,f){this.updates.forEach(function(n){n.update.call(n.context,c,f)})}})},addUpdate:function(c,f){f.navigation||this.initUpdate(f);f.navigation.updates.push({update:c,
context:f})}}});h(f,"modules/exporting.src.js",[f["parts/Globals.js"],f["mixins/navigation.js"]],function(c,f){var h=c.defaultOptions,n=c.doc,A=c.Chart,v=c.addEvent,C=c.removeEvent,D=c.fireEvent,r=c.createElement,E=c.discardElement,w=c.css,p=c.merge,t=c.pick,F=c.objectEach,y=c.extend,J=c.isTouchDevice,z=c.win,H=z.navigator.userAgent,G=c.SVGRenderer,I=c.Renderer.prototype.symbols,K=/Edge\/|Trident\/|MSIE /.test(H),L=/firefox/i.test(H);y(h.lang,{viewFullscreen:"View in full screen",printChart:"Print chart",
downloadPNG:"Indir PNG",downloadJPEG:"Indir JPEG",downloadPDF:"Indir PDF",downloadSVG:"Indir SVG ",contextButtonTitle:"Chart context menu"});h.navigation||(h.navigation={});p(!0,h.navigation,{buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}});p(!0,h.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",
color:"#333333",background:"none",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}}});h.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},
menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen=new c.FullScreen(this.container)}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",
onclick:function(){this.exportChart({type:"image/svg+xml"})}}}};c.post=function(b,a,c){var d=r("form",p({method:"post",action:b,enctype:"multipart/form-data"},c),{display:"none"},n.body);F(a,function(a,b){r("input",{type:"hidden",name:b,value:a},null,d)});d.submit();E(d)};y(A.prototype,{sanitizeSVG:function(b,a){var c=b.indexOf("\x3c/svg\x3e")+6,d=b.substr(c);b=b.substr(0,c);a&&a.exporting&&a.exporting.allowHTML&&d&&(d='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+a.chart.width+'" height\x3d"'+
a.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+d+"\x3c/body\x3e\x3c/foreignObject\x3e",b=b.replace("\x3c/svg\x3e",d+"\x3c/svg\x3e"));b=b.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+\:)href=/g," xlink:href\x3d").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,
'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");this.ieSanitizeSVG&&(b=this.ieSanitizeSVG(b));return b},getChartHTML:function(){this.styledMode&&this.inlineStyles();return this.container.innerHTML},getSVG:function(b){var a,u,d,f,m,k=p(this.options,b);u=r("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},n.body);d=this.renderTo.style.width;m=this.renderTo.style.height;d=k.exporting.sourceWidth||k.chart.width||
/px$/.test(d)&&parseInt(d,10)||(k.isGantt?800:600);m=k.exporting.sourceHeight||k.chart.height||/px$/.test(m)&&parseInt(m,10)||400;y(k.chart,{animation:!1,renderTo:u,forExport:!0,renderer:"SVGRenderer",width:d,height:m});k.exporting.enabled=!1;delete k.data;k.series=[];this.series.forEach(function(a){f=p(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});f.isInternal||k.series.push(f)});this.axes.forEach(function(a){a.userOptions.internalKey||(a.userOptions.internalKey=
c.uniqueKey())});a=new c.Chart(k,this.callback);b&&["xAxis","yAxis","series"].forEach(function(d){var c={};b[d]&&(c[d]=b[d],a.update(c))});this.axes.forEach(function(b){var d=c.find(a.axes,function(a){return a.options.internalKey===b.userOptions.internalKey}),e=b.getExtremes(),u=e.userMin,e=e.userMax;d&&(void 0!==u&&u!==d.min||void 0!==e&&e!==d.max)&&d.setExtremes(u,e,!0,!1)});d=a.getChartHTML();D(this,"getSVG",{chartCopy:a});d=this.sanitizeSVG(d,k);k=null;a.destroy();E(u);return d},getSVGForExport:function(b,
a){var c=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},c.chartOptions,a,{exporting:{sourceWidth:b&&b.sourceWidth||c.sourceWidth,sourceHeight:b&&b.sourceHeight||c.sourceHeight}}))},getFilename:function(){var b=this.userOptions.title&&this.userOptions.title.text,a=this.options.exporting.filename;if(a)return a;"string"===typeof b&&(a=b.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,
24).replace(/[\-]+$/g,""));if(!a||5>a.length)a="chart";return a},exportChart:function(b,a){a=this.getSVGForExport(b,a);b=p(this.options.exporting,b);c.post(b.url,{filename:b.filename||this.getFilename(),type:b.type,width:b.width||0,scale:b.scale,svg:a},b.formAttributes)},print:function(){function b(b){(a.fixedDiv?[a.fixedDiv,a.scrollingContainer]:[a.container]).forEach(function(a){b.appendChild(a)})}var a=this,c=[],d=n.body,f=d.childNodes,m=a.options.exporting.printMaxWidth,k,e;if(!a.isPrinting){a.isPrinting=
!0;a.pointer.reset(null,0);D(a,"beforePrint");if(e=m&&a.chartWidth>m)k=[a.options.chart.width,void 0,!1],a.setSize(m,void 0,!1);[].forEach.call(f,function(a,b){1===a.nodeType&&(c[b]=a.style.display,a.style.display="none")});b(d);setTimeout(function(){z.focus();z.print();setTimeout(function(){b(a.renderTo);[].forEach.call(f,function(a,b){1===a.nodeType&&(a.style.display=c[b])});a.isPrinting=!1;e&&a.setSize.apply(a,k);D(a,"afterPrint")},1E3)},1)}},contextMenu:function(b,a,u,d,f,m,k){var e=this,x=e.options.navigation,
l=e.chartWidth,q=e.chartHeight,h="cache-"+b,g=e[h],B=Math.max(f,m),p;g||(e.exportContextMenu=e[h]=g=r("div",{className:b},{position:"absolute",zIndex:1E3,padding:B+"px",pointerEvents:"auto"},e.fixedDiv||e.container),p=r("div",{className:"highcharts-menu"},null,g),e.styledMode||w(p,y({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},x.menuStyle)),g.hideMenu=function(){w(g,{display:"none"});k&&k.setState(0);e.openMenu=!1;c.clearTimeout(g.hideTimer);
D(e,"exportMenuHidden")},e.exportEvents.push(v(g,"mouseleave",function(){g.hideTimer=setTimeout(g.hideMenu,500)}),v(g,"mouseenter",function(){c.clearTimeout(g.hideTimer)}),v(n,"mouseup",function(a){e.pointer.inClass(a.target,b)||g.hideMenu()}),v(g,"click",function(){e.openMenu&&g.hideMenu()})),a.forEach(function(a){"string"===typeof a&&(a=e.options.exporting.menuItemDefinitions[a]);if(c.isObject(a,!0)){var b;a.separator?b=r("hr",null,null,p):(b=r("div",{className:"highcharts-menu-item",onclick:function(b){b&&
b.stopPropagation();g.hideMenu();a.onclick&&a.onclick.apply(e,arguments)},innerHTML:a.text||e.options.lang[a.textKey]},null,p),e.styledMode||(b.onmouseover=function(){w(this,x.menuItemHoverStyle)},b.onmouseout=function(){w(this,x.menuItemStyle)},w(b,y({cursor:"pointer"},x.menuItemStyle))));e.exportDivElements.push(b)}}),e.exportDivElements.push(p,g),e.exportMenuWidth=g.offsetWidth,e.exportMenuHeight=g.offsetHeight);a={display:"block"};u+e.exportMenuWidth>l?a.right=l-u-f-B+"px":a.left=u-B+"px";d+m+
e.exportMenuHeight>q&&"top"!==k.alignOptions.verticalAlign?a.bottom=q-d-B+"px":a.top=d+m-B+"px";w(g,a);e.openMenu=!0},addButton:function(b){var a=this,c=a.renderer,d=p(a.options.navigation.buttonOptions,b),f=d.onclick,m=d.menuItems,k,e,h=d.symbolSize||12;a.btnCount||(a.btnCount=0);a.exportDivElements||(a.exportDivElements=[],a.exportSVGElements=[]);if(!1!==d.enabled){var l=d.theme,q=l.states,n=q&&q.hover,q=q&&q.select,g;a.styledMode||(l.fill=t(l.fill,"#ffffff"),l.stroke=t(l.stroke,"none"));delete l.states;
f?g=function(b){b&&b.stopPropagation();f.call(a,b)}:m&&(g=function(b){b&&b.stopPropagation();a.contextMenu(e.menuClassName,m,e.translateX,e.translateY,e.width,e.height,e);e.setState(2)});d.text&&d.symbol?l.paddingLeft=t(l.paddingLeft,25):d.text||y(l,{width:d.width,height:d.height,padding:0});a.styledMode||(l["stroke-linecap"]="round",l.fill=t(l.fill,"#ffffff"),l.stroke=t(l.stroke,"none"));e=c.button(d.text,0,0,g,l,n,q).addClass(b.className).attr({title:t(a.options.lang[d._titleKey||d.titleKey],"")});
e.menuClassName=b.menuClassName||"highcharts-menu-"+a.btnCount++;d.symbol&&(k=c.symbol(d.symbol,d.symbolX-h/2,d.symbolY-h/2,h,h,{width:h,height:h}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(e),a.styledMode||k.attr({stroke:d.symbolStroke,fill:d.symbolFill,"stroke-width":d.symbolStrokeWidth||1}));e.add(a.exportingGroup).align(y(d,{width:e.width,x:t(d.x,a.buttonOffset)}),!0,"spacingBox");a.buttonOffset+=(e.width+d.buttonSpacing)*("right"===d.align?-1:1);a.exportSVGElements.push(e,k)}},
destroyExport:function(b){var a=b?b.target:this;b=a.exportSVGElements;var f=a.exportDivElements,d=a.exportEvents,h;b&&(b.forEach(function(b,d){b&&(b.onclick=b.ontouchstart=null,h="cache-"+b.menuClassName,a[h]&&delete a[h],a.exportSVGElements[d]=b.destroy())}),b.length=0);a.exportingGroup&&(a.exportingGroup.destroy(),delete a.exportingGroup);f&&(f.forEach(function(b,d){c.clearTimeout(b.hideTimer);C(b,"mouseleave");a.exportDivElements[d]=b.onmouseout=b.onmouseover=b.ontouchstart=b.onclick=null;E(b)}),
f.length=0);d&&(d.forEach(function(b){b()}),d.length=0)}});G.prototype.inlineToAttributes="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");G.prototype.inlineBlacklist=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/];G.prototype.unstyledElements=["clipPath","defs","desc"];A.prototype.inlineStyles=function(){function b(b){return b.replace(/([A-Z])/g,function(b,a){return"-"+a.toLowerCase()})}
function a(c){function u(a,g){q=v=!1;if(h){for(r=h.length;r--&&!v;)v=h[r].test(g);q=!v}"transform"===g&&"none"===a&&(q=!0);for(r=f.length;r--&&!q;)q=f[r].test(g)||"function"===typeof a;q||m[g]===a&&"svg"!==c.nodeName||e[c.nodeName][g]===a||(-1!==d.indexOf(g)?c.setAttribute(b(g),a):n+=b(g)+":"+a+";")}var g,m,n="",t,q,v,r;if(1===c.nodeType&&-1===k.indexOf(c.nodeName)){g=z.getComputedStyle(c,null);m="svg"===c.nodeName?{}:z.getComputedStyle(c.parentNode,null);e[c.nodeName]||(x=l.getElementsByTagName("svg")[0],
t=l.createElementNS(c.namespaceURI,c.nodeName),x.appendChild(t),e[c.nodeName]=p(z.getComputedStyle(t,null)),"text"===c.nodeName&&delete e.text.fill,x.removeChild(t));if(L||K)for(var w in g)u(g[w],w);else F(g,u);n&&(g=c.getAttribute("style"),c.setAttribute("style",(g?g+";":"")+n));"svg"===c.nodeName&&c.setAttribute("stroke-width","1px");"text"!==c.nodeName&&[].forEach.call(c.children||c.childNodes,a)}}var c=this.renderer,d=c.inlineToAttributes,f=c.inlineBlacklist,h=c.inlineWhitelist,k=c.unstyledElements,
e={},x,l,c=n.createElement("iframe");w(c,{width:"1px",height:"1px",visibility:"hidden"});n.body.appendChild(c);l=c.contentWindow.document;l.open();l.write('\x3csvg xmlns\x3d"http://www.w3.org/2000/svg"\x3e\x3c/svg\x3e');l.close();a(this.container.querySelector("svg"));x.parentNode.removeChild(x)};I.menu=function(b,a,c,d){return["M",b,a+2.5,"L",b+c,a+2.5,"M",b,a+d/2+.5,"L",b+c,a+d/2+.5,"M",b,a+d-1.5,"L",b+c,a+d-1.5]};I.menuball=function(b,a,c,d){b=[];d=d/3-2;return b=b.concat(this.circle(c-d,a,d,d),
this.circle(c-d,a+d+4,d,d),this.circle(c-d,a+2*(d+4),d,d))};A.prototype.renderExporting=function(){var b=this,a=b.options.exporting,c=a.buttons,d=b.isDirtyExporting||!b.exportSVGElements;b.buttonOffset=0;b.isDirtyExporting&&b.destroyExport();d&&!1!==a.enabled&&(b.exportEvents=[],b.exportingGroup=b.exportingGroup||b.renderer.g("exporting-group").attr({zIndex:3}).add(),F(c,function(a){b.addButton(a)}),b.isDirtyExporting=!1);v(b,"destroy",b.destroyExport)};v(A,"init",function(){var b=this;b.exporting=
{update:function(a,c){b.isDirtyExporting=!0;p(!0,b.options.exporting,a);t(c,!0)&&b.redraw()}};f.addUpdate(function(a,c){b.isDirtyExporting=!0;p(!0,b.options.navigation,a);t(c,!0)&&b.redraw()},b)});A.prototype.callbacks.push(function(b){b.renderExporting();v(b,"redraw",b.renderExporting)})});h(f,"masters/modules/exporting.src.js",[],function(){})});
//# sourceMappingURL=exporting.js.map
