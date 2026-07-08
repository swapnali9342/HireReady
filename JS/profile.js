// ==========================
// SAMPLE PROFILE DATA
// ==========================

const score = Number(localStorage.getItem("score")) || 0;

const total = Number(localStorage.getItem("total")) || 0;

const percent = total ? Math.round((score / total) * 100) : 0;

document.getElementById("quizzes").innerText = total > 0 ? 1 : 0;

document.getElementById("average").innerText = percent + "%";

document.getElementById("badges").innerText = percent >= 80 ? 1 : 0;

const progress = document.getElementById("courseProgress");

progress.style.width = percent + "%";

progress.innerText = percent + "%";