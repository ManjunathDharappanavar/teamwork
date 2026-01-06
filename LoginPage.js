document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Simple validation
    if(email === "chetan@e.com" && password === "123"){
        error.textContent = "";
        // Redirect to dashboard page
        window.location.href = "index.html";
    } else {
        error.textContent = "Invalid email or password!";
    }
});
