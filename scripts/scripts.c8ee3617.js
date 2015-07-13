"use strict";angular.module("knobyApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("knobyApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("knobyApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("knobyApp").factory("d3",["$document","$q","$window",function(a,b,c){var d=b.defer();return a.ready(function(){d.resolve(c.d3)}),d.promise}]),angular.module("knobyApp").directive("simpleLineChart",["d3",function(a){return{restrict:"EA",scope:{},link:function(b,c){a.then(function(a){var d={top:20,right:20,bottom:30,left:50},e=600-d.left-d.right,f=700-d.top-d.bottom,g=a.time.format("%d-%b-%y").parse,h=a.time.scale().range([0,e]),i=a.scale.linear().range([f,0]),j=a.svg.axis().scale(h).orient("bottom"),k=a.svg.axis().scale(i).orient("left"),l=a.svg.line().x(function(a){return h(a.date)}).y(function(a){return i(a.close)}),m=a.select(c[0]).append("svg").attr("width",e+d.left+d.right).attr("height",f+d.top+d.bottom).append("g").attr("transform","translate("+d.left+","+d.top+")");b.data=[{date:"4-Apr-12",close:34},{date:"5-Apr-12",close:45},{date:"6-Apr-12",close:37},{date:"7-Apr-12",close:56},{date:"8-Apr-12",close:50},{date:"9-Apr-12",close:77}],b.data.forEach(function(a){a.date=g(a.date),a.close=+a.close}),h.domain(a.extent(b.data,function(a){return a.date})),i.domain(a.extent(b.data,function(a){return a.close})),m.append("g").attr("class","x axis").attr("transform","translate(0,"+f+")").call(j),m.append("g").attr("class","y axis").call(k).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Price ($)"),m.append("path").datum(b.data).attr("class","line").attr("d",l)})}}}]),angular.module("knobyApp").factory("three",["$document","$q","$window",function(a,b,c){var d=b.defer();return a.ready(function(){d.resolve(c.THREE)}),d.promise}]),angular.module("knobyApp").directive("simpleCubeScene",["three",function(a){return{template:"<div></div>",restrict:"EA",scope:{width:"&width",height:"&height"},link:function(b,c){var d={width:b.width()||1e3,height:b.height()||1e3};a.then(function(a){var b=new a.Scene,e=new a.PerspectiveCamera(35,d.width/d.height,.1,1e3),f=new a.WebGLRenderer({antialias:!0});f.setPixelRatio(window.devicePixelRatio),c.append(f.domElement);var g=new a.BoxGeometry(1,1,1),h=new a.MeshBasicMaterial({color:60928}),i=new a.Mesh(g,h);b.add(i),e.position.z=5;var j=function(){requestAnimationFrame(j),i.rotation.x+=.01,i.rotation.y+=.01,f.render(b,e)};j()})}}}]),angular.module("knobyApp").factory("raphael",["$document","$q","$window",function(a,b,c){var d=b.defer();return a.ready(function(){d.resolve(c.Raphael)}),d.promise}]),angular.module("knobyApp").factory("knobs",[function(){function a(a,b,c){var d=this;this.destroy=function(){a.undrag()},this.onMove=function(a,b){this.attr({cx:Math.max(d.x+a,15),cy:Math.max(d.y+b,15)})},this.onStart=function(){return d.x=this.attr("cx"),d.y=this.attr("cy"),angular.isFunction(b)?b.call(this):void 0},a.drag(this.onMove,this.onStart,function(){this.animate({ms:800,easing:"bounce",r:100,"stroke-width":10}),c.call(this)})}function b(a,b){b.hide(),a.hover(function(){b.show()},function(){b.hide()}),this.destroy=function(){b.remove()}}function c(a){this.clazz=["kby-factory",a].join(" ")}function d(a,b){this.attach(a,b)}function e(a,b){this.attach(a,b)}function f(a,b){this.attach(a,b)}function g(a){if(!a)throw new ReferenceError;this.view=a,angular.element(a.node).attr("class","kby-condition")}function h(a){if(!a)throw new ReferenceError;this.view=a,angular.element(a.node).attr("class","kby-command")}function i(a){if(!a)throw new ReferenceError;this.view=a,angular.element(a.node).attr("class","kby-destination")}return a.prototype={},a.prototype.constructor=a,b.prototype={},b.prototype.constructor=b,c.prototype={},c.prototype.constructor=c,c.prototype.generate=function(a,b,c){var d=new a(b);return angular.isFunction(c)?c.call(d):d},c.prototype.attach=function(c,d){if(!c)throw new ReferenceError;this.view=c,angular.element(c.node).attr("class",this.clazz),this.glow=c.glow(),this.hoverer=new b(this.view,this.glow);var e=this;this.onDragEnd=function(){return e.dragster.destroy(),e.hoverer.destroy(),e.generate(e.producer,this,d)},this.onDragStart=function(){var a=e.generate(e.constructor,this.clone());return angular.element(this.node).attr("class",""),a},this.dragster=new a(this.view,e.onDragStart,e.onDragEnd)},d.prototype=new c("kby-condition"),d.prototype.constructor=d,d.prototype.producer=g,e.prototype=new c("kby-command"),e.prototype.constructor=e,e.prototype.producer=h,f.prototype=new c("kby-destination"),f.prototype.constructor=f,f.prototype.producer=i,g.prototype={clazz:"kby-condition"},g.prototype.constructor=g,h.prototype={clazz:"kby-command"},h.prototype.constructor=h,i.prototype={clazz:"kby-destination"},i.prototype.constructor=i,{ConditionsFactoryController:d,CommandsFactoryController:e,DestinationsFactoryController:f}}]),angular.module("knobyApp").directive("simpleKnob",["raphael","knobs",function(a,b){return{template:!1,restrict:"E",link:function(c,d){a.then(function(a){var c=angular.element(d).parent()[0],e=a(c,"100%","100%"),f=[],g=[];new b.ConditionsFactoryController(e.circle(32,32,20),function(a){f.push(a)}),new b.CommandsFactoryController(e.circle(c.offsetWidth/2,32,20),function(a){g.push(a)}),new b.DestinationsFactoryController(e.circle(c.offsetWidth-62,32,20),function(a){g.push(a)})})}}}]);