'use strict';

angular.module('approach', ['angularChart', 'angularCircularNavigation'])

.controller('Controller', function ($scope) {

  var rows = [
  {
    'key': 'b1298600-bbb1-45d9-a624-6371b92d2a62',
    'type': 'scatter',
    'axis': 'y',
  }, {
    'key': 'b1298600-bbb1-45d9-a624-6371b92d2a63',
    'axis': 'y',
  }, {
    'key': 'b1298600-bbb1-45d9-a624-6371b92d2a66',
    'axis': 'y',
  }, {
    'key': 'b1298600-bbb1-45d9-a624-6371b92d2a64',
    'show': false
  }, {
    'key': 'b1298600-bbb1-45d9-a624-6371b92d2a65',
    'show': false
  }];

  var xAxis = {
    'key': 'b1298600-bbb1-45d9-a624-6371b92d2a61',
    'displayFormat': '%d.%m.'
  };

  var annotation = [{
      'axis': 'x',
      'value': '10.10.2013',
      'label': 'start'
    }, {
      'axis': 'y',
      'value': 30000,
      'label': '30000'
    }];

  $scope.options = {
    'rows': rows,
    'xAxis': xAxis,
    'typeSelector': true,
    'selection': {
      'enabled': false,
      'multiple': false,
      'selected': []
    },
    'legend': {
      'selector': true
    },
    'subchart': {
      'show': false,
      'selector': true
    },
    'annotation': annotation,
    'type': 'line',
    'zoom': {}
  };

  // Chart type
  $scope.optionsChartType = {
    rows: rows,
    xAxis: {
      key: xAxis.key,
      displayFormat: xAxis.displayFormat
    },
    legend: {
      show: false
    },
    typeSelector: true
  };

  // Rows
  $scope.optionsRows = {
    rows: rows,
    xAxis: {
      key: xAxis.key,
      displayFormat: xAxis.displayFormat
    },
    legend: {
      selector: true
    }
  };

  // xAxis
  $scope.optionsXAxis = {
    rows: rows,
    xAxis: {
      key: xAxis.key,
      displayFormat: xAxis.displayFormat,
      selector: true
    },
    legend: {
      show: false
    },
    type: 'scatter'
  };
  $scope.optionsXAxis.xAxis.selector = true;

  // Zoom
  $scope.optionsZoom = {
    rows: rows,
    xAxis: {
      key: xAxis.key,
      displayFormat: xAxis.displayFormat
    },
    legend: {
      show: false
    },
    subchart: {
      show: true,
      selector: true
    },
    zoom: {
      range:['17.09.2013','12.10.2013']
    }
  };

  // annotation
  $scope.optionsAnnotations = {
    rows: rows,
    xAxis: {
      key: xAxis.key,
      displayFormat: xAxis.displayFormat
    },
    legend: {
      show: false
    },
    annotation: annotation
  };
  $scope.dataset = window.data.data;
  $scope.schema = window.data.schema;

});