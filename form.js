const formContainer = document.getElementById('form-container');

function createFormElement(type, labelText) {
  const label = document.createElement('label');
  label.textContent = labelText;

  const input = document.createElement('input');
  input.type = type;

  const br = document.createElement('br');

  formContainer.appendChild(label);
  formContainer.appendChild(input);
  formContainer.appendChild(br);
}

// Example usage:
createFormElement('text', 'Name');
createFormElement('email', 'Email');
createFormElement('password', 'Password');
