let template = document.querySelector(".template");
document.querySelector(".new-task").addEventListener("submit", function (e) {
  e.preventDefault();
  let textarea = this.querySelector("textarea");

  if (textarea.value !== "") {
    let task = template.cloneNode(true);
    task.classList.remove("template");
    task.querySelector("pre").textContent = textarea.value;

    task.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    document.querySelector(".task-list").append(task);

    textarea.value = "";
  }
});


/*function returnResult(a, b) {
  return "value of a combined with b = " + a + b("___");
}

let output = returnResult("Hello world", function (between) {
  return between + " and Space";
});
console.log(output);
