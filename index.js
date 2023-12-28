const btnContainer = document.querySelector("#btn-container");
const btn = `<button type="button" class="btn btn-primary"></button>`;
const displayedChecked = document.querySelector("#dispaly-checked");

for (let i = 0; i < 5; i++) {
  const btn = `<button type="button" class="btn btn-primary m-1" id='btn-${i}'>${i}</button>`;
  const chk = `<input type="radio" id='ckh-${i}' name='a' class='d-none chk'/>`;
  btnContainer.insertAdjacentHTML("beforeend", btn);
  btnContainer.insertAdjacentHTML("beforeend", chk);
}

const btns = document.querySelectorAll(".btn");
const chks = document.querySelectorAll(".chk");

btns.forEach((b) => b.addEventListener("click", (e) => btnAndChkClick(e)));
chks.forEach((b) => {
  b.addEventListener("change", (e) => {
    setDisplayedChecked(e.currentTarget.id);
  });
});

function btnAndChkClick(e) {
  const nextSibling = e.currentTarget.nextSibling;
  nextSibling.checked = true;

  const event = new Event("change", {
    bubbles: true,
    cancelable: true,
  });
  nextSibling.dispatchEvent(event);
}

function setDisplayedChecked(t) {
  displayedChecked.textContent = t;
}
