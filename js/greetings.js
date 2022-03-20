const greetingContainer = document.querySelector(".greetings");
const greetingHello = greetingContainer.querySelector(".greeting-text .hello");
const greetingName = greetingContainer.querySelector(".greeting-text .name");

const greetingForm = document.querySelector("#greeting-form");
const nameInput = greetingForm.querySelector("#username");

const USERNAME_KEY = "username";

const main = document.querySelector("main");

function paintGreetings(name) {
  greetingForm.classList.add("hidden");
  greetingForm.style.visibility = "hidden";
  // greetingHello.innerText = "Hello";
  // greetingHello.classList.remove("hidden");

  greetingName.innerText = name;

  main.classList.remove("hidden");
  greetingName.classList.remove("hidden");
}

const onSubmitName = (event) => {
  event.preventDefault();
  const username = nameInput.value;
  paintGreetings(username);
  localStorage.setItem(USERNAME_KEY, username);
};

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName !== null) {
  paintGreetings(savedName);
} else {
  greetingForm.addEventListener("submit", onSubmitName);
}
