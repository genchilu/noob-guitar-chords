twelveTonesName2Scale = {
	'C'  : 0,
	'C#' : 1,
	'D'  : 2,
	'D#' : 3,
	'E'  : 4,
	'F'  : 5,
	'F#' : 6,
	'G'  : 7,
	'G#' : 8,
	'A'  : 9,
	'A#' : 10,
	'B'  : 11
};

twelveTonesScale2Name = {
	0  : 'C',
	1  : 'C#',
	2  : 'D',
	3  : 'D#',
	4  : 'E',
	5  : 'F',
	6  : 'F#',
	7  : 'G',
	8  : 'G#',
	9 : 'A',
	10 : 'A#',
	11 : 'B'
};

function formulaTonesToName(formulaTones) {
	var formulaNames = [];
	for(i = 0; i < formulaTones.length; i++) {
		name = twelveTonesScale2Name[formulaTones[i]-1];
		formulaNames.push(name);
	}
	return formulaNames;
}

function computeFormulaTones(chord) {
	if(!chord.toneNum) {
		chord.toneNum = 3;
	}
	if(chord.toneNum == 3 && !chord.type) {
		chord.type = "maj";
	}
	//Major chord
	if(chord.type == "maj") {
		//third
		if(chord.toneNum == "3") {
			root = twelveTonesName2Scale[chord.name];
			return [root + 1, ((root + 4) % 12) + 1, ((root + 7) % 12) + 1];
		}
		//7th
		else if(chord.toneNum == "7") {
			root = twelveTonesName2Scale[chord.name];
			return [root + 1, ((root + 4) % 12) + 1, ((root + 7) % 12) + 1, ((root + 11) % 12) + 1];
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//minor chord
	else if(chord.type == "m") {
		//third
		if(chord.toneNum == "3") {
		}
		//7th
		else if(chord.toneNum == "7") {
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//augmented
	else if(chord.type == "aug") {
		//third
		if(chord.toneNum == "3") {
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//diminished
	else if(chord.type == "dim") {
		//third
		if(chord.toneNum == "3") {
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//major-minor seventh chord
	else if(!chord.type){
		if(chord.toneNum == "7") {
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
}