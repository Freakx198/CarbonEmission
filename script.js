function calculateCarbon() {
    const miles = Math.max(0, parseFloat(document.getElementById('transport').value) || 0);
    const electricity = Math.max(0, parseFloat(document.getElementById('electricity').value) || 0);
    const meat = Math.max(0, parseFloat(document.getElementById('meat').value) || 0);

    // Carbon emission factors (approximate values)
    const milesCO2 = miles * 0.404 * 52; // Weekly miles to annual CO₂
    const electricityCO2 = electricity * 0.92 * 12; // Monthly kWh to annual CO₂
    const meatCO2 = meat * 22 * 52; // Weekly meat consumption to annual CO₂

    const totalCO2 = milesCO2 + electricityCO2 + meatCO2;

    // Calculate tree count needed to offset CO₂
    const treeCount = Math.round(totalCO2 / 22); // 1 tree absorbs ~22kg CO₂ per year

    document.getElementById('result').textContent = totalCO2.toFixed(2);
    
    document.getElementById('suggestions').innerHTML = 
        totalCO2 > 0 
        ? `You owe nature <b>${treeCount}</b> tree${treeCount > 1 ? 's' : ''}! Consider reducing your footprint.` 
        : "Great! No emissions detected.";
}
