function calculateIncome() {
    // Retrieve values from form elements
    const location = document.getElementById("location").value;
    const season = document.getElementById("season").value;
    const room_size = document.getElementById("room_size").value;
    const nights = parseInt(document.getElementById("nights").value);
    const arp = document.getElementById("arp").value;

    // Validate input fields are selected and nights are a number
    if (!location || !season || !room_size || isNaN(nights) || !arp) {
        document.getElementById("income_result").innerHTML = "<strong>Please fill in all fields.</strong>";
        return;
    }

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

    // Determine nightly rate and calculate total income for the stay
    let nightly_rate = rates[location][season][room_size];
    let effective_nights = nights > 4 ? 5 : nights;
    let total_income = nightly_rate * effective_nights;

    // Calculate annual, 10-year, and 20-year projections assuming one rental week per year
    let annual_income = nightly_rate * effective_nights;  // Only one week per year
    let income_10_years = annual_income * 10;
    let income_20_years = annual_income * 20;

    // Determine ARP status text based on the user selection
    let arp_text = arp === "yes" ? "13 Month Advance Priority Reservations" : "12 Month Advance Priority Reservations";

    // Update the HTML to display results with formatted numbers
    document.getElementById("income_result").innerHTML = `
        <strong>Projected Rental Income: $${total_income.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong><br>
        Annual Projection: $${annual_income.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        10 Year Projection: $${income_10_years.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        20 Year Projection: $${income_20_years.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        ${arp_text}
    `;
}