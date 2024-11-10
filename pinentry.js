
        let pin = ""; // To hold the entered PIN
        // let currentDot = 0; // Track the dot position for toggling

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

        // Confirm button click: validate and proceed if valid
        confirmButton.addEventListener('click', () => {
            if (pin.length === 4) {
                errorMessage.style.display = 'none';

                window.location.href = 'success.html'; // Redirect to new page
            } else {
                errorMessage.style.display = 'block'; // Show error message

                /// Remove error message after 2seconds
                setTimeout(()=>{
                    errorMessage.style.display = 'none';
                },2000)
            }
        });