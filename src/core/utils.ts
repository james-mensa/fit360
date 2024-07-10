import {LocalStoreKey} from './data-types';
import _ from 'lodash';
import AsyncStorageService from './local/AsyncStorageService';
import {PermissionsAndroid} from 'react-native';

const getLocalResponse = async (key: LocalStoreKey) => {
  try {
    const value = await AsyncStorageService.retrieveData(key);
    return value;
  } catch (error) {}
};

const setLocalData = async (key: LocalStoreKey, value: string | undefined) => {
  try {
    const response = await AsyncStorageService.saveData(key, value);
    return response;
  } catch (error) {}
};

/**
 * Converts an array of strings to a single string with a specified delimiter.
 *
 * @param {string[]} data - The array of strings to be joined.
 * @returns {string} - The resulting string after joining the array elements.
 */
const convertArrayToString = (data: string[]): string => {
  const delimiter = '::';
  return _.join(data, delimiter);
};

/**
 * Converts a string back to an array of strings using a specified delimiter.
 *
 * @param {string} data - The string to be split into an array.
 * @returns {string[]} - The resulting array after splitting the string.
 */
const convertStringToArray = (data: string): string[] => {
  const delimiter = '::';
  return _.split(data, delimiter);
};

const requestCameraPermission = async (): Promise<boolean> => {
  let response: boolean = false;
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Fitness360 app Camera Permission',
        message:
          'Fitness360 needs access to your camera ' +
          'this allows you can take  pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      response = true;
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
  return response;
};

export {
  getLocalResponse,
  setLocalData,
  convertArrayToString,
  convertStringToArray,
  requestCameraPermission,
};
