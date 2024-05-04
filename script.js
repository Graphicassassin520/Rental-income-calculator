<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rental Income Calculator</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="logo-container">
    <img src="https://spinnakerresorts.com/wp-content/uploads/spinnaker-40-years-logo-2023-1.jpg" alt="Spinnaker Resorts Logo" id="brandLogo">
    <img src="https://www.timesharesonly.com/wp-content/uploads/2021/03/timeshares-only-logo-white.svg" height="35" width="240" alt="Timeshares Only Logo">
</div>
<h2>Rental Income Calculator</h2>
<label for="location">Choose a location:</label>
<select id="location">
  <option value="ormond_beach">Ormond Beach</option>
  <option value="branson">Branson</option>
</select>

<label for="season">Choose the season:</label>
<select id="season">
  <option value="standard">Standard</option>
  <option value="event_week">Event Week</option>
</select>

<label for="room_size">Choose room size:</label>
<select id="room_size">
  <option value="studio">Studio</option>
  <option value="1_bd">1 Bedroom</option>
  <option value="2_bd">2 Bedroom</option>
  <option value="3_bd">3 Bedroom</option>
</select>

<label for="nights">Number of nights:</label>
<select id="nights">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
</select>

<label for="arp">Advance Reservation Priority (ARP):</label>
<select id="arp">
  <option value="yes">Yes</option>
  <option value="no">No</option>
</select>

<button onclick="calculateIncome()">Calculate Income</button>

<div class="result" id="income_result"></div>
<script src="script.js"></script>
</body>
</html>