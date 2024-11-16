const home = document.getElementById('homeBtn');
const transferBTn = document.getElementById('fundifyBtn');
const backBtn = document.getElementById('backBtn');


// Boarding two Button
home.addEventListener('click', (e)=> {
    window.location.href = "home.html";
});

/// Navigate to previous ppage on button click
backBtn.addEventListener('click', (e)=> {
    window.location.href = "home.html";
});


// Navigate to select account page on button click
transferBTn.addEventListener('click', (e)=> {
    window.location.href = "account.html";
});

const redeemBtnBtn = document.getElementById('redeemBtn');

/// Navigate to reward page on button click
redeemBtnBtn.addEventListener('click', (e) =>{
    window.location.href = "reward.html"
})

