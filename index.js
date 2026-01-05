const formEl = document.querySelector('.coming-soon__form');

const fieldLabels = {
  email: document.querySelector('.coming-soon__form-input-wrapper')
}

formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  const formObj = {};
  const formData = new FormData(formEl);
  for (const [key, value] of formData.entries()) {
    formObj[key] = value;
  };

  if (isFormValid(formObj)) {
    formEl.reset();
  }
});

function isFormValid({ email }) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errors = {};

  if (!email || !emailRegex.test(email)) errors.email = true;

  displayErrors(errors);

  if (Object.keys(errors).length === 0) {
    console.log('Why am I refreshing?', errors);
    return true;
  } else {
    return false;
  }
}

function displayErrors(errors) {
  console.log('What kind of errors', errors);
  Object.values(fieldLabels).forEach(function(label) {
    label.classList.remove('error');
  })

  Object.keys(errors).forEach(function(error) {
    fieldLabels[error]?.classList.add('error');
  })
}