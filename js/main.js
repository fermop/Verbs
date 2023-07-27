// Selectors
const sectionsBtn = document.querySelectorAll('.sections-available');
const sections = document.querySelectorAll('.section');
const inputs = document.getElementsByTagName('input');
const resetBtn = document.querySelector('.btn-reset');
const showAnswerBtn = document.querySelector('.btn-answers');

// States
let sectionBtnSelected = 0;

// Functions
  // Button reset
function resetInputsValueBtn() {
  for (let i=0; i<inputs.length; i++) {
    // Remove class (correct or incorrect) in case it has it.
    (inputs[i].value != '' && inputs[i].classList != '') && inputs[i].classList.remove(inputs[i].classList.value);
    inputs[i].value = '';
  }
}

  // Button answers
function showAnswerInputsValueBtn() {
  for (let i=0; i<inputs.length; i++) {
    // Remove class (correct or incorrect) in case it has it.
    inputs[i].value != '' && inputs[i].classList.remove(inputs[i].classList.value);
    inputs[i].value = verbs[i];
  }
}

  // Shortcuts
document.addEventListener('keydown', function(e) {
  // Button Reset
  (e.altKey && e.key === 'r') && resetInputsValueBtn();
  // Button Show answers
  (e.altKey && e.key === 'a') && showAnswerInputsValueBtn();
});

// Events
  // Sections selected to learn
for (let i = 0; i<sectionsBtn.length; i++) {
  sectionsBtn[i].onclick = () => {
    sectionsBtn[i].classList.toggle('active');
    sections[i].classList.toggle('available');
    sectionsBtn[i].classList.contains('active') ? sectionBtnSelected+=1 : sectionBtnSelected-=1;
    if (sectionBtnSelected>0) {
      resetBtn.parentElement.classList.add('active');
    } else {
      resetBtn.parentElement.classList.remove('active');
    }
  };
}

  // Event blur
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('blur', () => {
    // verifyValueProvided();
    if (inputs[i].value != '') {
      /*
        1. If there are blank spaces at the start or end, they'll be removed.
        2. The first letter of the input and the verb of the data will always
           converted to lowercase. This way, the user can write with lowercase 
           letters.
      */
      if (inputs[i].value.trim().toLowerCase() == verbs[i].toLowerCase()) {
        inputs[i].classList.remove('incorrect');
        inputs[i].classList.add('correct');
      } else {
        inputs[i].classList.remove('correct');
        inputs[i].classList.add('incorrect');
      }
    } else {
      inputs[i].classList.remove('incorrect');
      inputs[i].classList.remove('correct');
    }
  });
}

resetBtn.addEventListener('click', resetInputsValueBtn);
showAnswerBtn.addEventListener('click', showAnswerInputsValueBtn);