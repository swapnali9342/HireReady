// ==========================
// GET SCORE
// ==========================

const score = Number(localStorage.getItem("score")) || 0;

const total = Number(localStorage.getItem("total")) || 0;

const percentage = total ? (score / total) * 100 : 0;

// ==========================
// SHOW RESULT
// ==========================

document.getElementById("score").innerText =
`${score} / ${total}`;

document.getElementById("percentage").innerText =
`${percentage.toFixed(0)}%`;

const status = document.getElementById("status");

if(percentage >= 80){

    status.innerText="🏆 Excellent!";

}
else if(percentage >= 60){

    status.innerText="🎉 Good Job!";

}
else if(percentage >= 40){

    status.innerText="👍 Keep Practicing!";

}
else{

    status.innerText="📚 Practice More!";

}

const percentage = Math.round((score / total) * 100);

let badge = "No Badge";

if (percentage >= 100) {

    badge = "Master";

}
else if (percentage >= 90) {

    badge = "Gold";

}
else if (percentage >= 80) {

    badge = "Silver";

}

localStorage.setItem("badge", badge);
localStorage.setItem("percentage", percentage);