const sendBtn = document.getElementById('sendBtn');
const backBtn = document.getElementById('backBtn');
const amountInput = document.getElementById("amount-input");
const commentInput = document.getElementById("comment-input");
const errorMessage = document.getElementById('errorMessage');



/// Redirect back on button click
backBtn.addEventListener('click', (e)=> {
    window.location.href = 'account.html';
})


/// Navigate to home page on button click
const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', (e) =>{
    window.location.href = "home.html"
})



/// Retrieve the selected account details from localStorage
const selectedAccount = JSON.parse(localStorage.getItem ("selectedAccount"));

if (selectedAccount){
    /// Display the selected account details in the container
    document.getElementById("selectedUsername").textContent = selectedAccount.name;
    // document.getElementById("selectedUserTag").textContent = selectedAccount.tag;


} else{
    document.getElementById("selectedAccountContainer").innerHTML = "<p>No account selected</p>";
}
 


// Confirm button event handler
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent form submission
    
    const amount = amountInput.value.trim();
    const comment = commentInput.value.trim();
    
    // Check if the amount field is empty or invalid
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
        // displayError("Please enter a valid amount.");
        errorMessage.style.display = "block";

        /// Remove error message after 3seconds
        setTimeout(()=>{
            errorMessage.style.display = "none";

        },2000) // 3000 milliseconds = 3 seconds

    } else {
        // Store the transfer details in localStorage
        localStorage.setItem("transferDetails", JSON.stringify({
            name: selectedAccount.name,
            amount: amount,
            comment: comment
        }));
        
        // Redirect to the transfer success page
        window.location.href = "pinentry.html";
    }
});

// // Display error message function
// function displayError(message) {
//     errorMessage.textContent = message;
//     errorMessage.style.color = "red";
//     errorMessage.style.marginTop = "10px";
//     document.querySelector(".currency-form").appendChild(errorMessage);
// }

