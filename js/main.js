const myFormElement = document.getElementById("myForm");
const middleElement = document.getElementById("div");

myFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);

  const newColorValue = event.target[0].value;

  if (event.target[1].value) {
    middleElement.style.backgroundColor = newColorValue;
  }

  myFormElement.reset();
});
