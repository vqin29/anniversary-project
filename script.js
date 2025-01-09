const form = document.getElementById('finance-form');
const assetList = document.getElementById('asset-list');
const netWorthDisplay = document.getElementById('net-worth');

let totalNetWorth = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const asset = document.getElementById('asset').value;
    const value = parseFloat(document.getElementById('value').value);

    if (asset && value) {
        totalNetWorth += value;
        updateNetWorthDisplay();

        const listItem = document.createElement('li');
        listItem.textContent = `${asset}: $${value.toFixed(2)}`;
        assetList.appendChild(listItem);

        form.reset();
    }
});

function updateNetWorthDisplay() {
    netWorthDisplay.textContent = totalNetWorth.toFixed(2);
}
