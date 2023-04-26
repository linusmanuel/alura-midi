const listOfKeyboard = document.querySelectorAll('.tecla');

const playSound = (idElementAudio) => {
	document.querySelector(idElementAudio).play();
};

for (let count = 0; count < listOfKeyboard.length; count++) {
	const keyboard = listOfKeyboard[count];
	const instrument = keyboard.classList[1];
	const idAudio = `#som_${instrument}`;

	keyboard.onclick = function () {
		playSound(idAudio);
	};

	keyboard.onkeydown = (event) => {
		console.log(event);
		if (event.code === 'Space') {
			keyboard.classList.add('ativa');
		}
	};

	keyboard.onkeyup = (event) => {
		if (event.code === 'Space') keyboard.classList.remove('ativa');
	};
}
