const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (hamButton && navigation) {
	hamButton.addEventListener('click', () => {
		navigation.classList.toggle('open');
		hamButton.classList.toggle('open');
	});
}

// get current year
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
	currentYearElement.innerText = new Date().getFullYear();
}