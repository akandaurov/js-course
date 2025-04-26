class TextInput extends Component {
  name = '';
  label = '';
  errorMessage = '';
  required = false;
  type = 'text';

  constructor(props = {}) {
    super();
    this.name = props.name;
    this.label = props.label;
    this.errorMessage = props.errorMessage;
    this.required = props.required;
    this.type = props.type;
  }

  render(parent) {
    console.log({ type: this.type });

    const div = new Div();
    div.className = 'mb-3';
    div.children = [
      new Label({ className: 'form-label', for: this.name, text: this.label }),
      new Input({
        className: 'form-control',
        type: this.type,
        name: this.name,
        id: this.name,
        required: this.required,
      }),
      new Div({ className: 'invalid-feedback', text: this.errorMessage }),
    ];

    div.render(parent);
  }
}
