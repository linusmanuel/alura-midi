const listOfKeyboard = document.querySelectorAll('.tecla');

const playSound = (elementAudio) => {
	const element = document.querySelector(elementAudio);
	console.log(element);
	if (element === null) alert('Elemento não encontrado');
	if (element != null && element.localName === 'audio') element.play();
};

for (let count = 0; count < listOfKeyboard.length; count++) {
	const keyboard = listOfKeyboard[count];
	const instrument = keyboard.classList[1];
	const idAudio = `#som_${instrument}`;

	keyboard.onclick = function () {
		playSound(idAudio);
	};

	keyboard.onkeydown = (event) => {
		const spaceOrEnter = event.code === 'Space' || event.code === 'Enter';
		if (spaceOrEnter) {
			keyboard.classList.add('ativa');
		}
	};

	keyboard.onkeyup = (event) => {
		const spaceOrEnter = event.code === 'Space' || event.code === 'Enter';
		if (spaceOrEnter) keyboard.classList.remove('ativa');
	};
}
