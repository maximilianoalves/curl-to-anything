(this["webpackJsonpcurl-to-anything"]=this["webpackJsonpcurl-to-anything"]||[]).push([[0],{111:function(e,t,a){e.exports=a(358)},116:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),c=a.n(i),u=(a(116),a(15)),o=a(13),l=a(28),s=a(27),m=a(390),h=a(393),d=a(394),p=a(87),v=a.n(p),f=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,{position:"static"},n.a.createElement(h.a,null,n.a.createElement(d.a,{variant:"h4",className:v.a.title},"cURL to Anything")))}}]),a}(r.Component),b=a(50),y=a(402),E=a(399),k=a(91),g=a.n(k),O=a(397),j=a(401),w=a(395),P=a(407),S=a(404),U=a(398),C=a(403),T=a(22),F=a(69),W=function(){function e(t){Object(u.a)(this,e),this.curl=void 0,this.url=void 0,this.method=void 0,this.body=void 0,this.headers=void 0,this.curl=t,this.headers=[],this.body="",this.converter()}return Object(o.a)(e,[{key:"converter",value:function(){var e=this;this.curl.includes("--")?this.curl.split("--").forEach((function(t){if(t.includes("header")){var a=t.split("'")[1].split(":");e.headers.push({name:a[0],value:a[1]})}if(t.includes("data-raw")){var r=t.split("'");e.body=r[1]}t.includes("request")&&e.createUrl(t)})):this.curl.split(" -").forEach((function(t){if(t.includes("H")){var a=t.split('"')[1].split(":");e.headers.push({name:a[0],value:a[1]})}if(t.includes("d")){var r=t.split(' "');e.body=r[1]}t.includes("X")&&e.createUrl(t)}))}},{key:"createUrl",value:function(e){var t=e.split(" ");this.method=t[1];var a=t[2].split("'");this.url=new URL(a[1])}}]),e}(),x=function(){function e(t){Object(u.a)(this,e),this.curlProperties=void 0,this.curlProperties=new W(t)}return Object(o.a)(e,[{key:"mountSnippet",value:function(){return"given()".concat(this.mountHeaders()).concat(this.mountBody(),"\n.when()").concat(this.mountUrl(),"\n.then()")}},{key:"mountUrl",value:function(){var e="";switch(this.curlProperties.method){case"GET":e='.get("'.concat(this.curlProperties.url,'")');break;case"POST":e='.post("'.concat(this.curlProperties.url,'")');break;case"PUT":e='.put("'.concat(this.curlProperties.url,'")');break;case"DELETE":e='.delete("'.concat(this.curlProperties.url,'")')}return"\n"+e}},{key:"mountHeaders",value:function(){var e="";return this.curlProperties.headers.forEach((function(t){e+='\n.header("'.concat(t.name.trim(),'", "').concat(t.value.trim(),'")')})),e}},{key:"mountBody",value:function(){var e="";return"undefined"!=typeof this.curlProperties.body&&this.curlProperties.body&&(e="\n.body(".concat(this.curlProperties.body,")")),e}}]),e}(),L=function(){function e(t){Object(u.a)(this,e),this.curlProperties=void 0,this.curlProperties=new W(t)}return Object(o.a)(e,[{key:"mountSnippet",value:function(){return"".concat(this.mountUrl()).concat(this.mountHeader()).concat(this.mountBody()).concat(this.mountMethod(),"\n Then status <status-code>")}},{key:"mountUrl",value:function(){var e="";return this.curlProperties.url&&(e=" Given url '".concat(this.curlProperties.url,"'")),e}},{key:"mountBody",value:function(){var e="";return this.curlProperties.body&&(e="\n And request ".concat(this.curlProperties.body)),e}},{key:"mountHeader",value:function(){var e="";return this.curlProperties.headers.forEach((function(t){e+="\n And header ".concat(t.name.trim(),' = "').concat(t.value.trim(),'"')})),e}},{key:"mountMethod",value:function(){var e="";switch(this.curlProperties.method){case"GET":e="When method get";break;case"POST":e="When method post";break;case"PUT":e="When method put";break;case"DELETE":e="When method delete"}return"\n "+e}}]),e}(),H=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).state={frameworks:"",curlCommand:"",snippet:"",language:""},r.handleSubmit=r.handleSubmit.bind(Object(b.a)(r)),r}return Object(o.a)(a,[{key:"handleSubmit",value:function(e,t){var a=e.frameworks,r=e.curlCommand,n=t.setSubmitting;if("restassured"===a){var i=new x(r);this.setState({snippet:i.mountSnippet(),language:"java"})}else if("karate"===a){var c=new L(r);this.setState({snippet:c.mountSnippet(),language:"gherkin"})}else"cypress"===a&&alert("cypress: Work in progress");n(!1)}}]),Object(o.a)(a,[{key:"curlFieldValidation",value:function(e){var t="";return e?e.includes("curl")||(t="Invalid curl command"):t="Empty field",t}},{key:"frameworksFieldValidation",value:function(e){var t="";return e||(t="First, choose your framework"),t}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(O.a,{maxWidth:"lg"},n.a.createElement(T.c,{initialValues:{frameworks:"",curlCommand:"",snippet:"",language:""},onSubmit:this.handleSubmit},(function(t){var a=t.errors;t.touched,t.isValidating;return n.a.createElement(T.b,null,n.a.createElement(j.a,{margin:2},n.a.createElement(w.a,{fullWidth:!0},n.a.createElement(P.a,{shrink:!0,htmlFor:"framework"},"Choose your framework"),n.a.createElement(T.a,{component:F.a,type:"text",name:"frameworks",inputProps:{name:"frameworks",id:"frameworks"},validate:e.frameworksFieldValidation},n.a.createElement(S.a,{value:"restassured"},"RestAssured"),n.a.createElement(S.a,{value:"karate"},"Karate/DSL"),n.a.createElement(S.a,{value:"cypress"},"Cypress")),n.a.createElement("div",{className:"MuiFormHelperText-root MuiFormHelperText-contained Mui-error"},a.frameworks))),n.a.createElement(j.a,{margin:2},n.a.createElement(w.a,{fullWidth:!0},n.a.createElement(T.a,{component:F.b,type:"text",label:"cURL",variant:"outlined",multiline:!0,rows:4,placeholder:"Insert your curl command",name:"curlCommand",validate:e.curlFieldValidation}))),n.a.createElement(j.a,{margin:2},n.a.createElement(w.a,{fullWidth:!0},n.a.createElement(U.a,{variant:"contained",type:"submit",color:"primary"},"CURLVERT"))))}))),n.a.createElement(O.a,{maxWidth:"md"},n.a.createElement(j.a,{margin:4},this.state.snippet?n.a.createElement(y.a,{showLineNumbers:!0,language:this.state.language,style:E.a},this.state.snippet):null,this.state.snippet?n.a.createElement(g.a,{text:this.state.snippet},n.a.createElement(U.a,{startIcon:n.a.createElement(C.a,null),variant:"outlined"},"Copy to clipboard")):null)))}}]),a}(r.Component),V=(a(357),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(H,null))}}]),a}(r.Component)),M=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(V,null)}}]),a}(r.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root"))},87:function(e,t,a){e.exports={title:"styles_title__3FbFt"}}},[[111,1,2]]]);
//# sourceMappingURL=main.66f138b6.chunk.js.map