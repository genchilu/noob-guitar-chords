stringWithScale = {
	0: [4, 5, 6, 7, 8],
	1: [9, 10, 11, 0, 1],
	2: [2, 3, 4, 5, 6],
	3: [7, 8, 9, 10, 11],
	4: [11, 0, 1, 2, 3, 4],
	5: [4, 5, 6, 7, 8],
};

function chordOnTabToStringWithFret(formulaTones, chordOnTab, allStringWithFret) {
	for(string_i = 0; string_i < 6 - formulaTones.length; string_i++) {
		if(chordOnTab[string_i] == formulaTones[0]) {
			allTones = new Set();
			chordOnTab.forEach(function(tone){
				if(typeof tone != 'undefined' && tone != 'x') {
					allTones.add(tone);
				}
			});
			//determined this chordOn Tab is valid or not
			if(allTones.size == formulaTones.length) {
				//determined this string with fret is exist or not
				nonDuplicate = allStringWithFret.every(function(stringWithFret){
					isSame = (stringWithFret.length == chordOnTab.length) && 
								stringWithFret.every(function(fret, index) {
						return fret === stringWithScale[index].indexOf(chordOnTab[index]); 
					});
					return !isSame;
				});
				if(nonDuplicate) {
					stringWithFret = [];
					chordOnTab.forEach(function(tone, index){
						stringWithFret[index] = stringWithScale[index].indexOf(tone); 
					});
					allStringWithFret.push(stringWithFret);
				}
			}
		}
		chordOnTab[string_i] = 'x';
	}
}

function computeFormulaOnTab(formulaTones) {
	chordsOnTab = [];
	stringWithChordScale = {};
	isChordsAtTbaZero = true;
	for(string_i = 0; string_i < 6; string_i++){
		chordsOnTabTmp = [];
		if(chordsOnTab.length > 0 ) {
			isChordsAtTbaZero = false;
			chordsOnTabTmp = chordsOnTab;
			chordsOnTab = [];
		}
		for(tone_i = 0; tone_i < formulaTones.length; tone_i++) {
			//add all probbility vaild tones at string
			if(stringWithScale[string_i].indexOf(formulaTones[tone_i]) >= 0) {
				if(isChordsAtTbaZero) {
					chordOnTab = [];
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
	allStringWithFret = [];;
	chordsOnTab.forEach(function(chordOnTab){
		chordOnTabToStringWithFret(formulaTones, chordOnTab, allStringWithFret);
	});
	return allStringWithFret;
};