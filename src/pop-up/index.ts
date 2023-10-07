/**
 * Initialization - Wait for DOM Content loading to initialize the UI Interactions.
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeUIInteractions(); 
});

/**
 * Initialize UI Interactions - Setup the event listeners related to UI interactions.
 */
function initializeUIInteractions(): void {
    setupDashboardButton();
}

/**
 * Setup Statistics Button - Add event listener to the statistics button to open the advanced statistics page.
 */
function setupDashboardButton(): void {
    document.getElementById('viewDashboard')?.addEventListener('click', () => {
        chrome.tabs.create({ url: chrome.runtime.getURL('src/dashboard/index.html') });
    });
}

// Add your pop-up script here
