// ==========================
// WELCOME USER
// ==========================

const username = localStorage.getItem("HireReadyUser");

if (username) {

    document.getElementById("welcomeUser").innerHTML =
        `Welcome, ${username} 👋`;

}

// ==========================
// QUIZ DATA
// ==========================

const score = Number(localStorage.getItem("score")) || 0;

const total = Number(localStorage.getItem("total")) || 0;

const percentage = total > 0
    ? Math.round((score / total) * 100)
    : 0;

// ==========================
// UPDATE DASHBOARD
// ==========================

const completed = document.getElementById("completedQuizzes");

if (completed) {

    completed.innerText = total > 0 ? 1 : 0;

}

const badge = localStorage.getItem("badge");

const badgeCount = document.getElementById("earnedBadges");

if (badge === "Silver" || badge === "Gold" || badge === "Master") {

    badgeCount.innerText = 1;

} else {

    badgeCount.innerText = 0;

}

const progress = document.getElementById("learningProgress");

if (progress) {

    progress.innerText = percentage + "%";

}

// ==========================
// LOGOUT
// ==========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("HireReadyUser");
        localStorage.removeItem("score");
        localStorage.removeItem("total");
        localStorage.removeItem("badge");
        localStorage.removeItem("percentage");

        window.location.href = "login.html";

    });

}