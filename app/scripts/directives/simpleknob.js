'use strict';

/**
 * @ngdoc directive
 * @name knobyApp.directive:simpleKnob
 * @description
 * # simpleKnob
 */
angular.module('knobyApp')
  .directive('simpleKnob', ['raphael', 'factories', function (raphaelService, knobsFactory) {


    return {
      template: false,
      restrict: 'E',
      link: function (scope, element) {

        raphaelService.then(function (raphael) {

          // Creates canvas
          var parent = angular.element(element).parent()[0];
          var paper = raphael(parent, '100%', '100%');

          var conditions = [];
          var commands = [];

          // Creates the 'menu' circles for conditions, commands, and destinations
          var conditionsFactory = new knobsFactory.ConditionsFactoryController(
            paper.circle(32, 32, 20), function (cond) {
              conditions.push(cond);
            });

          var commandsFactory = new knobsFactory.CommandsFactoryController(
            paper.circle(parent.offsetWidth / 2, 32, 20), function (cond) {
              commands.push(cond);
            });

          var destinationsFactory = new knobsFactory.DestinationsFactoryController(
            paper.circle(parent.offsetWidth - 62, 32, 20), function (cond) {
              commands.push(cond);
            });

          [].push(conditionsFactory, commandsFactory, destinationsFactory);

          // Creates circle
          //var circle = paper.circle(320, 200, 100);

          // Sets the fill attribute of the circle to red (#f00)
          //circle.attr('fill', '#f00');

          // Sets the stroke attribute of the circle to white
          //circle.attr('stroke', '#f00');
          //circle.attr('stroke-width', '20');
          //circle.attr('stroke-dasharray', ['', '-']);

          //circle.dblclick(function () {
          //  options.draw = (Array.isArray(options.draw) && options.draw.indexOf('bbox') >= 0)
          // ? [null, null] : [null, 'bbox']; options.drag = (Array.isArray(options.drag) &&
          // options.drag.indexOf('self') >= 0) ? [null, null] : [null, 'self']; options.rotate
          // = (Array.isArray(options.rotate) && options.rotate.indexOf('self') >= 0) ? [null,
          // null, null] : [null, null, 'self']; paper.freeTransform(circle).setOpts(options,
          // function () { }); });

          //var options = {
          //  //attrs: {fill: $('input[name=color]:checked').val(), stroke: 'white'},
          //  //draw: [
          //  //  $('#draw-bbox').is(':checked') ? 'bbox' : null,
          //  //  $('#draw-circle').is(':checked') ? 'circle' : null
          //  //],
          //  //distance: $('input[name=distance]:checked').val(),
          //  //drag: [
          //  //  $('#drag-center').is(':checked') ? 'center' : null,
          //  //  $('#drag-self').is(':checked') ? 'self' : null
          //  //],
          //  drag: [null, 'self'],
          //  //keepRatio: [
          //  //  $('#keepratio-axisx').is(':checked') ? 'axisX' : null,
          //  //  $('#keepratio-axisy').is(':checked') ? 'axisY' : null,
          //  //  $('#keepratio-bboxcorners').is(':checked') ? 'bboxCorners' : null,
          //  //  $('#keepratio-bboxsides').is(':checked') ? 'bboxSides' : null
          //  //],
          //  //range: {
          //  //  rotate: $('input[name=range-rotate]:checked').val().split(','),
          //  //  scale: $('input[name=range-scale]:checked').val().split(',')
          //  //},
          //  //rotate: [
          //  //  $('#rotate-axisx').is(':checked') ? 'axisX' : null,
          //  //  $('#rotate-axisy').is(':checked') ? 'axisY' : null,
          //  //  $('#rotate-self').is(':checked') ? 'self' : null
          //  //],
          //  rotate: [
          //    null,
          //    null,
          //    null
          //  ],
          //  //scale: [
          //  //  $('#scale-axisx').is(':checked') ? 'axisX' : null,
          //  //  $('#scale-axisy').is(':checked') ? 'axisY' : null,
          //  //  $('#scale-bboxcorners').is(':checked') ? 'bboxCorners' : null,
          //  //  $('#scale-bboxsides').is(':checked') ? 'bboxSides' : null,
          //  //  $('#scale-self').is(':checked') ? 'self' : null
          //  //],
          //  scale: [null, null, null, null],
          //  //size: $('input[name=size]:checked').val(),
          //  //snap: {
          //  //  drag: $('input[name=snap-drag]:checked').val(),
          //  //  rotate: $('input[name=snap-rotate]:checked').val(),
          //  //  scale: $('input[name=snap-scale]:checked').val()
          //  //},
          //  //snapDist: {
          //  //  drag: $('input[name=snapdist-drag]:checked').val(),
          //  //  rotate: $('input[name=snapdist-rotate]:checked').val(),
          //  //  scale: $('input[name=snapdist-scale]:checked').val()
          //  //}
          //};

          //paper.freeTransform(circle).setOpts(options, function () {
          //});
        });
      }
    };
  }]);


