const greetingContainer = document.querySelector(".greetings");
const greeting = greetingContainer.querySelector("h1");

const greetingForm = greetingContainer.querySelector("#greeting-form");
const nameInput = greetingForm.querySelector("#username");

const USERNAME_KEY = "username";

function paintGreetings(name) {
  greetingForm.classList.add("hidden");
  greeting.innerText = `Hello! ${name}`;
  greeting.classList.remove("hidden");
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
