import { Settings } from "../models/settings";
import { StorageManager } from "./storage-manager";

/**
 * A manager class responsible for handling the logic related to settings.
 */
export class SettingsManager {
    
    /**
     * Retrieve settings. If settings do not exist, initialize them, store them, and then return them.
     * 
     * @returns A promise that resolves with the retrieved or created settings.
     */
    static async getSettings(): Promise<Settings> {
        try {
            let settings = await StorageManager.getSettings();
            
            // If settings are not found, initialize them.
            if (Object.keys(settings).length === 0) {
                settings = new Settings();
                await StorageManager.saveSettings(settings);
            }
            return settings;
        } catch (error: unknown) {
            throw new Error(`Failed to retrieve settings: ${(error as Error).message}`);
        }
    }

    /**
     * Save settings to storage.
     * 
     * @param settings - An instance of the Settings class that needs to be stored.
     * @returns A promise that resolves when the settings have been saved.
     */
    static async saveSettings(settings: Settings): Promise<void> {
        try {
            await StorageManager.saveSettings(settings);
        } catch (error) {
            throw new Error(`Failed to save settings: ${(error as Error).message}`);
        }
    }
}
