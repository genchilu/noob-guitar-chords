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
		name = twelveTonesScale2Name[formulaTones[i]];
		formulaNames.push(name);
	}
	return formulaNames;
}

function computeFormulaTones(opt) {
	var name = opt.name;
	var type;
	var toneNum;
	if(!opt.toneNum && !opt.type) {
		type = 'maj';
		toneNum = 3;
	} else if (!opt.toneNum) {
		if(opt.type == 'half-diminished' || opt.type == 'mM') {
			toneNum = 7;
		} else {
			toneNum = 3;
		}
		type = opt.type;
	} else if(!opt.type) {
		if(opt.toneNum == 3) {
			type = 'maj';
		}
		toneNum = opt.toneNum;
	}
	//Major chord
	root = twelveTonesName2Scale[name];
	var chordNames = [];
	var formulaTones;
	var formulaNames
	if(type == 'maj') {
		//third
		if(toneNum == 3) {
			chordNames.push(name);
			chordNames.push(name + 'maj');
			formulaTones = [root, (root + 4) % 12, (root + 7) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//7th
		else if(toneNum == 7) {
			chordNames.push(name + 'M7');
			chordNames.push(name + 'maj7');
			formulaTones = [root, (root + 4) % 12, (root + 7) % 12, (root + 11) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw 'unkanow chord';
		}
	}
	//minor chord
	else if(type == 'min') {
		//third
		if(toneNum == 3) {
			chordNames.push(name + 'min');
			formulaTones = [root, (root + 3) % 12, (root + 7) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//7th
		else if(toneNum == 7) {
			chordNames.push(name + 'm7');
			chordNames.push(name + 'min7');
			formulaTones = [root, (root + 3) % 12, (root + 7) % 12, (root + 10) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw 'unkanow chord'
		}
	}
	//augmented
	else if(type == "aug") {
		//third
		if(toneNum == 3) {
			chordNames.push(name + 'aug');
			formulaTones = [root, (root + 4) % 12, (root + 8) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//7th
		if(toneNum == 7) {
			chordNames.push(name + 'aug7');
			formulaTones = [root, (root + 4) % 12, (root + 8) % 12, (root + 10) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//diminished
	else if(type == "dim") {
		//third
		if(toneNum == 3) {
			chordNames.push(name + 'dim');
			formulaTones = [root, (root + 3) % 12, (root + 6) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//7th
		if(toneNum == 7) {
			chordNames.push(name + 'dim7');
			formulaTones = [root, (root + 3) % 12, (root + 6) % 12, (root + 9) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//Half-diminished
	else if(type == "half-diminished") {
		//7th
		if(toneNum == 7) {
			chordNames.push(name + 'm7b5');
			formulaTones = [root, (root + 3) % 12, (root + 6) % 12, (root + 10) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//minor-major seventh chord
	else if(type == 'mM'){
		if(toneNum == 7) {
			chordNames.push(name + 'mM7');
			chordNames.push(name + 'm maj7');
			formulaTones = [root, (root + 3) % 12, (root + 7) % 12, (root + 11) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	//Dominant 
	else if(!type) {
		if(toneNum == 7) {
			chordName.push(name + '7');
			chordName.push(name + 'dom7');
			formulaTones = [root, (root + 4) % 12, (root + 7) % 12, (root + 10) % 12];
			formulaNames = formulaTonesToName(formulaTones);
		}
		//throw exception
		else {
			throw "unkanow chord"
		}
	}
	return {
		'chordNames': chordNames,
		'formulaTones': formulaTones,
		'formulaNames' : formulaNames
	};
}