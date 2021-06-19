var card = {
  counter: document.querySelector(".number"),
  minus: document.querySelector("#minus"),
  plus: document.querySelector("#plus"),
  delete: document.querySelector("#delete")
}

card.plus.addEventListener("click", function () {
  card.counter.innerText = Number(card.counter.innerText) + 1;
});

card.minus.addEventListener("click", function () {
  card.counter.innerText = Number(card.counter.innerText) - 1;
});

card.delete.addEventListener("click", function () {
  card.counter.innerText = 0;
})