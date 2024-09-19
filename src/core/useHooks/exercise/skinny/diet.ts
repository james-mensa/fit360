export const getDietRecommendations = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Smoothie with spinach, banana, almond milk, and a tablespoon of flaxseeds 🍌🍹🌿',
          'Greek yogurt with fresh berries, a small handful of nuts, and a drizzle of honey 🍦🍓🥜🍯',
        ],
        lunch: [
          'Grilled chicken breast with a side of mixed greens and quinoa salad 🐔🌿🌾',
          'Turkey and avocado wrap with a side of fresh vegetable sticks 🌯🥑🥕',
        ],
        dinner: [
          'Baked salmon with steamed broccoli and a small serving of brown rice 🐟🥦🍚',
          'Stir-fried tofu with mixed vegetables and a side of quinoa 🍚🍜🥦',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Chia pudding with almond milk, topped with fresh fruit and a sprinkle of nuts 🍓🥥🥜',
          'Egg white scramble with spinach and a slice of whole grain toast 🍳🌿🍞',
        ],
        lunch: [
          'Chicken salad with mixed greens, chickpeas, and a light vinaigrette 🐔🥗🍋',
          'Tuna steak with a side of roasted vegetables and a small portion of sweet potato 🐟🥦🍠',
        ],
        dinner: [
          'Beef stir-fry with vegetables and a side of brown rice 🥩🥦🍚',
          'Baked cod with a side of sautéed greens and a small serving of farro 🐟🌿🍚',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Scrambled eggs with cherry tomatoes and a slice of whole grain toast 🍳🍅🍞',
          'Overnight oats with fresh berries, a small amount of nuts, and a dash of cinnamon 🌰🍓🥜',
        ],
        lunch: [
          'Quinoa and black bean bowl with mixed vegetables and a small serving of grilled chicken 🌾🌽🍗',
          'Chicken and avocado wrap with a side of cucumber and tomato salad 🥗🥑🌯',
        ],
        dinner: [
          'Grilled shrimp with a side of roasted carrots and a small portion of brown rice 🍤🥕🍚',
          'Stuffed bell peppers with ground turkey and a side of steamed green beans 🌶️🍗🥗',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Acai bowl with granola, mixed berries, and a small amount of nuts 🍇🥣🥜',
          'Spinach and feta omelette with a side of fruit 🍳🌿🧀🍓',
        ],
        lunch: [
          'Grilled chicken and quinoa salad with mixed veggies and a light balsamic glaze 🐔🌾🥗🍋',
          'Roasted vegetable and hummus wrap with a side of fresh fruit 🌯🍠🍎',
        ],
        dinner: [
          'Herb-crusted salmon with a side of quinoa and roasted Brussels sprouts 🐟🍚🥦',
          'Lean beef chili with a side of mixed greens salad 🍲🥗',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Green smoothie with kale, avocado, banana, and a small scoop of protein powder 🍃🥑🍌💪',
          'Omelette with mushrooms, bell peppers, and a slice of whole grain toast 🍳🍄🌶️🍞',
        ],
        lunch: [
          'Chicken Caesar salad with whole grain croutons and a side of steamed sweet potato 🥗🍗🍠',
          'Buddha bowl with brown rice, chickpeas, and a variety of roasted vegetables 🍲🌱',
        ],
        dinner: [
          'Baked cod with a side of quinoa and steamed asparagus 🐟🍚🥦',
          'Stuffed bell peppers with ground turkey and a side of sautéed spinach 🌶️🍗🌿',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Acai bowl with granola, mixed berries, and a sprinkle of chia seeds 🍇🥣🌰',
          'Omelette with spinach, tomatoes, and a small amount of feta cheese 🍳🍅🧀',
        ],
        lunch: [
          'Grilled salmon salad with avocado, cherry tomatoes, and a citrus vinaigrette 🥗🐟🍋',
          'Quinoa and black bean bowl with roasted vegetables and a side of fresh guacamole 🍲🥑🌱',
        ],
        dinner: [
          'Chicken stir-fry with mixed vegetables and a side of cauliflower rice 🍗🥦🌾',
          'Vegetable curry with tofu served over a small serving of brown rice 🍛🥥🍚',
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
