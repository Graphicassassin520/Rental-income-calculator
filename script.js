function calculateIncome() {
    // Retrieve values from form elements
    const location = document.getElementById("location").value;
    const season = document.getElementById("season").value;
    const room_size = document.getElementById("room_size").value;
    const nights = parseInt(document.getElementById("nights").value);
    const arp = document.getElementById("arp").value;

    // Check if all necessary inputs are provided
    if (!location || !season || !room_size || isNaN(nights) || !arp) {
        document.getElementById("income_result").innerHTML = "<strong>Please fill in all fields.</strong>";
        return;
    }

    // Define rates based on location, season, and room size
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

    // Calculate the nightly rate and total income based on selections
    let nightly_rate = rates[location][season][room_size];
    let effective_nights = nights > 4 ? 5 : nights; // Use special pricing rule for more than 4 nights
    let total_income = nightly_rate * effective_nights;

    // Calculate annual, 10-year, and 20-year projections
    let days_per_year = nights > 4 ? 5 * 365 / 7 : nights * 365;
    let income_per_year = nightly_rate * days_per_year;
    let income_10_years = income_per_year * 10;
    let income_20_years = income_per_year * 20;

    // Generate the ARP status text based on user input
    let arp_text = arp === "yes" ? "13 Month Advance Priority Reservations" : "12 Month Advance Priority Reservations";

    // Update the HTML to display results with formatted numbers
    document.getElementById("income_result").innerHTML = `
        <strong>Projected Rental Income: $${total_income.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong><br>
        Annual Projection: $${income_per_year.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        10 Year Projection: $${income_10_years.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        20 Year Projection: $${income_20_years.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}<br>
        ${arp_text}
    `;
}