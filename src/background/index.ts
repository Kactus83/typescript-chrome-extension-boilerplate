import { Settings } from "../common/models/settings";
import { SettingsManager } from "../common/services/settings-manager";

export class Background {

    settings?: Settings;

    constructor() {
        console.log('Background script loaded');
    };

    /**
     * Initialize background script.
     * Retrieves settings and performs any setup logic.
     */
    public async init(): Promise<void> {
        console.log('Background script init');
        try {
            this.settings = await SettingsManager.getSettings();
            console.log('Settings retrieved:', this.settings);
        } catch (error) {
            console.error('Failed to initialize settings:', (error as Error).message);
        }
    };
}

// Initialize background script
const background = new Background();
background.init();