//function blah() {
//
//  var paper = Raphael('holder');
//
//  var elements = [];
//
//  var path =
// 'M27.777,18.941c0.584-0.881,0.896-1.914,0.896-2.998c0-1.457-0.567-2.826-1.598-3.854l-6.91-6.911l-0.003,0.002c-0.985-0.988-2.35-1.6-3.851-1.6c-1.502,0-2.864,0.612-3.85,1.6H12.46l-6.911,6.911c-1.031,1.029-1.598,2.398-1.598,3.854c0,1.457,0.567,2.826,1.598,3.854l6.231,6.229c0.25,0.281,0.512,0.544,0.789,0.785c1.016,0.961,2.338,1.49,3.743,1.49c1.456,0,2.825-0.565,3.854-1.598l6.723-6.725c0.021-0.019,0.034-0.032,0.051-0.051l0.14-0.138c0.26-0.26,0.487-0.54,0.688-0.838c0.004-0.008,0.01-0.015,0.014-0.021L27.777,18.941zM26.658,15.946c0,0.678-0.197,1.326-0.561,1.879c-0.222,0.298-0.447,0.559-0.684,0.784L25.4,18.625c-1.105,1.052-2.354,1.35-3.414,1.35c-0.584,0-1.109-0.09-1.523-0.195c-2.422-0.608-5.056-2.692-6.261-5.732c0.649,0.274,1.362,0.426,2.11,0.426c2.811,0,5.129-2.141,5.415-4.877l3.924,3.925C26.301,14.167,26.658,15.029,26.658,15.946zM16.312,5.6c1.89,0,3.426,1.538,3.426,3.427c0,1.89-1.536,3.427-3.426,3.427c-1.889,0-3.426-1.537-3.426-3.427C12.886,7.138,14.423,5.6,16.312,5.6zM6.974,18.375c-0.649-0.648-1.007-1.512-1.007-2.429c0-0.917,0.357-1.78,1.007-2.428l2.655-2.656c-0.693,2.359-0.991,4.842-0.831,7.221c0.057,0.854,0.175,1.677,0.345,2.46L6.974,18.375zM11.514,11.592c0.583,4.562,4.195,9.066,8.455,10.143c0.693,0.179,1.375,0.265,2.033,0.265c0.01,0,0.02,0,0.027,0l-3.289,3.289c-0.648,0.646-1.512,1.006-2.428,1.006c-0.638,0-1.248-0.177-1.779-0.5l0.001-0.002c-0.209-0.142-0.408-0.295-0.603-0.461c-0.015-0.019-0.031-0.026-0.046-0.043l-0.665-0.664c-1.367-1.567-2.227-3.903-2.412-6.671C10.669,15.856,10.921,13.673,11.514,11.592';
// elements.push(paper.path(path) .translate(paper.width / 2 - 14 - 250, ( paper.height +
// $('#options').height() ) / 2 - 14) .scale(7.32) .attr({ stroke: '#39f' }));
// elements.push(paper.rect(13, 13, 116, 116, 30) .attr({ stroke: '#f89938', transform: ['R',
// 315, 'T', paper.width / 2 - 69.5 + 250, ( paper.height + $('#options').height() ) / 2 -
// 69.5] }) .scale(1.3, 1.3, 69.5, 69.5) );  var path =
// 'M129.657,71.361c0,3.812-1.105,7.451-3.153,10.563c-1.229,1.677-2.509,3.143-3.829,4.408l-0.095,0.095c-6.217,5.912-13.24,7.588-19.2,7.588c-3.28,0-6.24-0.508-8.566-1.096C81.19,89.48,66.382,77.757,59.604,60.66c3.65,1.543,7.662,2.396,11.869,2.396c15.805,0,28.849-12.04,30.446-27.429l22.073,22.072C127.645,61.351,129.657,66.201,129.657,71.361zM18.953,85.018c-3.653-3.649-5.663-8.5-5.663-13.656c0-5.16,2.01-10.011,5.661-13.656l14.934-14.935c-3.896,13.269-5.569,27.23-4.674,40.614c0.322,4.812,0.987,9.427,1.942,13.831L18.953,85.018zM44.482,46.869c3.279,25.662,23.592,50.991,47.552,57.046c3.903,0.986,7.729,1.472,11.432,1.472c0.055,0,0.107-0.005,0.161-0.005l-18.501,18.503c-3.647,3.646-8.498,5.654-13.652,5.654c-3.591,0-7.021-0.993-10.01-2.815l0.007-0.01c-1.177-0.78-2.298-1.66-3.388-2.593c-0.084-0.082-0.176-0.153-0.26-0.236l-3.738-3.738c-7.688-8.825-12.521-21.957-13.561-37.517C39.736,70.853,41.149,58.578,44.482,46.869';
// elements.push(paper.set( paper.rect(13, 13, 116, 116, 30) .attr({ stroke: 'none', fill:
// '#fff', transform: ['R', 45, 'T', paper.width / 2 - 69.5, ( paper.height +
// $('#options').height() ) / 2 - 69.5] }), paper.path(path) .attr({ fill: '#f89938', stroke:
// 'none', transform: ['T', paper.width / 2 - 69.5, ( paper.height + $('#options').height() ) / 2 - 69.5] }), paper.circle(71, 32, 19) .attr({ stroke: 'none', fill: '#39f', transform: ['T', paper.width / 2 - 69.5, ( paper.height + $('#options').height() ) / 2 - 69.5] }) ).scale(1.3, 1.3, 69.5, 69.5));  for (var i in elements) { paper.freeTransform(elements[i], {}, print); }  function print(subject, events) { if (subject) { $('#details').html( 'x: ' + subject.attrs.x.toFixed(0) + '<br/>' + 'y: ' + subject.attrs.y.toFixed(0) + '<br/>' + 'center.x: ' + subject.attrs.center.x.toFixed(0) + '<br/>' + 'center.y: ' + subject.attrs.center.y.toFixed(0) + '<br/>' + 'rotate: ' + subject.attrs.rotate.toFixed(2) + '<br/>' + 'scale.x: ' + subject.attrs.scale.x.toFixed(2) + '<br/>' + 'scale.y: ' + subject.attrs.scale.y.toFixed(2) + '<br/>' + 'size.x: ' + subject.attrs.size.x.toFixed(0) + '<br/>' + 'size.y: ' + subject.attrs.size.y.toFixed(0) + '<br/>' + 'translate.x: ' + subject.attrs.translate.x.toFixed(0) + '<br/>' + 'translate.y: ' + subject.attrs.translate.y.toFixed(0) + '<br/>' + 'items: ' + subject.items.length.toFixed(0) + '<br/>' + 'events: ' + events.join(', ') ); } }  $('#options input').change(function () { for (i in elements) { if (!elements.hasOwnProperty(i)) { continue; }  var options = { attrs: {fill: $('input[name=color]:checked').val(), stroke: 'white'}, draw: [ $('#draw-bbox').is(':checked') ? 'bbox' : null, $('#draw-circle').is(':checked') ? 'circle' : null ], distance: $('input[name=distance]:checked').val(), drag: [ $('#drag-center').is(':checked') ? 'center' : null, $('#drag-self').is(':checked') ? 'self' : null ], keepRatio: [ $('#keepratio-axisx').is(':checked') ? 'axisX' : null, $('#keepratio-axisy').is(':checked') ? 'axisY' : null, $('#keepratio-bboxcorners').is(':checked') ? 'bboxCorners' : null, $('#keepratio-bboxsides').is(':checked') ? 'bboxSides' : null ], range: { rotate: $('input[name=range-rotate]:checked').val().split(','), scale: $('input[name=range-scale]:checked').val().split(',') }, rotate: [ $('#rotate-axisx').is(':checked') ? 'axisX' : null, $('#rotate-axisy').is(':checked') ? 'axisY' : null, $('#rotate-self').is(':checked') ? 'self' : null ], scale: [ $('#scale-axisx').is(':checked') ? 'axisX' : null, $('#scale-axisy').is(':checked') ? 'axisY' : null, $('#scale-bboxcorners').is(':checked') ? 'bboxCorners' : null, $('#scale-bboxsides').is(':checked') ? 'bboxSides' : null, $('#scale-self').is(':checked') ? 'self' : null ], size: $('input[name=size]:checked').val(), snap: { drag: $('input[name=snap-drag]:checked').val(), rotate: $('input[name=snap-rotate]:checked').val(), scale: $('input[name=snap-scale]:checked').val() }, snapDist: { drag: $('input[name=snapdist-drag]:checked').val(), rotate: $('input[name=snapdist-rotate]:checked').val(), scale: $('input[name=snapdist-scale]:checked').val() } };  var callback = $('#callback').is(':checked') ? print : false;  if (!callback) { $('#details:visible') .stop() .animate({left: -40, opacity: 0}, 200, function () { $(this).hide(); }); } else { $('#details:hidden') .stop() .css({left: -40, opacity: 0}) .show() .animate({left: 40, opacity: 1}, 400) ; }  paper.freeTransform(elements[i]).setOpts(options, callback); } });  $('#options input#callback').change();  }
