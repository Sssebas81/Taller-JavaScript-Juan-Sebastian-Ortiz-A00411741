// ======================
// 1. Tipos de Variables
// ======================

// Ejercicio 1.1
var nombre = "Sebastian";
console.log("Nombre con var:", nombre);
nombre = "Juan";
console.log("Nuevo nombre con var:", nombre);

// Ejercicio 1.2
try {
    const nombreConst = "Sebastian";
    console.log("Const:", nombreConst);
    // Intentar reasignar -> Error
    nombreConst = "Juan";
} catch (error) {
    console.log("Error con const:", error.message);
    console.log("No se puede reasignar una variable declarada con const.");
}

// Ejercicio 1.3
if (false) {
    let edad = 20;
}
try {
    console.log(edad); 
} catch (error) {
    console.log("Error:", "No se puede acceder a 'edad' fuera del bloque porque fue declarada con let.");
}


// ======================
// 2. Tipos de Datos
// ======================

// Ejercicio 2.1
let texto = "Hola";
let numero = 10;
let booleano = true;
let nulo = null;
let indefinido;

console.log(typeof texto, typeof numero, typeof booleano, typeof nulo, typeof indefinido);

// Ejercicio 2.2
let persona = { nombre: "Juan", edad: 20 };
let hobbies = ["leer", "jugar", "programar"];

console.log("Tipo de persona:", typeof persona);
console.log("Tipo de hobbies:", typeof hobbies);


// ======================
// 3. Conversión de Tipos
// ======================

// Ejercicio 3.1
let numero1 = 10;
let numero2 = "5";
console.log("numero1 + numero2:", numero1 + numero2); // concatenación
console.log("numero1 * numero2:", numero1 * numero2); // multiplicación numérica

// Ejercicio 3.2
console.log(String(25));
console.log(Number("100"));
console.log(Boolean(""), Boolean("hola"));


// ======================
// 4. Operadores y Control
// ======================

// Ejercicio 4.1
console.log("10 === '10':", 10 === "10"); 
console.log("10 == '10':", 10 == "10"); 

// Ejercicio 4.2
let numeroCheck = 7;
if (numeroCheck % 2 === 0) {
    console.log(numeroCheck, "es par");
} else {
    console.log(numeroCheck, "es impar");
}

// Ejercicio 4.3
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Ejercicio 4.4
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Error capturado:", error.message);
}


// ======================
// 5. Funciones
// ======================

// Ejercicio 5.1
function multiplicar(a, b) {
    return a * b;
}
console.log("Multiplicar:", multiplicar(3, 4));

// Ejercicio 5.2
const multiplicarArrow = (a, b) => a * b;
console.log("Multiplicar con arrow:", multiplicarArrow(5, 6));

// Ejercicio 5.3
const saludar = () => "¡Hola a todos!";
console.log(saludar());


// ======================
// 6. Scope y Contextos
// ======================

// Ejercicio 6.1
let globalVar = "Soy global";
function testScope() {
    let localVar = "Soy local";
    console.log(globalVar); 
    console.log(localVar);  
}
testScope();
console.log(globalVar);
// console.log(localVar); // Error: no definida fuera de la función

// Ejercicio 6.2
let coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log("La marca es:", this.marca);
    }
};
coche.mostrarMarca();


// ======================
// 7. Arrays
// ======================

// Ejercicio 7.1
let frutas = ["Manzana", "Banana"];
console.log("Inicial:", frutas);
frutas.push("Naranja");
console.log("Después de push:", frutas);
frutas.pop();
console.log("Después de pop:", frutas);

// Ejercicio 7.2
let numeros = [1, 2, 3];
let numerosPor2 = numeros.map(n => n * 2);
let mayoresA1 = numeros.filter(n => n > 1);
console.log("Multiplicados por 2:", numerosPor2);
console.log("Mayores a 1:", mayoresA1);

// Ejercicio 7.3
frutas.forEach(f => console.log("Fruta:", f));
console.log("Encontrar Banana:", frutas.find(f => f === "Banana"));
console.log("Índice de Manzana:", frutas.findIndex(f => f === "Manzana"));


// ======================
// 8. Objetos y Clases
// ======================

// Ejercicio 8.1
let libro = {
    titulo: "El Quijote",
    autor: "Cervantes",
    mostrarInfo: function() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
};
libro.mostrarInfo();

// Ejercicio 8.2
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
let animal1 = new Animal("Firulais");
console.log(animal1.saludar());

// Ejercicio 8.3
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}
let perro1 = new Perro("Boby", "Labrador");
console.log(perro1.saludar(), "y soy un", perro1.raza);
