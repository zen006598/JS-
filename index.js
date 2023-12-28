const btnContainer = document.querySelector("#btn-container");
for (let i = 0; i < 5; i++) {
  const btn = `<button type="button" class="btn btn-light m-1" id='btn-${i}'>${i}</button>`;
  const chk = `<input type="radio" id='chk-${i}' name='a' class='d-none chk'/>`;
  btnContainer.insertAdjacentHTML("beforeend", btn);
  btnContainer.insertAdjacentHTML("beforeend", chk);
}

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const radioButton = e.target.nextElementSibling;

    if (radioButton) {
      radioButton.checked = true;
      const event = new Event("change", {
        bubbles: true,
        cancelable: true,
      });
      radioButton.dispatchEvent(event);
    }
  }
});

btnContainer.addEventListener("change", (e) => {
  updateButtonStyles(btnContainer, e.target.id.replace("chk", "btn"));
});

function updateButtonStyles(container, activeButtonId) {
  const buttons = container.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-light");
  });

  const activeButton = container.querySelector(`#${activeButtonId}`);
  if (activeButton) {
    activeButton.classList.remove("btn-light");
    activeButton.classList.add("btn-primary");
  }
}
