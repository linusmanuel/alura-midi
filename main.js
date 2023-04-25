const playSound = (idElementAudio) => {
	document.querySelector(idElementAudio).play();
};

const listOfKeyboard = document.querySelectorAll('.tecla');

let count = 0;
while (count < listOfKeyboard.length) {
	listOfKeyboard[count].onclick = function () {
		playSound('#som_tecla_pom');
	};
	count++;
}
