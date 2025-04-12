window.addEventListener('load', function () {
  document.getElementById('btnPlus').addEventListener('click', function () {
    const span = document.getElementById('spnNumber');
    const currentNumber = parseInt(span.textContent);

    span.textContent = currentNumber + 1;
  });

  document.getElementById('btnMinus').addEventListener('click', function () {
    const span = document.getElementById('spnNumber');
    const currentNumber = parseInt(span.textContent);

    span.textContent = currentNumber - 1;
  });

  const input = document.getElementsByTagName('input')[0];
  const textSpan = document.querySelector('span.text-bg-info');

  input.addEventListener('keyup', function () {
    textSpan.textContent = input.value;
  });

  const inputPrompt = document.getElementById('inputPrompt');

  inputPrompt.style.color = 'red';

  const btnDynamic = this.document.getElementById('btnDynamic');

  btnDynamic.addEventListener('mouseenter', function () {
    btnDynamic.classList.remove('btn-info');
    btnDynamic.classList.add('btn-warning');

    btnDynamic.textContent = 'Mouse is over me';

    btnDynamic.style.color = 'red';
  });

  btnDynamic.addEventListener('mouseleave', function () {
    btnDynamic.classList.remove('btn-warning');
    btnDynamic.classList.add('btn-info');

    btnDynamic.textContent = 'Mouse is out of me';

    btnDynamic.style.color = 'blue';
  });
});

function toggleColor() {
  const inputPrompt = document.getElementById('inputPrompt');
  if (inputPrompt.style.color === 'red') {
    inputPrompt.style.color = 'blue';
  } else {
    inputPrompt.style.color = 'red';
  }
}

function changeText() {
  const input = document.getElementsByTagName('input')[0];
  input.value = 'Hello World';
}

function gotoLesson1() {
  window.location = '/src/lesson1';
}
