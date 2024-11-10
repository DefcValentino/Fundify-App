
let pin = ""; // To hold the entered PIN

// Define allowed 4-digit PINs
const allowedPins = ["1234", "5678", "4321"]; // Replace these with your specific allowed PINs


// Select elements
const dots = document.querySelectorAll('.dot');
const keypad = document.querySelector('.keypad');
const confirmButton = document.getElementById('pinBtn');
const errorMessage = document.getElementById('error-message');


// Update dots to display entered PIN
function updateDots() {
    dots.forEach((dot, index) => {
        dot.textContent = pin[index] || ""; // Show digit if entered, else empty
    });
}

// Handle keypad button clicks
keypad.addEventListener('click', (event) => {
    const key = event.target;

    // Add digit if key is number and PIN length < 4
    if (key.classList.contains('key') && pin.length < 4) {
        pin += key.textContent; // Append the digit
        dots.forEach(dot => dot.style.backgroundColor = "transparent");
        updateDots(); // Reflect the changes on dots
    }

    // Clear PIN if "Clear" button is pressed
    if (key.classList.contains('key-clear')) {
        pin = "";
        currentDot = 0; // Reset dot position
        updateDots();
        errorMessage.style.display = 'none';
    }
});


/// Confirm button click: validate and proceed if valid
confirmButton.addEventListener('click', () => {
    if (pin.length === 4) {
        // Check if entered PIN is in the allowed set
        if (allowedPins.includes(pin)) {
            errorMessage.style.display = 'none';
            window.location.href = 'home.html'; // Redirect to new page
        } else {
            // Show incorrect PIN message if PIN is not allowed
            errorMessage.textContent = "Incorrect PIN. Please try again.";
            errorMessage.style.display = 'block';
            pin = ""; // Reset the entered PIN
            updateDots();
        }
    } else {
        // Show error message if PIN is not 4 digits
        errorMessage.textContent = "Please enter a 4-digit PIN.";
        errorMessage.style.display = 'block';
    }
});