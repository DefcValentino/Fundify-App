const closeBtn = document.getElementById('close')

/// Navigate to home page on button click
closeBtn.addEventListener('click', (e)=>{
    window.location.href = "home.html";
})

const transferDetails = JSON.parse(localStorage.getItem("transferDetails"));

if (transferDetails) {
    document.getElementById("successName").textContent = transferDetails.name;
    document.getElementById("successAmount").textContent = `${transferDetails.amount}`;
    document.getElementById("successComment").textContent = transferDetails.comment || "No comment provided";
}

// Clear transaction details and redirect to the home page when "Finish" button is clicked
document.getElementById("homeBtn").addEventListener("click", () => {
    localStorage.removeItem("transferDetails");
    window.location.href = "home.html";
});

