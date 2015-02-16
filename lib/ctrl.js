angular.module("noobGuitarChords", [])
	.controller("chordsCtrl", function($scope) {
		var inputInfo = {};
		$scope.names = [ 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];
		$scope.types = [ {'text': 'major, maj, M', 'value': 'maj'},
						 {'text': 'minor, min, m', 'value': 'min'},
						 {'text': 'augmented, aug', 'value': 'aug'},
						 {'text': 'diminished, dim', 'value': 'dim'},
						 {'text': 'half-diminished, half-dim', 'value': 'half-diminished'},
						 {'text': 'minor major, m maj, mM', 'value': 'mM'},
						 {'text': 'augmented major', 'value': 'augmented major'},
						 {'text': 'dominant', 'value': 'dom'}];

		$scope.toneNum = [ 3, 7 ];
		$scope.chordNames = [];
		$scope.formulaTones = [];
		$scope.formulaNames = [];
		$scope.allStringWithFret = [];

		$scope.$watch("selectName", function(name) {
			inputInfo.name = name;
			computeChordInfo(inputInfo);
		});
		$scope.$watch("selectType", function(type) {
			if(type) {
				inputInfo.type = type.value;
			} else {
				if(inputInfo.type) {
					delete inputInfo.type;
				}
			}
			computeChordInfo(inputInfo);
		});
		$scope.$watch("selectToneNum", function(toneNum) {
			if(toneNum) {
				inputInfo.toneNum = toneNum;
			} else {
				delete inputInfo.toneNum;
			}
			computeChordInfo(inputInfo);
		});

		function computeChordInfo(inputInfo) {
			if(inputInfo.name) {
				try {
					chordInfo = computeFormulaTones(inputInfo);
					$scope.chordNames = chordInfo.chordNames;
					$scope.formulaTones = chordInfo.formulaTones;
					$scope.formulaNames = chordInfo.formulaNames;
					$scope.allStringWithFret = computeFormulaOnTab(chordInfo.formulaTones);
				} catch (e){
					$scope.chordNames = ['無此和弦名稱'];
					$scope.formulaNames = ["無此和弦組合音"];
					$scope.allStringWithFret = [];
				}
			} else {
				$scope.formulaTones = [];
				$scope.formulaNames = [];
				$scope.allStringWithFret = [];
			}
		}
	} );