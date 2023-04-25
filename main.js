const playSound = (idElementAudio) => {
	document.querySelector(idElementAudio).play();
};

const listOfKeyboard = document.querySelectorAll('.tecla');

let count = 0;
while (count < listOfKeyboard.length) {
	const keyboard = listOfKeyboard[count];
	const idAudio = `#som_${keyboard.classList[1]}`;
	console.log(idAudio);
	keyboard.onclick = function () {
		playSound(idAudio);
	};
	count++;
}
