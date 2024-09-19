export const getDietRecommendationsForMale = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Omelette with spinach, mushrooms, and cheese 🍳🍄🧀',
          'Greek yogurt with mixed nuts and honey 🍦🥜🍯',
        ],
        lunch: [
          'Grilled chicken breast with sweet potato and mixed greens 🍗🍠🥗',
          'Quinoa salad with chickpeas, cucumbers, and cherry tomatoes 🌾🥒🍅',
        ],
        dinner: [
          'Baked salmon with quinoa and steamed broccoli 🐟🍚🥦',
          'Stir-fried tofu with bell peppers and brown rice 🍚🌶️',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Smoothie with protein powder, banana, and almond milk 🍹🍌🌰',
          'Avocado toast with a poached egg 🍞🥑🍳',
        ],
        lunch: [
          'Turkey and avocado wrap with a side of carrot sticks 🌯🥑🥕',
          'Chicken and vegetable stir-fry with brown rice 🍗🍚🥦',
        ],
        dinner: [
          'Grilled shrimp with wild rice and roasted asparagus 🍤🍚🌿',
          'Beef and vegetable kebabs with a side of couscous 🍢🍲',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Chia pudding with almond milk, topped with fresh berries 🍓🥥',
          'Egg white omelette with bell peppers and onions 🍳🌶️🧅',
        ],
        lunch: [
          'Quinoa and black bean salad with corn and lime dressing 🌾🌽',
          'Grilled chicken Caesar salad with a yogurt-based dressing 🥗🍗',
        ],
        dinner: [
          'Baked cod with roasted Brussels sprouts and mashed sweet potatoes 🐟🥔',
          'Stuffed bell peppers with ground turkey and a side of steamed green beans 🌶️🍗🥗',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Protein pancakes with fresh fruit and a dollop of Greek yogurt 🍌🥞🍦',
          'Green smoothie with kale, banana, and protein powder 🌱🍌',
        ],
        lunch: [
          'Chicken and avocado salad with quinoa chips 🥗🥑',
          'Roasted vegetable and hummus wrap 🌯🍠',
        ],
        dinner: [
          'Herb-crusted salmon with roasted vegetables and a side of mixed greens 🐟🥗',
          'Beef chili with a side of cornbread 🍲🍞',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Acai bowl with granola, mixed berries, and chia seeds 🍇🥣',
          'Egg and vegetable scramble with a side of whole grain toast 🍳🌶️',
        ],
        lunch: [
          'Grilled chicken Caesar salad with whole grain croutons 🥗🍗',
          'Buddha bowl with brown rice, chickpeas, and roasted veggies 🍲🌱',
        ],
        dinner: [
          'Baked cod with quinoa, steamed asparagus, and roasted carrots 🐟🍚🥕',
          'Stuffed bell peppers with ground turkey and quinoa 🌶️🍗',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Omelette with spinach, tomatoes, and feta cheese, served with whole grain toast 🍳🍅🧀',
          'Greek yogurt parfait with granola and fresh fruit 🍦🍓',
        ],
        lunch: [
          'Grilled salmon salad with avocado and a citrus dressing 🥗🐟',
          'Quinoa and black bean bowl with roasted sweet potatoes and kale 🍲🌱',
        ],
        dinner: [
          'Chicken stir-fry with brown rice and mixed vegetables 🍗🍚🥦',
          'Vegetable curry with tofu served over cauliflower rice 🍛🥥',
        ],
      };
    default:
      return {
        breakfast: [],
        lunch: [],
        dinner: [],
      };
  }
};
