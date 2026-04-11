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

document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.08,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});



type();