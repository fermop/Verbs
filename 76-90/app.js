// Verbos en pasado, pasado participio y significado
const past = ["Sewed", "Shook", "Shone", "Shot", "Showed", "Shrank", "Shut", "Sang", "Sank", "Sat", "Slept", "Slid", "Sowed", "Spoke", "Spelt/spelled"];
const pastParticiple = ["Sewn", "Shaken", "Shone", "Shot", "Shown", "Shrunk", "Shut", "Sung", "Sunk", "Sat", "Slept", "Slid", "Sown", "Spoken", "Spelt/spelled"];
const meaning = ["Coser", "Sacudir", "Brillar", "Disparar", "Mostrar", "Escoger", "Cerrar", "Cantar", "Hundir", "Sentarse", "Dormir", "Deslizar", "Sembrar", "Hablar", "Deletrear"];

// Inputs en donde escribieron el verbo en pasado, pasado participio y significado
const verbsPast = document.querySelectorAll('.past');
const verbsPastParticiple = document.querySelectorAll('.pastParticiple');
const verbsMeaning = document.querySelectorAll('.meaning');

// Botones
const verifyBtn = document.querySelector('.verify');
const resetBtn = document.querySelector('.reset');
const showAnswersBtn = document.querySelector('.show');

// Funcion para el boton de VERIFICAR/VALIDAR valores
verifyBtn.onclick = function() {
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

// Funcion para el boton de REINICIAR valores
resetBtn.onclick = function() {
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
showAnswersBtn.onclick = function() {
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