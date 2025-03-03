function calculateCarbon() {
    let transport = document.getElementById("transport").value || 0;
    let electricity = document.getElementById("electricity").value || 0;
    let meat = document.getElementById("meat").value || 0;

    // Carbon emission factors (approximate values)
    let transportEmission = transport * 0.404 * 52;  // miles per week * CO₂/mile * weeks
    let electricityEmission = electricity * 0.92 * 12; // kWh per month * CO₂/kWh * months
    let meatEmission = meat * 22 * 52; // times per week * CO₂ per meal * weeks

    let totalEmission = transportEmission + electricityEmission + meatEmission;
    
    document.getElementById("result").textContent = totalEmission.toFixed(2);

    // Suggestions
    let suggestions = "";
    if (totalEmission > 10000) {
        suggestions = "Your carbon footprint is high! Consider using public transport, reducing electricity usage, and eating less meat.";
    } else if (totalEmission > 5000) {
        suggestions = "Your carbon footprint is moderate. You can still improve by using energy-efficient appliances and reducing car usage.";
    } else {
        suggestions = "Great job! Your carbon footprint is low. Keep up the eco-friendly habits!";
    }

    document.getElementById("suggestions").textContent = suggestions;
}
