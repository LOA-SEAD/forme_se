function shuffle(str) {
	return str.split('').sort(function(){return 0.5-Math.random()}).join('');
}

function length(str){
	return str.length;
}
