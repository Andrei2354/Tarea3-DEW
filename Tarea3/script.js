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