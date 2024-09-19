export function getRandomNumbers(): number[] {
  const numbers: number[] = [];
  while (numbers.length < 3) {
    const randomNum = Math.floor(Math.random() * 4); // Generates a number between 0 and 3
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}

/**
 * Calculates the equivalent weight loss based on the calories burned.
 *
 * @param calories - The number of calories burned.
 * @returns The estimated weight loss in pounds, rounded to 4 decimal places.
 */
export const calculateWeightLoss = (calories: number): number => {
  const caloriesPerPound = 3500; // Represents the number of calories per pound of weight loss
  const weightLoss = calories / caloriesPerPound;

  // Round to 4 decimal places and return as a number
  return parseFloat(weightLoss.toFixed(3));
};

export const generateDailyChallengeId = (): number => {
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate(); // Get the current day of the month (1-31)
  const month = currentDate.getMonth() + 1; // Get the current month (1-12), adding 1 because getMonth() returns 0-11
  const uniqueNumber = ((dayOfMonth * 7 + month * 13) % 80) + 1;

  return uniqueNumber;
};

// Helper function to create a seeded random number generator
const createSeededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return () => x - Math.floor(x);
};

interface ChallengeTY {
  items: string[];
  uniqueId: number;
}
// Shuffle items using a seeded random function
export const dailyChallenge = (items: string[]): ChallengeTY => {
  const seed = generateDailyChallengeId();
  const random = createSeededRandom(seed);

  // Shuffle the items array using the Fisher-Yates algorithm with seeded randomness
  const shuffledItems = [...items];
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }

  // If the length of the items array is greater than 3, return a trimmed list
  const newLength = items.length > 3 ? items.length - 2 : items.length;
  const result = shuffledItems.slice(0, newLength);
  return {
    items: result,
    uniqueId: seed,
  };
};

export const generateKeyId = (): number => {
  return Math.floor(10000 + Math.random() * 90000);
};
