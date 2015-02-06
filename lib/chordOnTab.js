stringWithScale = {
	0: [4, 5, 6, 7, 8],
	1: [0, 1, 9, 10, 11],
	2: [2, 3, 4, 5, 6],
	3: [7, 8, 9, 10, 11],
	4: [0, 1, 2, 3, 4, 11],
	5: [4, 5, 6, 7, 8],
};

function determineValidChordAtTab(formulaTones, chordAtTab, ValidChordsAtTAb) {
	for(string_i = 0; string_i < 6 - formulaTones.length; string_i++) {
		if(chordAtTab[string_i] == formulaTones[0]) {
			allTones = new Set();
			chordAtTab.forEach(function(tone){
				if(typeof tone != 'undefined' && tone != 'x') {
					allTones.add(tone);
				}
			});
			if(allTones.size == formulaTones.length) {
				//console.log(chordAtTab);
				vaildChordsAtTAb.add(chordAtTab.slice());
			}
		}
		chordAtTab[string_i] = 'x';
	}
}

function computeFormulaOnTab(formulaTones) {
	chordsAtTab = [];
	stringWithChordScale = {};
	isChordsAtTbaZero = true;
	for(string_i = 0; string_i < 6; string_i++){
		chordsAtTabTmp = [];
		if(chordsAtTab.length > 0 ) {
			isChordsAtTbaZero = false;
			chordsAtTabTmp = chordsAtTab;
			chordsAtTab = [];
		}
		for(tone_i = 0; tone_i < formulaTones.length; tone_i++) {
			//add all probbility vaild tones at string
			if(stringWithScale[string_i].indexOf(formulaTones[tone_i]) >= 0) {
				if(isChordsAtTbaZero) {
					chordAtTab = [];
					chordAtTab[string_i] = formulaTones[tone_i];
					chordsAtTab.push(chordAtTab);
				} else {
					chordsAtTabTmp.forEach(function(chordAtTabTmp){
						chordAtTab = chordAtTabTmp.slice();
						chordAtTab[string_i] = formulaTones[tone_i];
						chordsAtTab.push(chordAtTab);
					});
				}
			}
		}
	}
	validChordsAtTAb = new Set();;
	console.log(chordsAtTab);
	//chordsAtTab.forEach(function(chordAtTab){
	//	determineValidChordAtTab(formulaTones, chordAtTab, vaildChordsAtTAb);
	//});
	//console.log(vaildChordsAtTAb);
};