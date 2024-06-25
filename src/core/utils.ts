import {LocalStoreKeys} from './data-types';
import AsyncStorageService from './local/AsyncStorageService';

const getLocalResponse = async (key: LocalStoreKeys) => {
  try {
    const value = await AsyncStorageService.retrieveData(key);
    console.log({value});
    return value;
  } catch (error) {}
};

const setLocalData = async (key: LocalStoreKeys, value: string | undefined) => {
  try {
    const response = await AsyncStorageService.saveData(key, value);
    return response;
  } catch (error) {}
};
export {getLocalResponse, setLocalData};
