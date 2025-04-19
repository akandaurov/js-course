window.addEventListener('load', function () {
  const form = document.getElementsByTagName('form')[0];

  form.addEventListener('submit', function (event) {
    console.log('Form submitted');

    const password = form.elements['password'];
    const confirmPassword = form.passwordCopy;

    const message = document.getElementById('passwordCopyMessage');

    if (password.value !== confirmPassword.value) {
      message.textContent = 'Passwords do not match';
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      message.textContent = 'Retype Password is required. Min length 4 symbols';
      confirmPassword.setCustomValidity('');
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  });

  const labelForOccupation = document.querySelector('label[for="occupation"]');
  const parentDiv = labelForOccupation.parentElement;

  const select = document.createElement('select');
  select.id = 'occupation';
  select.name = 'occupation';
  select.className = 'form-select';
  select.setAttribute('aria-label', 'Select occupation');

  let option = document.createElement('option');
  option.textContent = 'Developer';
  select.appendChild(option);

  option = document.createElement('option');
  option.textContent = 'Manager';
  select.appendChild(option);

  option = document.createElement('option');
  option.textContent = 'Accountant';
  select.appendChild(option);

  parentDiv.appendChild(select);
});
