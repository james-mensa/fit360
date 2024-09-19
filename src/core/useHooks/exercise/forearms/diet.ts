export const getDietRecommendationsForForearms = (
  phase: number,
): {breakfast: string[]; lunch: string[]; dinner: string[]} => {
  switch (phase) {
    case 1:
      return {
        breakfast: [
          'Steel-cut oats with flaxseeds, chia seeds, and fresh berries 🌾🍓',
          'Greek yogurt with mixed nuts, seeds, and a drizzle of honey 🥜🍯',
        ],
        lunch: [
          'Grilled chicken quinoa bowl with spinach, avocado, and sunflower seeds 🍗🥑🌱',
          'Lentil and vegetable stew with a side of kale salad 🍲🥗',
        ],
        dinner: [
          'Baked salmon with quinoa, roasted Brussels sprouts, and a side of sautéed spinach 🐟🌱',
          'Grilled tofu with brown rice, steamed broccoli, and a side of mixed greens 🍚🥦',
        ],
      };
    case 2:
      return {
        breakfast: [
          'Smoothie bowl with spinach, banana, almond butter, and a sprinkle of hemp seeds 🍌🌱',
          'Egg white omelette with mushrooms, bell peppers, and a side of whole grain toast 🍳🍄',
        ],
        lunch: [
          'Turkey and avocado salad with mixed greens, cherry tomatoes, and pumpkin seeds 🥗🥑',
          'Black bean and quinoa stuffed peppers with a side of steamed asparagus 🥗🌾',
        ],
        dinner: [
          'Grilled chicken with sweet potato mash, sautéed kale, and a side of roasted beets 🍗🍠',
          'Pan-seared cod with brown rice, sautéed green beans, and a side of spinach 🥦🍚',
        ],
      };
    case 3:
      return {
        breakfast: [
          'Overnight oats with almond milk, chia seeds, and a topping of fresh strawberries 🌰🍓',
          'Avocado toast on sprouted grain bread with poached eggs and cherry tomatoes 🥑🍳🍅',
        ],
        lunch: [
          'Grilled shrimp with mixed greens, quinoa, and a citrus vinaigrette 🍤🥗',
          'Baked falafel with a cucumber and tomato salad, served with hummus 🥙🥒🍅',
        ],
        dinner: [
          'Roasted chicken breast with wild rice, sautéed spinach, and roasted carrots 🍗🌾',
          'Stuffed portobello mushrooms with quinoa, black beans, and a side of steamed broccoli 🍄🌱',
        ],
      };
    case 4:
      return {
        breakfast: [
          'Chia pudding with coconut milk, topped with mixed berries and almonds 🥥🍓',
          'Protein pancakes made with oats, banana, and egg whites, served with fresh fruit 🍌🥞',
        ],
        lunch: [
          'Grilled chicken and avocado wrap with a side of kale chips 🌯🥑',
          'Quinoa salad with chickpeas, roasted vegetables, and a tahini dressing 🥗🌾',
        ],
        dinner: [
          'Herb-crusted salmon with roasted sweet potatoes, Brussels sprouts, and a side of mixed greens 🐟🥗',
          'Turkey chili with black beans, served with a side of roasted butternut squash 🍲🍗',
        ],
      };
    case 5:
      return {
        breakfast: [
          'Green smoothie with spinach, kale, avocado, and a scoop of protein powder 🌱🥑',
          'Egg and veggie scramble with bell peppers, onions, and a side of whole grain toast 🍳🌶️',
        ],
        lunch: [
          'Grilled chicken Caesar salad with a light yogurt-based dressing and whole grain croutons 🥗🍗',
          'Buddha bowl with brown rice, chickpeas, roasted veggies, and a tahini drizzle 🍲🌱',
        ],
        dinner: [
          'Baked cod with quinoa, steamed asparagus, and a side of roasted carrots 🐟🍚🥕',
          'Stuffed bell peppers with ground turkey, quinoa, and a side of steamed green beans 🌶️🥗',
        ],
      };
    case 6:
      return {
        breakfast: [
          'Acai bowl with mixed berries, granola, and a sprinkle of chia seeds 🍇🥣',
          'Omelette with spinach, tomatoes, and feta cheese, served with a side of whole grain toast 🍳🍅',
        ],
        lunch: [
          'Grilled salmon salad with mixed greens, avocado, and a citrus dressing 🥗🐟',
          'Quinoa and black bean bowl with roasted sweet potatoes, kale, and a lime-cilantro dressing 🍲🌱',
        ],
        dinner: [
          'Chicken stir-fry with brown rice, broccoli, and bell peppers 🍗🍚🥦',
          'Vegetable curry with tofu, served over cauliflower rice 🍛🥥',
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
