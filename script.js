// Select input fields and total display elements
const rayInputs = document.querySelectorAll('.ray-input');
const vivInputs = document.querySelectorAll('.viv-input');
const rayTotalElement = document.getElementById('ray-total');
const vivTotalElement = document.getElementById('viv-total');
const overallTotalElement = document.getElementById('overall-total');

// Function to calculate totals
function calculateTotals() {
    let rayTotal = 0;
    let vivTotal = 0;

    // Sum all Ray's inputs
    rayInputs.forEach(input => {
        const value = parseFloat(input.value) || 0; // Default to 0 if empty
        rayTotal += value;
    });

    // Sum all Viv's inputs
    vivInputs.forEach(input => {
        const value = parseFloat(input.value) || 0; // Default to 0 if empty
        vivTotal += value;
    });

    // Update totals in the table
    rayTotalElement.textContent = rayTotal.toFixed(2);
    vivTotalElement.textContent = vivTotal.toFixed(2);
    overallTotalElement.textContent = (rayTotal + vivTotal).toFixed(2);
}

// Attach event listeners to all input fields
rayInputs.forEach(input => {
    input.addEventListener('input', calculateTotals);
});

vivInputs.forEach(input => {
    input.addEventListener('input', calculateTotals);
});
