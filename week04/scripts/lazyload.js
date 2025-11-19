document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate the lastModified paragraph
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;