const otpLength = 6;
const otpContainer = document.getElementById("otp-container");
const message = document.getElementById("message");

// Create 6 input boxes
for (let i = 0; i < otpLength; i++) {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("maxlength", "1");
  input.dataset.index = i;

  input.addEventListener("input", handleInput);
  input.addEventListener("keydown", handleKeyDown);
  input.addEventListener("paste", handlePaste);

  otpContainer.appendChild(input);
}

function handleInput(e) {
  const input = e.target;
  const value = input.value;
  const index = Number(input.dataset.index);

  if (!/^\d$/.test(value)) {
    input.value = "";
    return;
  }

  if (index < otpLength - 1) {
    otpContainer.children[index + 1].focus();
  }
}

function handleKeyDown(e) {
  const index = Number(e.target.dataset.index);

  if (e.key === "Backspace") {
    if (e.target.value === "" && index > 0) {
      otpContainer.children[index - 1].focus();
    }
  } else if (e.key === "ArrowLeft" && index > 0) {
    otpContainer.children[index - 1].focus();
  } else if (e.key === "ArrowRight" && index < otpLength - 1) {
    otpContainer.children[index + 1].focus();
  }
}

function handlePaste(e) {
  e.preventDefault();
  const paste = e.clipboardData.getData("text").replace(/\D/g, "");

  if (paste.length === otpLength) {
    [...otpContainer.children].forEach((input, i) => {
      input.value = paste[i];
    });
    otpContainer.children[otpLength - 1].focus();
  }
}

// Submit button logic
document.getElementById("submitBtn").addEventListener("click", () => {
  const otp = [...otpContainer.children].map((input) => input.value).join("");

  if (otp.length === otpLength && /^\d+$/.test(otp)) {
    message.textContent = ` OTP Verified Succeffully`;
    message.style.color = "green";
  } else {
    message.textContent = " Invalid OTP. Please enter all 6 digits.";
    message.style.color = "red";
  }

  [...otpContainer.children].forEach((input) => (input.value = ""));
  otpContainer.children[0].focus();
});
