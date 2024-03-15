function stringChop(str, size) {
  // your code here
	let x = 0
	let arr = []
	arr.pop(str.slice(x,x+size))
	x = x +size
	if(x>str.length){
		break
	}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));