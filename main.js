const pom = document.querySelector('.tecla_pom');

const playSoundPom = () => {
	const somPom = document.querySelector('#som_tecla_pom');
	somPom.play();
};

pom.addEventListener('click', (e) => {
	playSoundPom();
});
