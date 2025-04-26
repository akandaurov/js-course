class Component {
  children = [];

  render(parent) {
    console.log('Not implemented');
  }

  renderChildren(parent) {
    this.children.forEach((child) => {
      child.render(parent);
    });
  }
}

class Div extends Component {
  className = '';
  text;

  constructor(props = {}) {
    super();
    this.className = props.className;
    this.text = props.text;
  }

  render(parent) {
    const div = document.createElement('div');
    div.className = this.className;
    if (this.text) {
      div.textContent = this.text;
    }
    parent.appendChild(div);

    this.renderChildren(div);
  }
}

class Form extends Component {
  className = '';
  action = '';
  method = 'GET';
  novalidate = false;

  constructor(props = {}) {
    super();
    this.className = props.className;
    this.action = props.action;
    this.method = props.method;
    this.novalidate = props.novalidate;
  }

  render(parent) {
    this.form = document.createElement('form');
    this.form.className = this.className;
    this.form.action = this.action;
    this.form.method = this.method;
    this.form.setAttribute('novalidate', this.novalidate);
    parent.appendChild(this.form);

    this.renderChildren(this.form);
  }

  onSubmit(handler) {
    this.form.addEventListener('submit', handler);
  }

  addClass(className) {
    this.form.classList.add(className);
  }

  checkValidity() {
    return this.form.checkValidity();
  }
}

class Label extends Component {
  className = '';
  for = '';
  text = '';

  constructor(props = {}) {
    super();
    this.className = props.className;
    this.for = props.for;
    this.text = props.text;
  }

  render(parent) {
    const label = document.createElement('label');
    label.className = this.className;
    label.setAttribute('for', this.for);
    label.textContent = this.text;
    parent.appendChild(label);
  }
}

class Input extends Component {
  className = '';
  type = 'text';
  name = '';
  id = '';
  required = false;
  minLength;
  value = '';

  constructor(props = {}) {
    super();
    console.log({ props });

    this.className = props.className;
    this.type = props.type;
    this.name = props.name;
    this.id = props.id;
    this.required = props.required;
    this.minLength = props.minLength;
    this.value = props.value;
  }

  render(parent) {
    const input = document.createElement('input');
    input.className = this.className;
    input.type = this.type;
    input.name = this.name;
    input.id = this.id;
    input.required = this.required;

    if (this.minLength) {
      input.minLength = this.minLength;
    }
    if (this.value) {
      input.value = this.value;
    }

    parent.appendChild(input);
  }
}

class Button extends Component {
  className = '';
  type = 'button';
  text = '';

  constructor(props = {}) {
    super();
    this.className = props.className;
    this.type = props.type;
    this.text = props.text;
  }

  render(parent) {
    const button = document.createElement('button');
    button.className = this.className;
    button.type = this.type;
    button.textContent = this.text;

    parent.appendChild(button);
  }
}

class H1 extends Component {
  className = '';
  text = '';

  constructor(props = {}) {
    super();
    this.className = props.className;
    this.text = props.text;
  }

  render(parent) {
    const h1 = document.createElement('h1');
    h1.className = this.className;
    h1.textContent = this.text;

    parent.appendChild(h1);
  }
}
