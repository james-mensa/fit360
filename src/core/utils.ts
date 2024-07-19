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

/**
 * Generates a seed based on the current time and date.
 * @returns {number} A number representing the current timestamp.
 */
function generateSeed(): number {
  return new Date().getTime();
}

/**
 * Generates a pseudo-random number generator function using a seed.
 *
 * @param {number} seed - A seed for the random number generator to ensure repeatability.
 * @returns {() => number} A function that generates pseudo-random numbers between 0 and 1.
 */
function seededRandom(seed: number): () => number {
  let m = 0x80000000; // 2**31
  let a = 1103515245;
  let c = 12345;
  let state = seed ? seed % m : Math.floor(Math.random() * m);

  return function () {
    state = (a * state + c) % m;
    return state / (m - 1);
  };
}

/**
 * Generates a string of random single-digit numbers with a length between the specified min and max values.
 *
 * @param {number} min - The minimum number of figures to generate. Default is 4.
 * @param {number} max - The maximum number of figures to generate. Default is 6.
 * @param {number} seed - A seed for the random number generator to ensure repeatability. Default is the current timestamp.
 * @returns {string} A string containing random single-digit numbers.
 */
function generateId(
  min: number = 4,
  max: number = 6,
  seed: number = generateSeed(),
): string {
  const rng = seededRandom(seed);

  const numFigures = Math.floor(rng() * (max - min + 1)) + min;
  let figures = '';

  for (let i = 0; i < numFigures; i++) {
    const randomFigure = Math.floor(rng() * 10); // Generates a single digit number (0-9)
    figures += randomFigure.toString();
  }

  return figures;
}

export {
  getLocalResponse,
  setLocalData,
  convertArrayToString,
  convertStringToArray,
  requestCameraPermission,
  generateId,
};
