// Subtask 4.1: Access DOM Elements
const clickBtn = document.getElementById('clickBtn');
const textInput = document.getElementById('textInput');
const inputDisplay = document.getElementById('inputDisplay');
const userForm = document.getElementById('userForm');
const hoverBox = document.getElementById('hoverBox');
const keyDisplay = document.getElementById('keyDisplay');
const msgDisplay = document.getElementById('msgDisplay');
const usernameInput = document.getElementById('username');

// Subtask 4.2: Click Event
clickBtn.addEventListener('click', () => {
    msgDisplay.innerText = "Status: Button was clicked!";
});

// Subtask 4.3: Input Event
textInput.addEventListener('input', (e) => {
    inputDisplay.innerText = `Typed: ${e.target.value}`;
});

// Subtask 4.4: Submit Event
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const name = usernameInput.value;
    alert(`Form submitted by: ${name}`);
    msgDisplay.innerText = "Status: Form Submitted!";
});

// Subtask 4.5: Keyup Event
document.addEventListener('keyup', (e) => {
    keyDisplay.innerText = `Last Key Pressed: ${e.key}`;
});

// Subtask 4.6: Mouseover and Mouseout Events
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#d1fae5';
    hoverBox.innerText = "Welcome!";
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#e5e7eb';
    hoverBox.innerText = "Hover your mouse here!";
});

// Subtask 4.7: Focus and Blur Events
usernameInput.addEventListener('focus', () => {
    msgDisplay.innerText = "Status: Typing username...";
});

usernameInput.addEventListener('blur', () => {
    msgDisplay.innerText = "Status: Finished typing.";
});