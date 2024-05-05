document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateIncome);
});

function calculateIncome() {
    // Retrieve values from form elements
    const location = document.getElementById("location").value;
    const season = document.getElementById("season").value;
    const roomSize = document.getElementById("room_size").value;
    const nights = parseInt(document.getElementById("nights").value);
    const arp = document.getElementById("arp").value;

    // Validate that all fields have been filled out
    if (!location || !season || !roomSize || isNaN(nights) || !arp) {
        displayResult("Please fill in all fields.");
        return;
    }

    // Define the rental rates based on location and season
    const rates = {
        ormond_beach: {
            standard: { studio: 215, "1_bd": 315, "2_bd": 415, "3_bd": 415 },
            event_week: { studio: 450, "1_bd": 1000, "2_bd": 1100, "3_bd": 1100 }
        },
        branson: {
            standard: { studio: 115, "1_bd": 215, "2_bd": 315, "3_bd": 415 },
            event_week: { studio: 115, "1_bd": 215, "2_bd": 315, "3_bd": 415 }
        }
    };

    // Calculate the rental income
    const baseRate = rates[location][season][roomSize.replace(' ', '_').toLowerCase()];
    const effectiveNights = nights > 4 ? 5 : nights;
    const totalIncome = baseRate * effectiveNights;
    const annualIncome = totalIncome;  // Assuming one rental period per year
    const income10Years = annualIncome * 10;
    const income20Years = annualIncome * 20;

    // ARP status message
    const arpStatus = arp === "yes" ? "13 Month Advance Priority Reservations" : "12 Month Advance Priority Reservations";

    // Result HTML content
    const resultHtml = `
        <strong>${location.replace('_', ' ')} ${season.replace('_', ' ')} ${roomSize.replace('_', ' ').toUpperCase()} for ${nights} Nights</strong><br>
        <strong>Projected Rental Income: $${formatNumber(totalIncome)}</strong><br>
        Annual Projection: $${formatNumber(annualIncome)}<br>
        10 Year Projection: $${formatNumber(income10Years)}<br>
        20 Year Projection: $${formatNumber(income20Years)}<br>
        ${arpStatus}
    `;

    // Display the results
    displayResult(resultHtml);
}

function formatNumber(value) {
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function displayResult(htmlContent) {
    const resultContainer = document.getElementById('income_result');
    resultContainer.innerHTML = htmlContent;
    resultContainer.classList.add('show');
}