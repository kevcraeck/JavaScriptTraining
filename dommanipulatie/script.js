function adding() {
  let input = document.getElementById("input").value;
  let newEl = document.createElement("li");
  let newEl2 = document.createElement("input");
  let newText = document.createTextNode(input);

  newEl2.setAttribute("type", "checkbox");
  newEl.appendChild(newText);
  newEl.appendChild(newEl2);

  let position = document.getElementsByTagName("ul")[0];
  position.appendChild(newEl);

  document.getElementById("input").value = "";
}

function remove() {
  let removeEl = document.getElementsByTagName("li")[0];
  let containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
}
