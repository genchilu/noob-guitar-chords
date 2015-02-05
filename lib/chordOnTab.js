stringWithScale = {
	0: [4, 5, 6, 7, 8],
	1: [0, 1, 9, 10, 11],
	2: [2, 3, 4, 5, 6],
	3: [7, 8, 9, 10, 11],
	4: [0, 1, 2, 3, 4, 11],
	5: [4, 5, 6, 7, 8],
};


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
			if(stringWithScale[string_i].indexOf(formulaTones[tone_i]) >= 0) {
				if(isChordsAtTbaZero) {
					chordAtTab = [];
					chordAtTab[string_i] = formulaTones[tone_i];
					chordsAtTab.push(chordAtTab);
				} else {
					chordsAtTabTmp.forEach(function(chordAtTabTmp){
						chordAtTabTmp[string_i] = formulaTones[tone_i];
						chordsAtTab.push(chordAtTabTmp);
					});
				}
			}
		}
	}
	console.log(chordsAtTab);
};