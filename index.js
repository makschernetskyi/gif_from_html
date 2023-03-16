const my_string = "🌌Hello there!🌌".split('');

const unknown = my_string[0]
const my_p = document.getElementsByTagName('p')[0]


let nextInterval = undefined;
let full = 1


const removeAllFromP = ()=>{
	nextInterval = setInterval(()=>{
		if(my_p.textContent.length==2 || full){
			my_p.textContent = my_p.textContent.slice(0, -2);
			full = 0
			return
		}
		if(my_p.textContent!='')
			my_p.textContent = my_p.textContent.slice(0, -1);
		else
			clearInterval(nextInterval)
	},100)
}


const t = setInterval(()=>{
	if (!my_string.length){
		clearInterval(t);
		removeAllFromP()
		return;
	}
	if(my_string[0]==unknown){
		my_p.textContent+=my_string.shift();
		my_p.textContent+=my_string.shift()
		return
	}
	my_p.textContent+=my_string.shift()
	return
},500)
