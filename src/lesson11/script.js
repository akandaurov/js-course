async function getWeather() {
  const coordinatesRespone = await fetch(`...`);
  const coordinates = await coordinatesRespone.json();

  const weatherResponse = await fetch(`...`);
  const weather = await weatherResponse.json();
}

function addItem() {
  const list = document.getElementsByTagName('ol')[0];

  const item = document.createElement('li');
  item.className = 'list-group-item';
  item.textContent = `Item ${list.children.length + 1}`;

  list.appendChild(item);
}

function removeItem() {
  const list = document.getElementsByTagName('ol')[0];

  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  }
}

async function removeAll() {
  const list = document.getElementsByTagName('ol')[0];

  // while (list.firstChild) {
  //   list.removeChild(list.firstChild);
  // }

  // for (let i = list.children.length - 1; i >= 0; i--) {
  //   list.removeChild(list.children[i]);
  // }

  // list.innerHTML = '';

  const city = 'ddfddf';

  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);

  list.replaceChildren();
}
