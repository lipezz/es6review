function* someGenerator(){
    var x = 0;

	for(let i=0; i<10; i++){
		yield x++;
	}
}

var gen = someGenerator();

//gen.next();
gen.next();

console.log(gen.next().value);