angular.module("noobGuitarChords", [])
	.controller("chordsCtrl", function($scope) {
		var chord = {};
		$scope.names = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
		$scope.types = [ 'maj', 'm', 'aug', 'dim'];
		$scope.toneNum = [ 3, 7 ];

		$scope.$watch("selectName", function(name) {
			chord.name = name;
			if(chord.name) {
				$scope.formulaTones = computeFormulaTones(chord);
				$scope.formulaNames = formulaTonesToName($scope.formulaTones);
			} else {
				$scope.formulaTones = [];
				$scope.formulaNames = [];
			}
		});
		$scope.$watch("selectType", function(type) {
			chord.type = type;
			if(chord.name) {
				$scope.formulaTones = computeFormulaTones(chord);
				$scope.formulaNames = formulaTonesToName($scope.formulaTones);
			} else {
				$scope.formulaTones = [];
				$scope.formulaNames = [];
			}
		});
		$scope.$watch("selectToneNum", function(toneNum) {
			chord.toneNum = toneNum;
			if(chord.name) {
				$scope.formulaTones = computeFormulaTones(chord);
				$scope.formulaNames = formulaTonesToName($scope.formulaTones);
			} else {
				$scope.formulaTones = [];
				$scope.formulaNames = [];
			}
		});
	} );