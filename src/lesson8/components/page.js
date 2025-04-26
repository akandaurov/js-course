class Page extends Component {
  render(parent) {
    const div = new Div();
    div.className = 'container';

    const form = new Form({
      className: 'needs-validation',
      action: 'form-result.html',
      method: 'get',
      novalidate: true,
    });

    form.children = [
      new TextInput({
        label: 'Email address',
        type: 'email',
        name: 'email',
        required: true,
        errorMessage: 'Please provide a valid email.',
      }),
      new TextInput({
        label: 'First Name',
        type: 'text',
        name: 'firstName',
        required: true,
        errorMessage: 'First Name is required.',
      }),
      new TextInput({
        label: 'Last Name',
        type: 'text',
        name: 'lastName',
        required: true,
        errorMessage: 'Last Name is required.',
      }),
      new Button({
        className: 'btn btn-primary',
        type: 'submit',
        text: 'Submit',
      }),
    ];

    div.children = [new H1({ className: 'text-center', text: 'JS Course - Lesson 8' }), form];

    div.render(parent);

    form.onSubmit(function (event) {
      console.log('Form submitted');

      // const password = form.elements['password'];
      // const confirmPassword = form.passwordCopy;

      // const message = document.getElementById('passwordCopyMessage');

      // if (password.value !== confirmPassword.value) {
      //   message.textContent = 'Passwords do not match';
      //   confirmPassword.setCustomValidity('Passwords do not match');
      // } else {
      //   message.textContent = 'Retype Password is required. Min length 4 symbols';
      //   confirmPassword.setCustomValidity('');
      // }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.addClass('was-validated');
    });
  }
}
