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
}
