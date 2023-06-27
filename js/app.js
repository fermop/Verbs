// Inputs en donde escribieron el verbo en pasado, pasado participio y significado
const verbsPast = document.querySelectorAll('.past');
const verbsPastParticiple = document.querySelectorAll('.pastParticiple');
const verbsMeaning = document.querySelectorAll('.meaning');
const inputs = document.getElementsByTagName('input');

// Botones
const verifyBtn = document.querySelector('.verify');
const resetBtn = document.querySelector('.reset');
const showAnswersBtn = document.querySelector('.show');

// Funciones
  // Funcion para el boton de VERIFICAR/VALIDAR valores
function verify() {
  for (let i = 0; i < past.length; i++) {
    // Inputs de verbos en pasado
    if (verbsPast[i].value == past[i]) {
      verbsPast[i].classList.remove('incorrect');
      verbsPast[i].classList.add('correct');
    } else {
      verbsPast[i].classList.remove('correct');
      verbsPast[i].classList.add('incorrect');
    }

    // Inputs de verbos en pasado participio
    if (verbsPastParticiple[i].value == pastParticiple[i]) {
      verbsPastParticiple[i].classList.remove('incorrect');
      verbsPastParticiple[i].classList.add('correct');
    } else {
      verbsPastParticiple[i].classList.remove('correct');
      verbsPastParticiple[i].classList.add('incorrect');
    }

    // Inputs de verbos en significado
    if (verbsMeaning[i].value == meaning[i]) {
      verbsMeaning[i].classList.remove('incorrect');
      verbsMeaning[i].classList.add('correct');
    } else {
      verbsMeaning[i].classList.remove('correct');
      verbsMeaning[i].classList.add('incorrect');
    }
  }

}

  // Funcion para verificar respuesta al escuchar evento 'blur'
function verify2() {
  for (let i = 0; i < past.length; i++) {
    // ----- Inputs de verbos en Pasado -----
    if (verbsPast[i].value == past[i] && verbsPast[i].value != '') { // Correcto
      verbsPast[i].classList.remove('incorrect');
      verbsPast[i].classList.add('correct');

    } else if (verbsPast[i].value != past[i] && verbsPast[i].value != '') { // Erróneo
      verbsPast[i].classList.remove('correct');
      verbsPast[i].classList.add('incorrect');

    } else if (verbsPast[i].value == '' && (verbsPast[i].classList.contains('correct') || verbsPast[i].classList.contains('incorrect'))) {
      // Eliminar clases de 'correcto' o 'incorrecto' si el input está vacío  
      verbsPast[i].classList.remove('correct');
      verbsPast[i].classList.remove('incorrect');
    }

    // ----- Inputs de verbos en Pasado Participio -----
    if (verbsPastParticiple[i].value == pastParticiple[i] && verbsPastParticiple[i].value != '') { // Correcto
      verbsPastParticiple[i].classList.remove('incorrect');
      verbsPastParticiple[i].classList.add('correct');

    } else if (verbsPastParticiple[i].value != pastParticiple[i] && verbsPastParticiple[i].value != '') { // Erróneo
      verbsPastParticiple[i].classList.remove('correct');
      verbsPastParticiple[i].classList.add('incorrect');

    } else if (verbsPastParticiple[i].value == '' && (verbsPastParticiple[i].classList.contains('correct') || verbsPastParticiple[i].classList.contains('incorrect'))) {
      // Eliminar clases de 'correcto' o 'incorrecto' si el input está vacío
      verbsPastParticiple[i].classList.remove('correct');
      verbsPastParticiple[i].classList.remove('incorrect');
    }

    // ----- Inputs de verbos en Meaning -----
    if (verbsMeaning[i].value == meaning[i] && verbsMeaning[i].value != '') { // Correcto
      verbsMeaning[i].classList.remove('incorrect');
      verbsMeaning[i].classList.add('correct');

    } else if (verbsMeaning[i].value != meaning[i] && verbsMeaning[i].value != '') { // Erróneo
      verbsMeaning[i].classList.remove('correct');
      verbsMeaning[i].classList.add('incorrect');

    } else if (verbsMeaning[i].value == '' && (verbsMeaning[i].classList.contains('correct') || verbsMeaning[i].classList.contains('incorrect'))) {
      // Eliminar clases de 'correcto' o 'incorrecto' si el input está vacío
      verbsMeaning[i].classList.remove('correct');
      verbsMeaning[i].classList.remove('incorrect');
    }

    }
}

  // Funcion para el boton de REINICIAR valores
function reset() {
  for (let i = 0; i < past.length; i++) {
    // Inputs de verbos en pasado
    if (verbsPast[i].classList.contains('correct') || verbsPast[i].classList.contains('incorrect') || verbsPast[i].value != '') {
      verbsPast[i].classList.remove('correct');
      verbsPast[i].classList.remove('incorrect');
      verbsPast[i].value = '';
    }

    // Inputs de verbos en pasado participio
    if (verbsPastParticiple[i].classList.contains('correct') || verbsPastParticiple[i].classList.contains('incorrect') || verbsPastParticiple[i].value != '') {
      verbsPastParticiple[i].classList.remove('correct');
      verbsPastParticiple[i].classList.remove('incorrect');
      verbsPastParticiple[i].value = '';
    }

    // Inputs de verbos en significado
    if (verbsMeaning[i].classList.contains('correct') || verbsMeaning[i].classList.contains('incorrect') || verbsMeaning[i].value != '') {
      verbsMeaning[i].classList.remove('correct');
      verbsMeaning[i].classList.remove('incorrect');
      verbsMeaning[i].value = '';
    }
  }
}

  // Funcion para el boton de RESPUESTAS.
function showAnswer() {
  for (let i = 0; i < past.length; i++) {
    // Quitar colores en los inputs si es que tienen colores
    if (verbsMeaning[i].classList.contains('correct') || verbsMeaning[i].classList.contains('incorrect')) {
        // Inputs en pasado
        verbsPast[i].classList.remove('correct');
        verbsPast[i].classList.remove('incorrect');
        // Inputs en pasado participio
        verbsPastParticiple[i].classList.remove('correct');
        verbsPastParticiple[i].classList.remove('incorrect');
        // Inputs en significado
        verbsMeaning[i].classList.remove('correct');
        verbsMeaning[i].classList.remove('incorrect');
    }

    // El valor del input para MEANING será sustituido por el valor del array
    verbsPast[i].value = past[i];
    verbsPastParticiple[i].value = pastParticiple[i];
    verbsMeaning[i].value = meaning[i];
  }
}

  // Función para convertir en mayúscula la primer letra de una cadena de texto en un input.
function capitalizeFirstLetter() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != '' && inputs[i].value[0] != inputs[i].value[0].toUpperCase()) {
      inputs[i].value = inputs[i].value[0].toUpperCase() + inputs[i].value.slice(1);
    }
  }
}

// Shortcuts
document.addEventListener('keydown', function(e) {
  // Botón VERIFICAR
  if (e.altKey && e.key === 'v') {
    verify();
  }
  // Botón REINICIAR
  if (e.altKey && e.key === 'r') {
    reset();
  }
  // Botón RESPUESTAS
  if (e.altKey && e.key === 'a') {
    showAnswer();
  }
});

// Eventos
verifyBtn.addEventListener('click', verify);
resetBtn.addEventListener('click', reset);
showAnswersBtn.addEventListener('click', showAnswer);
for (let i = 0; i < inputs.length; i++) { // Agregando eventos para todos los inputs
  inputs[i].addEventListener('blur', function() {
    capitalizeFirstLetter();
    verify2();
  });
}