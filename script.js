const questions = document.querySelectorAll(".questions > li");

questions.forEach(function(e, index) {
  let question = e.querySelector(".question");
  let answer = e.querySelector(".answer");
  let icon = e.querySelector(".icon");
  question.onclick = function(evt) {
    if (icon.classList.contains("show")) {
      icon.classList.remove("show");
      answer.classList.remove("show");
    } else {
      icon.classList.add("show");
      answer.classList.add("show");
    }
  };
});
