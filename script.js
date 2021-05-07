const screen = document.querySelector("#layar1");
const screenTwo = document.querySelector("#layar2");
const btn = document.querySelectorAll(".tombol");

btn.forEach((e) => {
  e.addEventListener("click", (tombol) => {
    btnAction(tombol.target.textContent);
  });
});

const updateLayar = (value) => {
  screen.value = `${screen.value}${value}`;
};

// If button delete all.
const btnAction = (button) => {
  if (button === "C") {
    return deleteValueScreen();
  } else if (button === "del") {
    return deleteValueCharsScreen(screen.value);
  } else if (button === "=") {
    return resultValue(screen.value);
  }
  updateLayar(button);
};

// Function result value
const resultValue = (value) => {
  deleteValueScreen();
  const soal = value;
  const hasil = eval(value);
  screen.value = hasil;
  screenTwo.innerHTML = soal;
};

// Function delete perchars.
const deleteValueCharsScreen = (value) => {
  deleteValueScreen();
  updateLayar(value.slice(0, -1));
};

// Function delete all
const deleteValueScreen = () => {
  screen.value = "";
  screenTwo.innerHTML = "";
};
