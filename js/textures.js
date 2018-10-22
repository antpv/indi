const maps = [
	`UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUTTTTTTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUTTTTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUUUUUUTTTTTTPTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUUTTTTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUTTTMMMMMMMMMMMMTTTUUUUUUUUUUUUUUUUUUUUUTTTTMMMMMMMMMMMMTTTTUUUUUUUUUUUUUUUUUUUUTTTTMEEEEEEEEEEMTTTTUUUUUUUUUUUUUUUUUUUTTTTTMEEEEEEEEEEMTTTTUUUUUUUUUUUUUUUUUUUTTTTTMEEEEEEEEEEMTTTTUUUUUUUUUUUUUUUUUUTTPTTTMEEEEEEEEEEMTTTTTUUUUUUUUUEEUUUUUUTTTTTTMEEEEEEEEEEMTTTTTUUUUUUUUUEEEUUUUUUTTTTTMEEEEEEEEEEMTTTTTUUUUUUUUUEEOUUUUUUTTTTTMMMMMMEMMMMMTTPTTUUUUUUUUEEEEEUUUUUUTTPTMMMMMMIMMMMMTTTTUUUUUUUUEEOEEEUUUUUUTTTTTTTTTTTTTTTTTTTUUUUUUUUUEEEEEEUUUUUUUTTTTTTTTTTTTTTTTTUUUUUUUUUUEOEEEUUUUUUUUUTTTTTTTTTPTTTUUUUUUUUUUUUEEEWWUUUUUUUUUUUTTTTTTTTTTUUUUUUUUUUUUUUEEEGGQUUUUUUUUUUUUTTTTUUUUUUUUUUUUUUUUUUUEEGGGQUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUHGGGQUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUHJGGGQUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUHHHGGQUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU`
]

const textures = {
	'B': {
		class: 'b',
		passable: false,
		image: getImage('css/textures/1.png')
	},
	'N': {
		class: 'n',
		passable: false,
		image: getImage('css/textures/2.png')
	},
	'M': {
		class: 'm',
		passable: false,
		image: getImage('css/textures/3.png')
	},
	'Z': {
		class: 'z',
		passable: false,
		image: getImage('css/textures/4.png')
	},
	'D': {
		class: 'd',
		passable: false,
		image: getImage('css/textures/5.png')
	},
	'S': {
		class: 's',
		passable: false,
		image: getImage('css/textures/6.png')
	},
	'G': {
		class: 'g',
		passable: true,
		image: getImage('css/textures/7.png')
	},
	'H': {
		class: 'h',
		passable: true,
		image: getImage('css/textures/8.png')
	},
	'J': {
		class: 'j',
		passable: false,
		image: getImage('css/textures/9.png')
	},
	'Q': {
		class: 'q',
		passable: true,
		image: getImage('css/textures/10.png')
	},
	'W': {
		class: 'w',
		passable: true,
		image: getImage('css/textures/11.png')
	},
	'E': {
		class: 'e',
		passable: true,
		image: getImage('css/textures/12.png')
	},
	'R': {
		class: 'r',
		passable: true,
		image: getImage('css/textures/13.png')
	},
	'T': {
		class: 't',
		passable: true,
		image: getImage('css/textures/14.png')
	},
	'Y': {
		class: 'y',
		passable: true,
		image: getImage('css/textures/15.png')
	},
	'U': {
		class: 'u',
		passable: true,
		image: getImage('css/textures/16.png')
	},
	'I': {
		class: 'i',
		passable: true,
		image: getImage('css/textures/17.png')
	},
	'O': {
		class: 'o',
		passable: true,
		image: getImage('css/textures/18.png')
	},
	'P': {
		class: 'p',
		passable: true,
		image: getImage('css/textures/19.png')
	},
	'L': {
		class: 'l',
		passable: true,
		image: getImage('css/textures/20.png')
	},
	'@': {
		class: 'empty',
		passable: true
	}
};

let texturesLength = 0;
let loaded = 0;

var event = new Event("texturesLoaded", {
	bubbles: true,
	cancelable: true
  });

for (let key in textures) {
	if (textures[key].image) {
		texturesLength++;

		textures[key].image.addEventListener('load', function() {
			loaded++;

			checkLoad()
		})
	}
}

function checkLoad() {
	if (texturesLength == loaded) document.dispatchEvent(event);
}

function getImage(url) {	
	const img = new Image();
	img.src = url;

	return img;
}