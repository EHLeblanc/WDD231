function displayObj(obj, parentElement) {
    for (var key in obj) {
        var p = document.createElement("p");
        p.innerHTML = obj[key];
        parentElement.appendChild(p);
    }
}

displayObj(dataObj, formSection);