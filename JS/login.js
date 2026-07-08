const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    if(username === ""){

        alert("Please enter your name.");

        return;

    }

    localStorage.setItem("HireReadyUser", username);

    window.location.href = "dashboard.html";

});