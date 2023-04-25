const telScreen = document.querySelector('#tel');
const listKeyboard = document.querySelectorAll('.keyboard');

const writeNumber = (idElement) => {
	const telButton = document.querySelector(`.${idElement}`);
	telScreen.value += telButton.value;
	const telNumber = [];
	console.log(telNumber);

	return telNumber.push(telScreen.value);
};

for (let count = 0; count < listKeyboard.length; count++) {
	const keyboard = listKeyboard[count];
	const idKey = keyboard.classList[1];

	keyboard.onclick = () => {
		writeNumber(idKey);
	};
}
