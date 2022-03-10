let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let input = document.querySelector(".form")

function Productos(nombre, stock, precio, descuento) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.descuento = descuento;
}

class propiedad {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    infoProp() {
        return `
       <p class="parrafo-js"> seleccionaste la propiedad: ${this.nombre}</p>
         <p class="parrafo-js"> el precio es de: ${this.precio} <br> </p>`
    }
}

let departamento = new propiedad("departamento", "$15000")
let casa = new propiedad("casa", "$30000")
let ph = new propiedad("ph", "$17000")

btn1.addEventListener("click", () => {
    let terminos = document.querySelector(".terminos")
    const item = document.createElement("li")
    item.innerHTML = departamento.infoProp()
    terminos.appendChild(item);
})
btn2.addEventListener("click", () => {
    let terminos = document.querySelector(".terminos")
    const item = document.createElement("li")
    item.innerHTML = casa.infoProp()
    terminos.appendChild(item);
})
btn3.addEventListener("click", () => {
    let terminos = document.querySelector(".terminos")
    const item = document.createElement("li")
    item.innerHTML = ph.infoProp()
    terminos.appendChild(item);
})

input.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre = document.querySelector(".nombre")
    let apellido = document.querySelector(".apellido")
    console.log(`
    nombre: ${nombre.value}
    apellido: ${apellido.value}`)
})