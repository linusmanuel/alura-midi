const playSoundPom = () => {
	const somPom = document.querySelector('#som_tecla_pom');
	somPom.play();
};

const listOfKeyboard = document.querySelectorAll('.tecla');

listOfKeyboard[0].onclick = playSoundPom;
