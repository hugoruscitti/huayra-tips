define("huayra-tips/app",["exports","ember","ember/resolver","ember/load-initializers","huayra-tips/config/environment"],function(e,t,a,n,r){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var s=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]});n["default"](s,r["default"].modulePrefix),e["default"]=s}),define("huayra-tips/initializers/app-version",["exports","huayra-tips/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,r){var s=n(r.toString());a["default"].libraries.register(s,t["default"].APP.version)}}}),define("huayra-tips/initializers/export-application-global",["exports","ember","huayra-tips/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("huayra-tips/router",["exports","ember","huayra-tips/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){this.route("index",{path:"/"}),this.resource("actualizar",{path:"/actualizar/:id"})}),e["default"]=n}),define("huayra-tips/routes/actualizar",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(e){return{nombre:e.id}}})}),define("huayra-tips/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("huayra-tips/templates/actualizar",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Handlebars.template(function(e,a,n,r,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t["default"].Handlebars.helpers),s=s||{};var i,u="";return s.buffer.push("<h1>¿Cómo actualizar "),i=n._triageMustache.call(a,"nombre",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:s}),(i||0===i)&&s.buffer.push(i),s.buffer.push("?</h1>\n\n<p>Para actualizar "),i=n._triageMustache.call(a,"nombre",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:s}),(i||0===i)&&s.buffer.push(i),s.buffer.push(" tienes que seguir\n   estos pasos</p>\n\n\n<p>Abrir el terminal</p>\n\n<p>Luego ejecutá los siguientes comandos</p>\n\n\n\n<pre>\n  sudo apt-get update\n\n  sudp apt-get install "),i=n._triageMustache.call(a,"nombre",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:s}),(i||0===i)&&s.buffer.push(i),s.buffer.push("\n</pre>\n\n"),i=n._triageMustache.call(a,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:s}),(i||0===i)&&s.buffer.push(i),s.buffer.push("\n"),u})}),define("huayra-tips/templates/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Handlebars.template(function(e,a,n,r,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t["default"].Handlebars.helpers),s=s||{};var i,u="";return i=n._triageMustache.call(a,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:s}),(i||0===i)&&s.buffer.push(i),s.buffer.push("\n"),u})}),define("huayra-tips/templates/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Handlebars.template(function(e,a,n,r,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,t["default"].Handlebars.helpers),s=s||{};var i,u="";return s.buffer.push("<h1>huayra tips</h1>\n\n<p>\n  Este sitio es de uso interno, nos permite documentar\n  el proceso de actualización del sistema y sus\n  aplicaciones.\n</p>\n\n"),i=n._triageMustache.call(a,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["ID"],data:s}),(i||0===i)&&s.buffer.push(i),s.buffer.push("\n"),u})}),define("huayra-tips/config/environment",["ember"],function(e){var t="huayra-tips";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(s){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("huayra-tips/tests/test-helper"):require("huayra-tips/app")["default"].create({name:"huayra-tips",version:"0.0.0.e56181c7"});