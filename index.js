const btnContainer = document.querySelector("#btn-container");
const displayedChecked = document.querySelector("#dispaly-checked");

for (let i = 0; i < 5; i++) {
  const btn = `<button type="button" class="btn btn-primary m-1" id='btn-${i}'>${i}</button>`;
  const chk = `<input type="radio" id='ckh-${i}' name='a' class='d-none chk'/>`;
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
  displayedChecked.textContent = `${e.target.id}`;
});
