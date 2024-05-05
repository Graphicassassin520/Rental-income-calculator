function calculateIncome() {
    // Retrieve values from form elements
    const locationElement = document.getElementById("location");
    const seasonElement = document.getElementById("season");
    const roomSizeElement = document.getElementById("room_size");
    const nights = parseInt(document.getElementById("nights").value);
    const arp = document.getElementById("arp").value;

    if (!locationElement.value || !seasonElement.value || !roomSizeElement.value || isNaN(nights) || !arp) {
        document.getElementById("income_result").innerHTML = "<strong>Please fill in all fields.</strong>";
        return;
    }

    // Prepare display names from selections
    const locationName = locationElement.options[locationElement.selectedIndex].text;
    const seasonName = seasonElement.options[seasonElement.selectedIndex].text;
    const roomSizeName = roomSizeElement.options[roomSizeElement.selectedIndex].text;

    // Rates based on location, season, and room size
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

    // Retrieve rate for selected configuration
    const selectedRate = rates[locationElement.value][seasonElement.value][roomSizeElement.value.replace(' ', '_').toLowerCase()];
    const effectiveNights = nights > 4 ? 5 : nights;
    const totalIncome = selectedRate * effectiveNights;
    const annualIncome = totalIncome;  // One rental week per year
    const income10Years = annualIncome * 10;
    const income20Years = annualIncome * 20;

    // ARP text
    const arpText = arp === "yes" ? "13 Month Advance Priority Reservations" : "12 Month Advance Priority Reservations";

    // Description of the rental configuration
    const rentalDescription = `${locationName} ${seasonName} ${roomSizeName} ${nights} Nights`;

    // Display the results
    document.getElementById("income_result").innerHTML = `
        <strong>${rentalDescription}</strong><br>
        <strong>Projected Rental Income: $${totalIncome.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong><br>
        Annual Projection: $${annualIncome.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        10 Year Projection: $${income10Years.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        20 Year Projection: $${income20Years.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        ${arpText}
    `;
}