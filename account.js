
const accounts = [
    { name: "Shater Tsavsar", 
        tag: "@Shatermt",
        points: "24,990"
    },

    { name: "Jane Doe", 
        tag: "@JaneD",
        points: "15,000"
    },

    { name: "John Smith", 
        tag: "@JohnS",
        points: "30,000"
    },

    { name: "Sarah Connor", 
        tag: "@SarahC",
        points: "12,500"
    },

    { name: "Micheal Bee", 
        tag: "@MichealB",
        points: "10,200"
    },
];

const accountInput = document.getElementById("accountInput");
const searchResults = document.getElementById("searchResults");
const selectedAccount = document.getElementById("selectedAccount");
const confirmBtn = document.getElementById('confirmBtn');

/// Event listener for input fields to filter accounts
accountInput.addEventListener('input', function() {
    const query = accountInput.value.toLowerCase();
    searchResults.innerHTML = ""; // clear previous results

    const matchedAccounts = accounts.filter(account =>
        account.name.toLowerCase().includes(query) ||
        account.tag.toLowerCase().includes(query)
    );


    //Show or hide the results based on matches
    if (matchedAccounts.length > 0 && query) {
        searchResults.classList.remove("hidden");
        matchedAccounts.forEach(account => {
            const accountDiv = document.createElement("div");
            accountDiv.classList.add("search-result-item");
            accountDiv.textContent = `${account.name} (${account.tag})`;
            accountDiv.onclick = () => selectAccount(account);
            searchResults.appendChild(accountDiv);
        })

    } else{
        searchResults.classList.add("hidden");
    }

});


/// Function to handle account selection
function selectAccount(account) {

    /// Set the selected account details
    accountInput.value = account.name;
    document.getElementById("displayUserName").textContent = account.name;
    document.getElementById("displayUserTag").textContent = account.tag;
    document.getElementById("displayPoints").textContent = account.points;

    /// Display selected account details and hide the search results
    selectedAccount.classList.remove("hidden");
    searchResults.classList.add("hidden");

}

/// Navigate to previous page on button click
const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', (e) =>{
    window.location.href = "transfer.html"
})



/// Navigate to home page on button click
const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', (e) =>{
    window.location.href = "home.html"
})



/// Function to navigate to a new Page that has the account name
confirmBtn.addEventListener('click', function() {
    const selectedAccountName = accountInput.value;

    if (selectedAccountName) {
        // Store selected account details in localStorage
        localStorage.setItem("selectedAccount", JSON.stringify ({
            name : selectedAccountName,
            tag: document.getElementById("displayUserTag").textContent,
        }));

        /// Redirect to send money page
        window.location.href = "send.html";
    } else {
        alert("please select an account before confirming");
    }
})




