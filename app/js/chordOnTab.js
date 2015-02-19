stringWithScale = {
	0: [4, 5, 6, 7, 8],
	1: [9, 10, 11, 0, 1],
	2: [2, 3, 4, 5, 6],
	3: [7, 8, 9, 10, 11],
	4: [11, 0, 1, 2, 3],
	5: [4, 5, 6, 7, 8],
};

function chordOnTabToStringWithFret(formulaTones, chordOnTab, allStringWithFret) {
	for(string_i = 0; string_i < 6 - formulaTones.length; string_i++) {
		if(chordOnTab[string_i] == formulaTones[0]) {
			var allTones = new Set();
			chordOnTab.forEach(function(tone){
				if(typeof tone != 'undefined' && tone != -1) {
					allTones.add(tone);
				}
			});
			//determined this chordOnTab is valid or not
			if(allTones.size == formulaTones.length) {
				var newStringWithFret = [];
				chordOnTab.forEach(function(tone, index){
					fretNo = stringWithScale[index].indexOf(tone) != -1 ? 
								stringWithScale[index].indexOf(tone) : 'x';
					newStringWithFret[index] = fretNo; 
				});
				//determined chord is duplicate or not
				var isDuplicate = false;
				isDuplicate = allStringWithFret.some(function(stringWithFret){
					var isSame = false;
					isSame = stringWithFret.every(function(fret, string){
						return newStringWithFret[string] == fret;
					});
					return isSame;
				});
				if(!isDuplicate) {
					allStringWithFret.push(newStringWithFret);
				}
			}
		}
		chordOnTab[string_i] = -1;
	}
}

function computeFormulaOnTab(formulaTones) {
	var chordsOnTab = [];
	var stringWithChordScale = {};
	var isChordsAtTabEmpty = true;
	for(string_i = 0; string_i < 6; string_i++){
		var chordsOnTabTmp = [];
		if(chordsOnTab.length > 0 ) {
			isChordsAtTabEmpty = false;
			chordsOnTabTmp = chordsOnTab;
			chordsOnTab = [];
		}
		for(tone_i = 0; tone_i < formulaTones.length; tone_i++) {
			//add all probbility vaild tones at string
			if(stringWithScale[string_i].indexOf(formulaTones[tone_i]) >= 0) {
				if(isChordsAtTabEmpty) {
					var chordOnTab = [];
					chordOnTab[string_i] = formulaTones[tone_i];
					chordsOnTab.push(chordOnTab);
				} else {
					chordsOnTabTmp.forEach(function(chordOnTabTmp){
						chordOnTab = chordOnTabTmp.slice();
						chordOnTab[string_i] = formulaTones[tone_i];
						chordsOnTab.push(chordOnTab);
					});
				}
			}
		}
	}
	var allStringWithFret = [];
	chordsOnTab.forEach(function(chordOnTab){
		chordOnTabToStringWithFret(formulaTones, chordOnTab, allStringWithFret);
	});
	return allStringWithFret;
};