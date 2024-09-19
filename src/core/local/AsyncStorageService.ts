import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Service for managing AsyncStorage operations.
 */
class AsyncStorageService {
  private static instance: AsyncStorageService;

  private constructor() {}

  /**
   * Gets the singleton instance of the AsyncStorageService.
   *
   * @returns {AsyncStorageService} - The singleton instance of the service.
   */
  static getInstance(): AsyncStorageService {
    if (!AsyncStorageService.instance) {
      AsyncStorageService.instance = new AsyncStorageService();
    }
    return AsyncStorageService.instance;
  }

  /**
   * Saves data to AsyncStorage.
   *
   * @param {string} key - The key under which the data is stored.
   * @param {string | undefined} value - The data to be stored.
   * @returns {Promise<string>} - A promise that resolves to the saved data.
   * @throws {Error} - Throws an error if saving fails.
   */
  async saveData(key: string, value: string | undefined): Promise<string> {
    try {
      await AsyncStorage.setItem(key, value ?? '');
      const savedData = await AsyncStorage.getItem(key);
      return savedData ?? '';
    } catch (error) {
      throw error;
    }
  }

  /**
   * Retrieves data from AsyncStorage.
   *
   * @param {string} key - The key under which the data is stored.
   * @returns {Promise<string | null>} - A promise that resolves to the retrieved data or null if not found.
   * @throws {Error} - Throws an error if retrieval fails.
   */
  async retrieveData(key: string): Promise<string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log('Error retrieving data:', error);
      throw error;
    }
  }
}

export default AsyncStorageService.getInstance();
