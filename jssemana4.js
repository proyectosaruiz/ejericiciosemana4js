"use strict";

const aterisco = 15;
for (let i = 0; i < aterisco; i++) {
  let unAteriscoMas = "";
  for (let j = 1; j < aterisco - i; j++) {
    unAteriscoMas = unAteriscoMas + " ";
  }

  for (let j = 0; j < i + 1; j++) {
    unAteriscoMas = unAteriscoMas + "*";
  }
  console.log(unAteriscoMas);
}
const ejercicioSemana4 = [
  "****************",
  " ** Pirámide 1 **",
  " ****************",
];

for (const ejercicio of ejercicioSemana4) {
  console.log(ejercicio);
}

//Tambien lo realice asi:
function ejercicio4(numerosDeAsteriscos) {
  for (let i = 0; i < numerosDeAsteriscos; i++) {
    let asteriscos2 = "";
    for (let j = 1; j < numerosDeAsteriscos - i; j++) {
      asteriscos2 = asteriscos2 + " ";
    }

    for (let j = 0; j < i + 1; j++) {
      asteriscos2 = asteriscos2 + "*";
    }
    console.log(asteriscos2);
  }
}
ejercicio4(15);
