import { Settings } from "../models/settings";

/**
 * A service class that provides methods to interact with the chrome storage API
 * for storing and retrieving extension settings.
 */
export class StorageManager {
    
    /**
     * Key used to store settings in chrome.storage.sync.
     */
    private static SETTINGS_KEY = 'extensionSettings';

    /**
     * Save settings to chrome.storage.sync.
     * 
     * @param settings - An instance of the Settings class that needs to be stored.
     * @returns A promise that resolves when the settings have been saved.
     */
    static saveSettings(settings: Settings): Promise<void> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set({ [this.SETTINGS_KEY]: settings }, () => {
                // Check if there are any errors and reject the promise if found.
                if (chrome.runtime.lastError) {
                    return reject(new Error(chrome.runtime.lastError.message));
                }
                resolve();
            });
        });
    }

    /**
     * Retrieve settings from chrome.storage.sync.
     * 
     * @returns A promise that resolves with the retrieved settings.
     */
    static getSettings(): Promise<Settings> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(this.SETTINGS_KEY, (result) => {
                // Check if there are any errors and reject the promise if found.
                if (chrome.runtime.lastError) {
                    return reject(new Error(chrome.runtime.lastError.message));
                }
                // If settings are not found, return a new instance of Settings.
                if (result[this.SETTINGS_KEY] == null) {
                    resolve(new Settings());
                } else {
                    resolve(result[this.SETTINGS_KEY] as Settings);
                }
            });
        });
    }

    /**
     * Clears all settings from chrome.storage.sync.
     * 
     * @returns A promise that resolves when the settings have been cleared.
     */
    static clearSettings(): Promise<void> {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.clear(() => {
                // Check if there are any errors and reject the promise if found.
                if (chrome.runtime.lastError) {
                    return reject(new Error(chrome.runtime.lastError.message));
                }
                resolve();
            });
        });
    }
}
