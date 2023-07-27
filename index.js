const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const ulList = document.querySelector(".lista");
  const liEl = ulList.querySelectorAll("li");

  for (let i = 0; i < liEl.length; i++) {
    ulList.removeChild(liEl[i]);
  }

  cosasQueAprendimos.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.textContent = element.tema;
    newLi.className = element.class;
    ulList.appendChild(newLi);
  });
}

main();
