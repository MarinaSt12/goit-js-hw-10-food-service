const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

currentCheckTheme();
checkboxPosition();

refs.checkbox.addEventListener('change', onBlackWhite);

function onBlackWhite(evt) {
  const checkTheme = localStorage.getItem('Theme');
  if (evt.target.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function checkboxPosition() {
  const checkTheme = localStorage.getItem('Theme');
  if (checkTheme === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}

function currentCheckTheme() {
  const checkTheme = localStorage.getItem('Theme');

  if (!checkTheme) {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(checkTheme);
  }
}
