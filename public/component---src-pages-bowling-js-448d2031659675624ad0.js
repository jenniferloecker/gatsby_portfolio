(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5WXs":function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),o=l("R/WZ"),r=l("Ff2n"),i=l("wx14"),c=l("iuhU"),d=l("H2TA"),u=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=parseFloat(e);return"".concat(l/t).concat(String(e).replace(String(l),"")||"px")}var p=n.forwardRef((function(e,t){var l=e.alignContent,a=void 0===l?"stretch":l,o=e.alignItems,d=void 0===o?"stretch":o,u=e.classes,s=e.className,m=e.component,p=void 0===m?"div":m,f=e.container,b=void 0!==f&&f,g=e.direction,v=void 0===g?"row":g,h=e.item,x=void 0!==h&&h,y=e.justify,S=void 0===y?"flex-start":y,w=e.lg,R=void 0!==w&&w,j=e.md,O=void 0!==j&&j,C=e.sm,k=void 0!==C&&C,E=e.spacing,I=void 0===E?0:E,T=e.wrap,z=void 0===T?"wrap":T,N=e.xl,F=void 0!==N&&N,M=e.xs,W=void 0!==M&&M,L=e.zeroMinWidth,P=void 0!==L&&L,A=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(c.a)(u.root,s,b&&[u.container,0!==I&&u["spacing-xs-".concat(String(I))]],x&&u.item,P&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==z&&u["wrap-xs-".concat(String(z))],"stretch"!==d&&u["align-items-xs-".concat(String(d))],"stretch"!==a&&u["align-content-xs-".concat(String(a))],"flex-start"!==S&&u["justify-xs-".concat(String(S))],!1!==W&&u["grid-xs-".concat(String(W))],!1!==k&&u["grid-sm-".concat(String(k))],!1!==O&&u["grid-md-".concat(String(O))],!1!==R&&u["grid-lg-".concat(String(R))],!1!==F&&u["grid-xl-".concat(String(F))]);return n.createElement(p,Object(i.a)({className:B,ref:t},A))})),f=Object(d.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var l={};return u.forEach((function(n){var a=e.spacing(n);0!==a&&(l["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(m(a,2)),width:"calc(100% + ".concat(m(a),")"),"& > $item":{padding:m(a,2)}})})),l}(e,"xs"),e.breakpoints.keys.reduce((function(t,l){return function(e,t,l){var n={};s.forEach((function(e){var t="grid-".concat(l,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===l?Object(i.a)(e,n):e[t.breakpoints.up(l)]=n}(t,e,l),t}),{}))}),{name:"MuiGrid"})(p),b=function(e){var t=e.frame,l=e.index,n=t.cumulativeScore;return a.a.createElement(f,{item:!0},a.a.createElement("u",null,"Frame ",l+1," ")," ",a.a.createElement("br",null),"1: ",t.roll1," ",a.a.createElement("br",null),"2: ",t.roll2," ",a.a.createElement("br",null),9===l&&a.a.createElement("div",null,"3: ",t.roll3),"Score:",n,a.a.createElement("br",null),a.a.createElement("br",null))},g=Object(o.a)((function(e){return{root:{margin:e.spacing(1)}}})),v=function(e){var t=e.currentGame,l=g(),n=Array.from(t.frames.values());return a.a.createElement(f,{container:!0,className:l.root,spacing:2},n.map((function(e,t){return a.a.createElement(b,{key:t,frame:e,index:t})})))},h=l("pdwK"),x=l("TLZQ"),y=l("KmP9"),S=l("1AYd"),w=l("ADg1"),R=l("28cb"),j=l("EHdT"),O=n.forwardRef((function(e,t){var l=e.children,a=e.classes,o=e.className,d=e.component,u=void 0===d?"p":d,s=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(r.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),m=Object(j.a)(),p=Object(R.a)({props:e,muiFormControl:m,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(u,Object(i.a)({className:Object(c.a)(a.root,("filled"===p.variant||"outlined"===p.variant)&&a.contained,o,p.disabled&&a.disabled,p.error&&a.error,p.filled&&a.filled,p.focused&&a.focused,p.required&&a.required,"dense"===p.margin&&a.marginDense),ref:t},s)," "===l?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):l)})),C=Object(d.a)((function(e){return{root:Object(i.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(O),k=l("cVXz"),E={standard:h.a,filled:x.a,outlined:y.a},I=n.forwardRef((function(e,t){var l=e.autoComplete,a=e.autoFocus,o=void 0!==a&&a,d=e.children,u=e.classes,s=e.className,m=e.color,p=void 0===m?"primary":m,f=e.defaultValue,b=e.disabled,g=void 0!==b&&b,v=e.error,h=void 0!==v&&v,x=e.FormHelperTextProps,y=e.fullWidth,R=void 0!==y&&y,j=e.helperText,O=e.hiddenLabel,I=e.id,T=e.InputLabelProps,z=e.inputProps,N=e.InputProps,F=e.inputRef,M=e.label,W=e.multiline,L=void 0!==W&&W,P=e.name,A=e.onBlur,B=e.onChange,$=e.onFocus,_=e.placeholder,G=e.required,q=void 0!==G&&G,V=e.rows,D=e.rowsMax,H=e.select,Y=void 0!==H&&H,J=e.SelectProps,K=e.type,U=e.value,X=e.variant,Z=void 0===X?"standard":X,Q=Object(r.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===Z&&(T&&void 0!==T.shrink&&(ee.notched=T.shrink),M)){var te,le=null!==(te=null==T?void 0:T.required)&&void 0!==te?te:q;ee.label=n.createElement(n.Fragment,null,M,le&&" *")}Y&&(J&&J.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var ne=j&&I?"".concat(I,"-helper-text"):void 0,ae=M&&I?"".concat(I,"-label"):void 0,oe=E[Z],re=n.createElement(oe,Object(i.a)({"aria-describedby":ne,autoComplete:l,autoFocus:o,defaultValue:f,fullWidth:R,multiline:L,name:P,rows:V,rowsMax:D,type:K,value:U,id:I,inputRef:F,onBlur:A,onChange:B,onFocus:$,placeholder:_,inputProps:z},ee,N));return n.createElement(w.a,Object(i.a)({className:Object(c.a)(u.root,s),disabled:g,error:h,fullWidth:R,hiddenLabel:O,ref:t,required:q,color:p,variant:Z},Q),M&&n.createElement(S.a,Object(i.a)({htmlFor:I,id:ae},T),M),Y?n.createElement(k.a,Object(i.a)({"aria-describedby":ne,id:I,labelId:ae,value:U,input:re},J),d):re,j&&n.createElement(C,Object(i.a)({id:ne},x),j))})),T=Object(d.a)({root:{}},{name:"MuiTextField"})(I),z=Object(o.a)((function(e){return{root:{margin:e.spacing(1)},textField:{width:"50%"}}})),N=function(e){var t=e.currentGame,l=Object(n.useState)(""),o=l[0],r=l[1],i=Object(n.useState)(!1),c=i[0],d=i[1],u=Object(n.useState)(""),s=u[0],m=u[1],p=z();return a.a.createElement("form",{className:p.root,onSubmit:function(e){var l=t.nextRollMax();e.preventDefault(),o<=l&&o>=0?(m(""),d(!1),t.addNewScore(Number(o))):(m("Next roll must be equal or less than "+l+" and greater than 0"),d(!0)),r("")}},a.a.createElement(T,{error:c,helperText:s,className:p.textField,type:"number",label:"Enter the next roll score:",value:o,onInput:function(e){return r(e.target.value)}}))},F=l("99Ma"),M=F.a.model({roll1:F.a.maybeNull(F.a.number,null),roll2:F.a.maybeNull(F.a.number,null),roll3:F.a.maybeNull(F.a.number,null),additionalRoll1:F.a.maybeNull(F.a.number,null),additionalRoll2:F.a.maybeNull(F.a.number,null),cumulativeScore:F.a.maybeNull(F.a.number,null)}).views((function(e){function t(){return 10===e.roll1}function l(){return null!==e.roll1&&null!==e.roll2&&e.roll1+e.roll2===10}return{isStrike:t,frameScore:function(){return t()&&null!==e.additionalRoll1&&null!==e.additionalRoll2?e.roll1+e.additionalRoll1+e.additionalRoll2:l()&&null!==e.additionalRoll1?e.roll1+e.roll2+e.additionalRoll1:t()||l()?null:null!==e.roll1&&null!==e.roll2?e.roll1+e.roll2:null},isSpare:l,tenthFrameScore:function(){var t=e.isSpare()||e.isStrike();return null===e.roll1||null===e.roll2||t&&null===e.roll3?null:t?e.roll1+e.roll2+e.roll3:e.roll1+e.roll2}}})).actions((function(e){return{setRoll1:function(t){e.roll1=t},setRoll2:function(t){e.roll2=t},setRoll3:function(t){e.roll3=t},setAdditionalRoll1:function(t){e.additionalRoll1=t},setAdditionalRoll2:function(t){e.additionalRoll2=t},setCumulativeScore:function(t){e.cumulativeScore=t}}})),W=F.a.model({frames:F.a.optional(F.a.map(M),{0:M.create(),1:M.create(),2:M.create(),3:M.create(),4:M.create(),5:M.create(),6:M.create(),7:M.create(),8:M.create(),9:M.create()}),runningScore:F.a.maybeNull(F.a.number,null)}).views((function(e){return{calculateGameScores:function(){e.setRunningScore(0);for(var t=Array.from(e.frames.values()),l=0;l<t.length;l++){var n=0;null!==(n=9===l?t[l].tenthFrameScore():t[l].frameScore())&&(e.setRunningScore(e.runningScore+n),t[l].setCumulativeScore(e.runningScore))}},currentFrame:function(){for(var t=Array.from(e.frames.values()),l=0;l<t.length;l++){var n=t[l];if(null===n.roll1||null===n.roll2||9===l){if(null==n.roll1)return l;if(10!==n.roll1||9===l){if(null===n.roll2)return l;if(9===l&null==n.roll3&&(n.isStrike()||n.isSpare))return l}}}},nextRollMax:function(){var t=e.currentFrame(),l=e.frames.get(t);return null!==l.roll1&&l.roll1<10?10-l.roll1:10},isGameOver:function(){return null!==e.frames.get(9).tenthFrameScore()},finalScore:function(){return e.frames.get(9).cumulativeScore}}})).actions((function(e){return{addNewScore:function(t){var l=e.currentFrame(),n=e.frames.get(l);null===n.roll1?n.setRoll1(t):null===n.roll2?n.setRoll2(t):9===l&&(n.isStrike()||n.isSpare)&&n.setRoll3(t),function(t,l){if(0===t)return;var n=null,a=null;1===t?n=e.frames.get(0):(n=e.frames.get(t-1),a=e.frames.get(t-2));null===n.additionalRoll1?n.setAdditionalRoll1(l):null===n.additionalRoll2&&n.setAdditionalRoll2(l);null!==a&&(null===a.additionalRoll1?a.setAdditionalRoll1(l):null===a.additionalRoll2&&a.setAdditionalRoll2(l))}(l,t),e.calculateGameScores()},setFrames:function(t){e.frames=t},setRunningScore:function(t){e.runningScore=t},setFrame:function(t,l){e.frames.set(l,t)}}})),L=l("ye/S"),P=l("VD++"),A=l("NqtD"),B=n.forwardRef((function(e,t){var l=e.children,a=e.classes,o=e.className,d=e.color,u=void 0===d?"default":d,s=e.component,m=void 0===s?"button":s,p=e.disabled,f=void 0!==p&&p,b=e.disableElevation,g=void 0!==b&&b,v=e.disableFocusRipple,h=void 0!==v&&v,x=e.endIcon,y=e.focusVisibleClassName,S=e.fullWidth,w=void 0!==S&&S,R=e.size,j=void 0===R?"medium":R,O=e.startIcon,C=e.type,k=void 0===C?"button":C,E=e.variant,I=void 0===E?"text":E,T=Object(r.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),z=O&&n.createElement("span",{className:Object(c.a)(a.startIcon,a["iconSize".concat(Object(A.a)(j))])},O),N=x&&n.createElement("span",{className:Object(c.a)(a.endIcon,a["iconSize".concat(Object(A.a)(j))])},x);return n.createElement(P.a,Object(i.a)({className:Object(c.a)(a.root,a[I],o,"inherit"===u?a.colorInherit:"default"!==u&&a["".concat(I).concat(Object(A.a)(u))],"medium"!==j&&[a["".concat(I,"Size").concat(Object(A.a)(j))],a["size".concat(Object(A.a)(j))]],g&&a.disableElevation,f&&a.disabled,w&&a.fullWidth),component:m,disabled:f,focusRipple:!h,focusVisibleClassName:Object(c.a)(a.focusVisible,y),ref:t,type:k},T),n.createElement("span",{className:a.label},z,l,N))})),$=Object(d.a)((function(e){return{root:Object(i.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(L.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(L.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(L.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(L.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(L.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(L.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(L.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(B),_=Object(o.a)((function(e){return{root:{margin:e.spacing(1)}}})),G=function(e){var t=e.currentGame,l=e.startOver,n=_();return a.a.createElement("div",{className:n.root},a.a.createElement("div",null,"Final Score: ",t.finalScore()),a.a.createElement($,{variant:"contained",color:"primary",onClick:l},"Start Over"))},q={0:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},1:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},2:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},3:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},4:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},5:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},6:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},7:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},8:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null},9:{roll1:null,roll2:null,roll3:null,additionalRoll1:null,additionalRoll2:null,cumulativeScore:null}},V=W.create(),D=function(){V.setFrames(q)},H=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{currentGame:V}),a.a.createElement(v,{currentGame:V}),V.isGameOver()&&a.a.createElement(G,{currentGame:V,startOver:D}))},Y=l("Wbzz");t.default=function(){return a.a.createElement("div",null,a.a.createElement(H,null),a.a.createElement(Y.Link,{to:"/projects",className:"mob-menu-items",activeClassName:"active"},a.a.createElement("button",{className:"navbtn"},"Back")))}},URgk:function(e,t,l){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},l("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,l("yLpj"))},YBdB:function(e,t,l){(function(e,t){!function(e,l){"use strict";if(!e.setImmediate){var n,a,o,r,i,c=1,d={},u=!1,s=e.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(e);m=m&&m.setTimeout?m:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){f(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,l=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=l,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){f(e.data)},n=function(e){o.port2.postMessage(e)}):s&&"onreadystatechange"in s.createElement("script")?(a=s.documentElement,n=function(e){var t=s.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):n=function(e){setTimeout(f,0,e)}:(r="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&f(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),n=function(t){e.postMessage(r+t,"*")}),m.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),l=0;l<t.length;l++)t[l]=arguments[l+1];var a={callback:e,args:t};return d[c]=a,n(c),c++},m.clearImmediate=p}function p(e){delete d[e]}function f(e){if(u)setTimeout(f,0,e);else{var t=d[e];if(t){u=!0;try{!function(e){var t=e.callback,l=e.args;switch(l.length){case 0:t();break;case 1:t(l[0]);break;case 2:t(l[0],l[1]);break;case 3:t(l[0],l[1],l[2]);break;default:t.apply(void 0,l)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,l("yLpj"),l("8oxB"))}}]);
//# sourceMappingURL=component---src-pages-bowling-js-448d2031659675624ad0.js.map