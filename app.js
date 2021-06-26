const correctAnswers = ["D", "B", "A", "C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //Check Answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //Show Result
  scrollTo({ top: 10, left: 10, behavior: "smooth" });
  //   span.innerHTML = `<strong>${score}%</strong>`;
  result.classList.remove("d-none");

  //Animating the Score

  setTimeout(() => {
    let output = 0;
    const timer = setInterval(() => {
      span.innerHTML = `<strong>${output}%</strong>`;
      if (output === score) {
        clearInterval(timer);
      } else {
        output++;
      }
    }, 10);
  }, 500);
});
