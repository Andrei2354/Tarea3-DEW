const boton = document.querySelector("button");
const imagenOrdenada = [
  "tarea_part_1_1.jpeg", "tarea_part_1_2.jpeg", "tarea_part_1_3.jpeg",
  "tarea_part_2_1.jpeg", "tarea_part_2_2.jpeg", "tarea_part_2_3.jpeg",
  "tarea_part_3_1.jpeg", "tarea_part_3_2.jpeg"
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function cambiarImagen() {
  const imagenDesordenada = shuffle(imagenOrdenada);
  for (let i = 1; i <= imagenDesordenada.length; i++) {
    const celda = document.getElementById(i);
    const img = celda.querySelector("img");
    img.src = imagenDesordenada[i - 1];
  }
}

boton.addEventListener("click", cambiarImagen);

const vecinos = {
  1: [2, 4],
  2: [1, 3, 5],
  3: [2, 6],
  4: [1, 5, 7],
  5: [2, 4, 6, 8],
  6: [3, 5, 9],
  7: [4, 8],
  8: [5, 7, 9],
  9: [6, 8]
};

function cambiar(tdElement) {
  const todasCeldas = document.querySelectorAll("td");

  // Encontrar la celda blanca
  let celdaBlanca = null;
  todasCeldas.forEach(td => {
    const img = td.querySelector("img");
    if (img.src.includes("tarea_blanca.jpeg")) {
      celdaBlanca = td;
    }
  });

  const idCelda = parseInt(tdElement.id);
  const idBlanca = parseInt(celdaBlanca.id);

  // Verificar si la celda clicada es vecina de la blanca
  if (vecinos[idBlanca].includes(idCelda)) {
    const img1 = tdElement.querySelector("img");
    const img2 = celdaBlanca.querySelector("img");
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;
  }
}
