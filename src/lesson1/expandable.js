function getElement() {
  return document.getElementsByClassName('expandable')[0];
}

function expand() {
  getElement().classList.add('expanded');
}

function collapse() {
  getElement().classList.remove('expanded');
}

function toggle() {
  console.log('toggle');
  if (getElement().classList.contains('expanded')) {
    collapse();
  } else {
    expand();
  }
}
