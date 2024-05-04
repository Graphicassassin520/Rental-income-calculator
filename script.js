function calculateIncome() {
    // Retrieve values from form elements
    const location = document.getElementById("location").value;
    const season = document.getElementById("season").value;
    const room_size = document.getElementById("room_size").value;
    const nights = parseInt(document.getElementById("nights").value);
    const arp = document.getElementById("arp").value;

    // Validate input fields to ensure all necessary fields are filled
    if (!location || !season || !room_size || isNaN(nights) || !arp) {
        document.getElementById("income_result").innerHTML = "<strong>Please fill in all fields.</strong>";
        return;
    }

    // Rates configuration based on location, season, and room size
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

    // Determine the nightly rate from the rates object
    let nightly_rate = rates[location][season][room_size];
    // Calculate the total income for the number of effective nights
    let effective_nights = nights > 4 ? 5 : nights;  // Applies special rule for more than 4 nights
    let total_income = nightly_rate * effective_nights;

    // Projections are based on only one rental period per year
    let annual_income = total_income;  // Only one rental week's income per year
    let income_10_years = annual_income * 10;
    let income_20_years = annual_income * 20;

    // ARP text based on user selection
    let arp_text = arp === "yes" ? "13 Month Advance Priority Reservations" : "12 Month Advance Priority Reservations";

    // Update the HTML element to display results
    document.getElementById("income_result").innerHTML = `
        <strong>Projected Rental Income: $${total_income.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong><br>
        Annual Projection: $${annual_income.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        10 Year Projection: $${income_10_years.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        20 Year Projection: $${income_20_years.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        ${arp_text}
    `;
}