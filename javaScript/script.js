const text = "Desarrollador web";
const typingElement = document.getElementById("especialidad");

let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      type();
    }, 1500);
  }
}

type();