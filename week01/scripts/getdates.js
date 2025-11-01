// getdates.js - JavaScript to populate footer dates

// Get current year and populate the currentyear span
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate the lastModified paragraph
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;