import {LocalStoreKey} from './data-types';
import _ from 'lodash';
import AsyncStorageService from './local/AsyncStorageService';
import {PermissionsAndroid} from 'react-native';
import {CardIcons} from '@assets/register';
import {WorkoutModelTy} from './db/types';

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

function getToolImg() {
  const randomIndex = Math.floor(Math.random() * CardIcons.tools.length);
  return CardIcons.tools[randomIndex];
}

function getFirstIncompleteExercise(
  exercises: WorkoutModelTy[],
): WorkoutModelTy | undefined {
  return exercises.find(exercise => !exercise.completed);
}
function isNextCompleted(
  exercises: WorkoutModelTy[],
  currentExercise: WorkoutModelTy,
): boolean | undefined {
  const currentIndex = exercises.findIndex(
    exercise => exercise.name === currentExercise.name,
  );

  if (currentIndex === -1 || currentIndex === exercises.length - 1) {
    // If the current exercise is not found or is the last exercise, return undefined
    return undefined;
  }

  return exercises[currentIndex + 1].completed;
}

function hasNextExercise(
  exercises: WorkoutModelTy[],
  currentExercise: WorkoutModelTy,
): boolean {
  const currentIndex = exercises.findIndex(
    exercise => exercise.name === currentExercise.name,
  );

  if (currentIndex === -1 || currentIndex === exercises.length - 1) {
    // If the current exercise is not found or is the last exercise
    return false;
  }

  return true;
}

function formatTime(seconds: number, short?: boolean): string {
  if (seconds < 0) {
    throw new Error('Seconds must be a non-negative number.');
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  let result = '';

  if (minutes > 0) {
    result += `${minutes} ${short ? 'm' : 'minute'}${minutes > 1 ? 's' : ''}`;
  }

  if (remainingSeconds > 0) {
    if (result) {
      result += ' ';
    }
    result += `${remainingSeconds} ${short ? 's' : 'second'}${
      remainingSeconds > 1 ? '' : ''
    }`;
  }

  // Handle case where the result is empty (i.e., seconds = 0)
  if (result === '') {
    result = '0 seconds';
  }

  return result;
}

export {
  getLocalResponse,
  setLocalData,
  convertArrayToString,
  convertStringToArray,
  requestCameraPermission,
  generateId,
  getToolImg,
  getFirstIncompleteExercise,
  isNextCompleted,
  hasNextExercise,
  formatTime,
};
