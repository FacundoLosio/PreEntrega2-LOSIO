class Chofer{
    constructor(vehiculo, nombre, valorHora) {
        this.vehiculo = vehiculo;
        this.nombre  = nombre;
        this.valorHora  = valorHora;
    }
}

let chofer1 = new Chofer("camion chasis", "Facundo", 5000);
let chofer2 = new Chofer("camion semi acoplado", "Martin", 10000);
let chofer3 = new Chofer("camioneta", "Claudio", 2500);
let chofer4 = new Chofer("camion chasis", "Julian", 5000);
let chofer5 = new Chofer("camioneta", "Carlos", 2500);

let lista = [chofer1, chofer2, chofer3, chofer4, chofer5] ;


function agregarChofer(){
    let vehiculo  = prompt("¿Que vehiculo tenes?")
    let nombre = prompt("¿Como te llamas?")
    let valorHora = parseFloat(prompt("¿Que valor tiene la hora de tus servicios?"))

    let chofer = new Chofer(vehiculo, nombre, valorHora)
    lista.push(chofer)

    console.table(lista)
}


function ordenarPorValor(){
    lista.sort( (a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        return 0;
    }
    )
    console.table(lista)
}


function modificarValor (){
    let actualizado = lista.map((x) => {
        return {
            vehiculo: x.vehiculo,
            nombre: x.nombre,
            valorHora: x.valorHora * 2
        }
    })
    console.table(actualizado)
}

function buscarVehiculo(){
    let buscar = prompt("¿Que vehiculo necesitas?")
    let resultado = lista.filter((x)=>x.vehiculo.includes(buscar))
    console.table(resultado)
}

function buscarValor(){
    let valor = parseFloat(prompt("¿Que precio estas dispuesto a pagar?"))
    let resultado = lista.filter ( (x)=> (x.valorHora == valor) )
    console.table(resultado)
}