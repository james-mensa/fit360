import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
  private static instance: AsyncStorageService;

  private constructor() {}

  static getInstance(): AsyncStorageService {
    if (!AsyncStorageService.instance) {
      AsyncStorageService.instance = new AsyncStorageService();
    }
    return AsyncStorageService.instance;
  }
  async saveData(key: string, value: string | undefined): Promise<string> {
    try {
      await AsyncStorage.setItem(key, value ?? '');
      console.log('Data successfully saved');
      const savedData = await AsyncStorage.getItem(key);
      return savedData ?? '';
    } catch (error) {
      console.log('Error saving data:', error);
      throw error;
    }
  }

  async retrieveData(key: string): Promise<string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Retrieved data:', value);
      } else {
        console.log('No data found');
      }
      return value;
    } catch (error) {
      console.log('Error retrieving data:', error);
      throw error;
    }
  }
}

export default AsyncStorageService.getInstance();
