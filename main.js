const playSoundPom = () => {
	const somPom = document.querySelector('#som_tecla_pom');
	somPom.play();
};

const listOfKeyboard = document.querySelectorAll('.tecla');

let count = 0;
while (count < listOfKeyboard.length) {
	listOfKeyboard[count].onclick = playSoundPom;
	count++;
}
