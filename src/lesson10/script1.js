window.addEventListener('load', function () {
  const button = document.getElementById('button');
  button.addEventListener('click', buttonClick);
  button.addEventListener('click', () => {
    console.log('handler2');
  });
  button.addEventListener('click', () => {
    console.log('handler3');
  });

  const table = document.getElementsByTagName('table')[0];
  table.addEventListener('click', tableClick);

  // document.getElementById('counter1').addEventListener('click', increaseValue);
  // document.getElementById('counter2').addEventListener('click', increaseValue);

  document.addEventListener('click', increaseValueUniversal);

  const link = document.getElementById('link');
  link.addEventListener('click', (event) => {
    // event.preventDefault();
    console.log('Link clicked');
  });
});

function buttonClick(event) {
  console.log('Button clicked');
  // event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

function tableClick(event) {
  const element = event.target;

  if (element.tagName === 'TD') {
    const tbody = element.closest('TBODY');
    const tds = tbody.getElementsByTagName('td');

    for (let i = 0; i < tds.length; i++) {
      const td = tds[i];
      td.style.backgroundColor = '';
    }

    element.style.backgroundColor = 'yellow';
  }
}

function increaseValue(event) {
  event.target.value++;
}

function increaseValueUniversal(event) {
  if (event.target.dataset.counter !== undefined) {
    console.log('Counter clicked');
    event.target.value++;
  }
}
