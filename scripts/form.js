const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#rPassword");
const message = document.querySelector("#formmessage");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pass1.value !== pass2.value) {
		message.textContent = "❗Passwords do not match, please enter the password again!";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
        pass1.value ="";
		pass2.value = "";
		pass1.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}