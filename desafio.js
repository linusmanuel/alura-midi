const telScreen = document.querySelector('#tel');
const listKeyboard = document.querySelectorAll('.keyboard');
const validIds = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'zero',
	'hash',
	'asterisk',
];

const writeNumber = (idElement) => {
	const telButton = document.querySelector(`.${idElement}`);
	telScreen.value += telButton.value;
};

for (let count = 0; count < listKeyboard.length; count++) {
	const keyboard = listKeyboard[count];
	const idKeyboard = keyboard.classList[1];

	keyboard.addEventListener('click', () => {
		if (!validIds.includes(idKeyboard)) {
			alert(`ID inválido, ID: ${idKeyboard}`);
		}
		writeNumber(idKeyboard);
	});

	keyboard.onkeydown = () => keyboard.classList.add('ativa');
	keyboard.onkeyup = () => keyboard.classList.remove('ativa');
}
