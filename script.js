console.log("Hola mundo");  

const nombre ="Jose";
let apellido = "Narvaez";

console.log(nombre);
console.log(apellido);

//nombre = "Christian";
apellido = "Figueroa";

console.log(apellido);

const persona = {
    nombre : "Brandon",
    apellido : "Optimus", 
    edad : 20, 
    apodos : ["Pepe", "Chepelin","Chepitilinn"]
};
persona.apellidos = "Rey mantecoso";
console.log(persona.apellidos);
console.log("================Fin de objetos===============")

//Funciones javascript

//function saludar (nombre){
//    return "hola "+ nombre;
//}

//const saludar = (nombre) => {
  //  return "Hola " + nombre;
//}

const saludar = nombre => 
     "Hola " + nombre;

const saludo=saludar (persona.apellidos);
console.log(saludo);
console.log("===========================FIN FUNCIONES====================")
console.log("==========LISTAS=============")

const listNumeros = [
    5, 10, 3, 8, 9
];


console.log(listNumeros);
listNumeros[3] = 7;
console.log(listNumeros);

const numeroMultiplicados = listNumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy * 3;

    });
    console.log(numeroMultiplicados);

    const numerosEnObjetos = listNumeros.map(
        (numeroEnElQueVoy) =>{
            return{
                valor:numeroEnElQueVoy
            };
        }
    );
    console.log(numerosEnObjetos);

    const numerosX = [90,70,30,10,50];
    const numerosFiltrados =numerosX.filter(
        numX => numX >50
    );
    console.log(numerosFiltrados);

    const personas = [
        {
            nombre : "Brandon",
            edad: 20
        },
        {
            nombre : "Nomen",
            edad: 8

        },
        {
            nombre: "Marian",
            edad:89
        },

    ];
    const personasMayores = personas.filter(
        (personaX)=>{
            return personaX.edad > 17;
        }
    );
    console.log(personasMayores);

    //funcion reduce
    const numerosY = [3,6,9,12,16];


    const sumaNumeros = numerosY.reduce(
        (variablePersistente,elemento) => 
            variablePersistente + elemento
        ,
        0
    );
    console.log(sumaNumeros);
