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


iniciar()


function iniciar () {
    
    let inicio = prompt("Bienvenido. Ingrese la opcion que desea realizar: \n\n1. Agregar un Chofer \n2. Ordenar por valor mas economico \n3. Modificar el valor \n4. Buscar por vehiculo \n5. Buscar por valor");
    
        switch (inicio) {
            case "1":
                agregarChofer()
                break;
            case "2":
                ordenarPorValor()
                break;
            case "3":
                modificarValor()
                break;
            case "4":
                buscarVehiculo()
                break;
            case "5":
                buscarValor()
                break;  
        }
}

function agregarChofer(){
    let vehiculo  = prompt("¿Que vehiculo tenes?")
    let nombre = prompt("¿Como te llamas?")
    let valorHora = parseFloat(prompt("¿Que valor tiene la hora de tus servicios?"))

    
    let chofer = new Chofer(vehiculo, nombre, valorHora)
    lista.push(chofer)
    console.table(lista)

    alert("Listo, el chofer ya fue ingresado al sistema.")
    iniciar()
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
    iniciar()
}

function modificarValor(){
    let actualizado = lista.map((x) => {
        return {
            vehiculo: x.vehiculo,
            nombre: x.nombre,
            valorHora: x.valorHora * 2
        }
    })
    console.table(actualizado)
    iniciar()
}

function buscarVehiculo(){
    let buscar = prompt("¿Que vehiculo necesitas?")
    let resultado = lista.filter((x)=>x.vehiculo.includes(buscar))
    console.table(resultado)
    iniciar()
}

function buscarValor(){
    let valor = parseFloat(prompt("¿Que precio estas dispuesto a pagar?"))
    let resultado = lista.filter ( (x)=> (x.valorHora == valor) )
    console.table(resultado)
    iniciar()
}