function toggleEssay() {
  const content = document.getElementById("essayContent");
  const btn = document.querySelector(".essay-toggle");

  if (content.style.display === "block") {
    content.style.display = "none";
    btn.textContent = "⌄";
  } else {
    content.style.display = "block";
    btn.textContent = "⌃";
  }
}
