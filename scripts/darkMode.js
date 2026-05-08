const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cardClass=document.querySelectorAll(".card");
const linkClass=document.querySelectorAll(".links");
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
        cardClass.forEach(element => {
            element.style.border="3px solid white";
            element.style.color="white";
        })
        linkClass.forEach(element => {
            element.style.color="white";
        })

	} else {
		main.style.background = "white";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
        cardClass.forEach(element => {
            element.style.border="3px solid black";
            element.style.color="black";
        })
        linkClass.forEach(element => {
            element.style.color="black";
        })
	}
});